<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import Moment from "moment";
import Datepicker from "@vuepic/vue-datepicker";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    components: {
        AppLayout,
        Moment,
        Datepicker,
        Link,
    },

    data() {
        return {
            url_foto: null,
            url_foto_ktp: null,
            moment: Moment,
            tanggal: "",
            form: this.$inertia.form({
                foto: null,
                foto_ktp: null,
                nama_lengkap: "",
                no_hp: "",
                email: "",
                bagian: "",
                nomor_identitas: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                jenis_kelamin: "",
                status_perkawinan: "",
                rt: "",
                rw: "",
                kelurahan: "",
                kecamatan: "",
                kota: "",
                agama: "",
                pekerjaan: "",
                kewarganegaraan: "indonesia",
            }),
        };
    },

    methods: {
        previewFoto(e) {
            const file = e.target.files[0];
            this.form.foto = file;
            this.url_foto = URL.createObjectURL(file);
        },

        previewFotoKTP(e) {
            const file = e.target.files[0];
            this.form.foto_ktp = file;
            this.url_foto_ktp = URL.createObjectURL(file);
        },

        submit() {
            this.form.tanggal_lahir = this.changeFormatDate();
            this.form.post(route("karyawan.store"));
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
    },
});
</script>

<template>
    <app-layout title="Tambah Karyawan">
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Tambah Karyawan
                    </h5>
                </div>
                <form @submit.prevent="submit" enctype="multipart/form-data">
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
                                                '/pengguna/Guest.jpg'
                                            "
                                            alt="guest"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for="foto"
                                            class="form-label inline-block mb-2 text-gray-700"
                                            >Upload Foto</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                            @change="previewFoto"
                                            :class="
                                                form.errors.foto
                                                    ? 'focus:border-red-600 border-red-600'
                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                            "
                                            id="foto"
                                        />
                                        <div
                                            class="text-red-700 text-sm mt-1"
                                            v-show="form.errors.foto"
                                        >
                                            {{ form.errors.foto }}
                                        </div>
                                    </div>
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
                                                '/no-image.webp'
                                            "
                                            alt="no-image"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label
                                            for="foto_ktp"
                                            class="form-label inline-block mb-2 text-gray-700"
                                            >Upload KTP</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                            @change="previewFotoKTP"
                                            :class="
                                                form.errors.foto_ktp
                                                    ? 'focus:border-red-600 border-red-600'
                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                            "
                                            id="foto_ktp"
                                        />
                                        <div
                                            class="text-red-700 text-sm mt-1"
                                            v-show="form.errors.foto_ktp"
                                        >
                                            {{ form.errors.foto_ktp }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Right Side -->
                            <div class="w-full md:w-9/12 mx-2">
                                <!-- Profile tab -->
                                <!-- About Section -->
                                <div class="p-3">
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
                                                            for="no_hp"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            ><strong
                                                                >No.
                                                                Telpon</strong
                                                            ></label
                                                        >
                                                        <input
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
                                                                >Bagian</strong
                                                            ></label
                                                        >
                                                        <div
                                                            class="mt-2 space-x-4"
                                                        >
                                                            <div
                                                                class="form-check form-check-inline space-x-2 align-middle"
                                                            >
                                                                <input
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
                                                            >
                                                                <input
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
                                                            >
                                                                <input
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
                                                            >
                                                                <input
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
                                                            >
                                                                <input
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
                                                            >
                                                                <input
                                                                    class="form-check-input"
                                                                    type="radio"
                                                                    id="belum_kawin"
                                                                    value="belum_kawin"
                                                                    :checked="
                                                                        form.status_perkawinan ==
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
                                </div>
                                <!-- End of about section -->
                            </div>
                        </div>
                    </div>
                    <div class="p-6 border-t border-gray-300 text-gray-600">
                        <div class="grid grid-cols-2">
                            <div class="flex space-x-2 justify-start">
                                <div>
                                    <button
                                        type="button"
                                        @click="backPage"
                                        class="inline-block px-6 pt-2.5 pb-2 bg-yellow-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                    >
                                        <span class="mr-2"
                                            ><font-awesome-icon
                                                icon="fa-solid fa-arrow-left"
                                        /></span>
                                        Kembali
                                    </button>
                                </div>
                            </div>
                            <div class="flex space-x-2 justify-end">
                                <div>
                                    <button
                                        type="submit"
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                        class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                    >
                                        <span class="mr-2"
                                            ><font-awesome-icon
                                                icon="fa-solid fa-floppy-disk"
                                        /></span>
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </app-layout>
</template>
