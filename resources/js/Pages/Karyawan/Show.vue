<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import Moment from "moment";
import Datepicker from "@vuepic/vue-datepicker";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        karyawan: Object,
    },

    components: {
        AppLayout,
        ActionMessage,
        Moment,
        Datepicker,
        Link,
    },

    data() {
        return {
            url_foto: null,
            url_foto_ktp: null,
            disableInput: true,
            disableUploadFoto: true,
            disableUploadKtp: true,
            moment: Moment,
            tanggal: this.karyawan.tanggal_lahir,
            form: this.$inertia.form({
                nama_lengkap: this.karyawan.nama_lengkap,
                no_hp: this.karyawan.no_hp,
                email: this.karyawan.email,
                bagian: this.karyawan.bagian,
                nomor_identitas: this.karyawan.nomor_identitas,
                tempat_lahir: this.karyawan.tempat_lahir,
                tanggal_lahir: this.karyawan.tanggal_lahir,
                jenis_kelamin: this.karyawan.jenis_kelamin,
                status_perkawinan: this.karyawan.status_perkawinan,
                rt: String(this.karyawan.rt_rw).substring(
                    0,
                    String(this.karyawan.rt_rw).indexOf("/")
                ),
                rw: String(this.karyawan.rt_rw).substring(
                    String(this.karyawan.rt_rw).indexOf("/") + 1
                ),
                kelurahan: this.karyawan.kelurahan,
                kecamatan: this.karyawan.kecamatan,
                kota: this.karyawan.kota,
                agama: this.karyawan.agama,
                pekerjaan: this.karyawan.pekerjaan,
                kewarganegaraan: this.karyawan.kewarganegaraan,
            }),
            formFoto: this.$inertia.form({
                foto: "",
            }),
            formKtp: this.$inertia.form({
                foto_ktp: "",
            }),
        };
    },

    methods: {
        previewFoto(e) {
            const file = e.target.files[0];
            this.formFoto.foto = file;
            this.url_foto = URL.createObjectURL(file);
        },

        previewFotoKTP(e) {
            const file = e.target.files[0];
            this.formKtp.foto_ktp = file;
            this.url_foto_ktp = URL.createObjectURL(file);
        },

        submit(id) {
            this.form.tanggal_lahir = this.changeFormatDate();
            this.form.put(route("karyawan.update", { id }), {
                onSuccess: () => {
                    this.disableInput = true;
                },
            });
        },

        submitFoto(id) {
            this.formFoto.post(route("karyawan.update.file", { id }), {
                preserveScroll: true,
                onSuccess: () => {
                    this.disableUploadFoto = true;
                },
            });
        },

        submitKtp(id) {
            this.formKtp.post(route("karyawan.update.file", { id }), {
                preserveScroll: true,
                onSuccess: () => {
                    this.disableUploadKtp = true;
                },
            });
        },

        backPage() {
            this.$inertia.get(route("karyawan.index"));
        },

        maxDate() {
            let year = new Date().getFullYear() - 17;
            let dateIs = new Date(new Date().setFullYear(year));
            return dateIs;
        },

        changeFormatDate() {
            let dateValue = new Date(this.tanggal);
            let date = dateValue.getDate();
            let month = dateValue.getMonth() + 1;
            let year = dateValue.getFullYear();
            if (String(date).length == 1) {
                date = "0" + date;
            }
            if (String(month).length == 1) {
                month = "0" + month;
            }
            return date + "-" + month + "-" + year;
        },

        enableUploadFoto() {
            this.disableUploadFoto = false;
            this.disableUploadKtp = true;
            this.disableInput = true;
        },

        enableUploadKtp() {
            this.disableUploadKtp = false;
            this.disableUploadFoto = true;
            this.disableInput = true;
        },

        enableInput() {
            this.disableInput = false;
            this.disableUploadKtp = true;
            this.disableUploadFoto = true;
        },
    },
});
</script>

<template>
    <app-layout title="Detail Karyawan">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Detail Karyawan
                    </h5>
                </div>
                <div class="flex flex-col p-5">
                    <div class="md:flex no-wrap md:-mx-2">
                        <!-- Left Side -->
                        <div class="w-full md:w-3/12 md:mx-2">
                            <!-- Profile Card -->
                            <div class="p-3">
                                <div class="image overflow-hidden">
                                    <img
                                        v-if="url_foto"
                                        class="h-auto w-full mx-auto"
                                        :src="url_foto"
                                        alt="foto"
                                    />
                                    <img
                                        v-else
                                        class="h-auto w-full mx-auto"
                                        :src="
                                            $page.props.asset +
                                            '/karyawan/foto/' +
                                            karyawan.path_foto
                                        "
                                        :alt="karyawan.path_foto"
                                    />
                                </div>
                                <form
                                    @submit.prevent="submitFoto(karyawan.id)"
                                    enctype="multipart/form-data"
                                >
                                    <div
                                        class="text-center mb-6 space-y-2"
                                        v-if="disableUploadFoto"
                                    >
                                        <span
                                            class="text-xs italic font-semibold"
                                            >Foto Karyawan</span
                                        >
                                        <button
                                            type="button"
                                            @click.prevent="enableUploadFoto()"
                                            class="inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                        >
                                            Ganti Foto
                                        </button>
                                    </div>
                                    <div
                                        class="form-group space-y-4 mt-3"
                                        v-else
                                    >
                                        <label
                                            for="foto"
                                            class="form-label inline-block mb-2 text-gray-700"
                                            >Upload Foto</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                            @change.prevent="previewFoto"
                                            :class="
                                                formFoto.errors.foto
                                                    ? 'focus:border-red-600 border-red-600'
                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                            "
                                            id="foto"
                                        />
                                        <div
                                            class="text-red-700 text-sm mt-1"
                                            v-show="formFoto.errors.foto"
                                        >
                                            {{ formFoto.errors.foto }}
                                        </div>
                                        <button
                                            type="submit"
                                            :class="{
                                                'opacity-25':
                                                    formFoto.processing,
                                            }"
                                            :disabled="formFoto.processing"
                                            class="inline-block pt-2.5 w-full text-center pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            <span class="mr-2"
                                                ><font-awesome-icon
                                                    icon="fa-solid fa-upload"
                                            /></span>
                                            Upload
                                        </button>
                                        <button
                                            type="button"
                                            @click.prevent="
                                                $emit(
                                                    (disableUploadFoto = true)
                                                )
                                            "
                                            class="inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <!-- End of profile card -->
                            <div class="my-2"></div>

                            <div class="p-3">
                                <div class="image overflow-hidden">
                                    <img
                                        v-if="url_foto_ktp"
                                        class="h-auto w-full mx-auto"
                                        :src="url_foto_ktp"
                                        alt="foto-ktp"
                                    />
                                    <img
                                        v-else
                                        class="h-auto w-full mx-auto"
                                        :src="
                                            $page.props.asset +
                                            '/karyawan/ktp/' +
                                            karyawan.path_foto_ktp
                                        "
                                        :alt="karyawan.path_foto_ktp"
                                    />
                                </div>
                                <form
                                    @submit.prevent="submitKtp(karyawan.id)"
                                    enctype="multipart/form-data"
                                >
                                    <div
                                        class="text-center mb-6 space-y-2"
                                        v-if="disableUploadKtp"
                                    >
                                        <span
                                            class="text-xs italic font-semibold"
                                            >Foto KTP</span
                                        >
                                        <button
                                            type="button"
                                            @click.prevent="enableUploadKtp()"
                                            class="inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                        >
                                            Ganti Foto KTP
                                        </button>
                                    </div>
                                    <div class="form-group space-y-3" v-else>
                                        <label
                                            for="foto_ktp"
                                            class="form-label inline-block mb-2 text-gray-700"
                                            >Upload KTP</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                            @change.prevent="previewFotoKTP"
                                            :class="
                                                formKtp.errors.foto_ktp
                                                    ? 'focus:border-red-600 border-red-600'
                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                            "
                                            id="foto_ktp"
                                        />
                                        <div
                                            class="text-red-700 text-sm mt-1"
                                            v-show="formKtp.errors.foto_ktp"
                                        >
                                            {{ formKtp.errors.foto_ktp }}
                                        </div>
                                        <button
                                            type="submit"
                                            :class="{
                                                'opacity-25':
                                                    formKtp.processing,
                                            }"
                                            :disabled="formKtp.processing"
                                            class="inline-block pt-2.5 w-full text-center pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            <span class="mr-2"
                                                ><font-awesome-icon
                                                    icon="fa-solid fa-upload"
                                            /></span>
                                            Upload
                                        </button>
                                        <button
                                            type="button"
                                            @click.prevent="
                                                $emit((disableUploadKtp = true))
                                            "
                                            class="inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Right Side -->
                        <div class="w-full md:w-9/12 mx-2">
                            <!-- Profile tab -->
                            <!-- About Section -->
                            <div class="p-3">
                                <form @submit.prevent="submit(karyawan.id)">
                                    <div>
                                        <div
                                            class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                                        >
                                            <span clas="text-green-500">
                                                <font-awesome-icon
                                                    icon="fa-solid fa-id-card-clip"
                                                />
                                            </span>
                                            <span class="tracking-wide"
                                                >Data Karyawan</span
                                            >
                                        </div>
                                        <div class="text-gray-700">
                                            <div class="text-sm p-4">
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >NIK
                                                                Karyawan</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="true"
                                                            :value="
                                                                karyawan.nik
                                                            "
                                                            type="number"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                        />
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="no_hp"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >No.
                                                                Telpon</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="tel"
                                                            v-model="form.no_hp"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .no_hp
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="no_hp"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .no_hp
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .no_hp
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="email"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Email</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="email"
                                                            v-model="form.email"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .email
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="email"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .email
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .email
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Bagian</strong
                                                            ></label
                                                        >
                                                        <div
                                                            class="mt-2 space-x-4"
                                                        >
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                                :class="
                                                                    disableInput &&
                                                                    karyawan.bagian !=
                                                                        'administrasi'
                                                                        ? 'hidden'
                                                                        : ''
                                                                "
                                                            >
                                                                <input
                                                                    :disabled="
                                                                        disableInput
                                                                    "
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="bagian_administrasi"
                                                                    value="administrasi"
                                                                    :checked="
                                                                        form.bagian ==
                                                                        'administrasi'
                                                                    "
                                                                    v-model="
                                                                        form.bagian
                                                                    "
                                                                />
                                                                <label
                                                                    class="form-check-label capitalize"
                                                                    for="bagian_administrasi"
                                                                    >Administrasi</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                                :class="
                                                                    disableInput &&
                                                                    karyawan.bagian !=
                                                                        'teknisi'
                                                                        ? 'hidden'
                                                                        : ''
                                                                "
                                                            >
                                                                <input
                                                                    :disabled="
                                                                        disableInput
                                                                    "
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="bagian_teknisi"
                                                                    value="teknisi"
                                                                    :checked="
                                                                        form.bagian ==
                                                                        'teknisi'
                                                                    "
                                                                    v-model="
                                                                        form.bagian
                                                                    "
                                                                />
                                                                <label
                                                                    class="form-check-label capitalize"
                                                                    for="bagian_teknisi"
                                                                    >Teknisi</label
                                                                >
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .bagian
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .bagian
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                                        >
                                            <span clas="text-green-500">
                                                <font-awesome-icon
                                                    icon="fa-solid fa-address-card"
                                                />
                                            </span>
                                            <span class="tracking-wide"
                                                >Data KTP</span
                                            >
                                        </div>
                                        <div class="text-gray-700">
                                            <div class="text-sm p-4">
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="nomor_identitas"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Nomor
                                                                Identitas</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="number"
                                                            v-model="
                                                                form.nomor_identitas
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .nomor_identitas
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="nomor_identitas"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .nomor_identitas
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .nomor_identitas
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="nama_lengkap"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Nama
                                                                lengkap</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="
                                                                form.nama_lengkap
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .nama_lengkap
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="nama_lengkap"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .nama_lengkap
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .nama_lengkap
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="tempat_lahir"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Tempat
                                                                Lahir</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="
                                                                form.tempat_lahir
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .tempat_lahir
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="tempat_lahir"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .tempat_lahir
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .tempat_lahir
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="tanggal_lahir"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Tanggal
                                                                Lahir</strong
                                                            ></label
                                                        >
                                                        <datepicker
                                                            v-model="tanggal"
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            :format="'dd-MM-yyyy'"
                                                            :startDate="
                                                                moment(
                                                                    '01-01-2000',
                                                                    'dd-MM-yyyy'
                                                                )
                                                            "
                                                            :placeholder="'Pilih Tanggal'"
                                                            :minDate="
                                                                moment(
                                                                    '01-01-1970',
                                                                    'dd-MM-yyyy'
                                                                )
                                                            "
                                                            :maxDate="maxDate()"
                                                            :position="'left'"
                                                            :id="'tanggal_lahir'"
                                                        ></datepicker>
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .tanggal_lahir
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .tanggal_lahir
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Jenis
                                                                Kelamin</strong
                                                            ></label
                                                        >
                                                        <div
                                                            class="mt-2 space-x-4"
                                                        >
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                                :class="
                                                                    disableInput &&
                                                                    karyawan.jenis_kelamin !=
                                                                        'laki-laki'
                                                                        ? 'hidden'
                                                                        : ''
                                                                "
                                                            >
                                                                <input
                                                                    :disabled="
                                                                        disableInput
                                                                    "
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="jk_laki"
                                                                    value="laki-laki"
                                                                    :checked="
                                                                        form.jenis_kelamin ==
                                                                        'laki-laki'
                                                                    "
                                                                    v-model="
                                                                        form.jenis_kelamin
                                                                    "
                                                                />
                                                                <label
                                                                    class="form-check-label capitalize"
                                                                    for="jk_laki"
                                                                    >Laki-Laki</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                                :class="
                                                                    disableInput &&
                                                                    karyawan.jenis_kelamin !=
                                                                        'perempuan'
                                                                        ? 'hidden'
                                                                        : ''
                                                                "
                                                            >
                                                                <input
                                                                    :disabled="
                                                                        disableInput
                                                                    "
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="jk_perempuan"
                                                                    value="perempuan"
                                                                    :checked="
                                                                        form.jenis_kelamin ==
                                                                        'perempuan'
                                                                    "
                                                                    v-model="
                                                                        form.jenis_kelamin
                                                                    "
                                                                />
                                                                <label
                                                                    class="form-check-label capitalize"
                                                                    for="jk_perempuan"
                                                                    >Perempuan</label
                                                                >
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .jenis_kelamin
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .jenis_kelamin
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Status
                                                                Perkawinan</strong
                                                            ></label
                                                        >
                                                        <div
                                                            class="mt-2 space-x-4"
                                                        >
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                                :class="
                                                                    disableInput &&
                                                                    karyawan.status_perkawinan !=
                                                                        'kawin'
                                                                        ? 'hidden'
                                                                        : ''
                                                                "
                                                            >
                                                                <input
                                                                    :disabled="
                                                                        disableInput
                                                                    "
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="kawin"
                                                                    value="kawin"
                                                                    :checked="
                                                                        form.status_perkawinan ==
                                                                        'kawin'
                                                                    "
                                                                    v-model="
                                                                        form.status_perkawinan
                                                                    "
                                                                />
                                                                <label
                                                                    class="form-check-label capitalize"
                                                                    for="kawin"
                                                                    >Kawin</label
                                                                >
                                                            </div>
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                                :class="
                                                                    disableInput &&
                                                                    String(
                                                                        form.status_perkawinan
                                                                    ).replace(
                                                                        ' ',
                                                                        '_'
                                                                    ) !=
                                                                        'belum_kawin'
                                                                "
                                                            >
                                                                <input
                                                                    :disabled="
                                                                        disableInput
                                                                    "
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="belum_kawin"
                                                                    value="belum_kawin"
                                                                    :checked="
                                                                        String(
                                                                            form.status_perkawinan
                                                                        ).replace(
                                                                            ' ',
                                                                            '_'
                                                                        ) ==
                                                                        'belum_kawin'
                                                                    "
                                                                    v-model="
                                                                        form.status_perkawinan
                                                                    "
                                                                />
                                                                <label
                                                                    class="form-check-label capitalize"
                                                                    for="belum_kawin"
                                                                    >Belum
                                                                    Kawin</label
                                                                >
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .status_perkawinan
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .status_perkawinan
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >RT/RW</strong
                                                            ></label
                                                        >
                                                        <div>
                                                            <input
                                                                :disabled="
                                                                    disableInput
                                                                "
                                                                type="text"
                                                                v-model="
                                                                    form.rt
                                                                "
                                                                minlength="2"
                                                                maxlength="3"
                                                                class="form-control inline w-14 pr-0 p-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                                :class="
                                                                    form.errors
                                                                        .rt
                                                                        ? 'focus:border-red-600 border-red-600'
                                                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                                "
                                                                id="rt"
                                                            />
                                                            /
                                                            <input
                                                                :disabled="
                                                                    disableInput
                                                                "
                                                                type="text"
                                                                v-model="
                                                                    form.rw
                                                                "
                                                                minlength="2"
                                                                maxlength="3"
                                                                class="form-control inline w-14 pr-0 p-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                                :class="
                                                                    form.errors
                                                                        .rw
                                                                        ? 'focus:border-red-600 border-red-600'
                                                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                                "
                                                                id="rw"
                                                            />
                                                        </div>
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .rt ||
                                                                form.errors.rw
                                                            "
                                                        >
                                                            {{ form.errors.rt }}
                                                            {{ form.errors.rw }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="kelurahan"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Kelurahan/Desa</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="
                                                                form.kelurahan
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .kelurahan
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="kelurahan"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .kelurahan
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .kelurahan
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="kecamatan"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Kecamatan</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="
                                                                form.kecamatan
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .kecamatan
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="kecamatan"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .kecamatan
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .kecamatan
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="kota"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Kab/Kota</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="form.kota"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors.kota
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="kota"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors.kota
                                                            "
                                                        >
                                                            {{
                                                                form.errors.kota
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="grid grid-cols-2 space-x-4"
                                                >
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="agama"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Agama</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="form.agama"
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .agama
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="agama"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .agama
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .agama
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="pekerjaan"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Pekerjaan</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="
                                                                form.pekerjaan
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .pekerjaan
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="pekerjaan"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .pekerjaan
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .pekerjaan
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-1">
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="kewarganegaraan"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >Kewarganegaraan</strong
                                                            ></label
                                                        >
                                                        <input
                                                            :disabled="
                                                                disableInput
                                                            "
                                                            type="text"
                                                            v-model="
                                                                form.kewarganegaraan
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .kewarganegaraan
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="kewarganegaraan"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .kewarganegaraan
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .kewarganegaraan
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3" v-if="disableInput">
                                        <button
                                            type="button"
                                            @click.prevent="enableInput()"
                                            class="inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                        >
                                            Ubah data karyawan
                                        </button>
                                    </div>
                                    <div class="space-y-3 p-3" v-else>
                                        <button
                                            type="submit"
                                            :class="{
                                                'opacity-25': form.processing,
                                            }"
                                            :disabled="form.processing"
                                            class="inline-block pt-2.5 w-full text-center pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            <span class="mr-2"
                                                ><font-awesome-icon
                                                    icon="fa-solid fa-save"
                                            /></span>
                                            Simpan
                                        </button>
                                        <button
                                            type="button"
                                            @click.prevent="
                                                $emit((disableInput = true))
                                            "
                                            class="inline-block w-full py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <!-- End of about section -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
