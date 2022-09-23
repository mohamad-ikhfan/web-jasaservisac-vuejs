<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/TopNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Datepicker from "@vuepic/vue-datepicker";

export default defineComponent({
    props: {
        layanan: Object,
        properti: Object,
        alamat: Object,
        alamatUtama: String,
        jasa: String,
    },

    components: {
        AppLayout,
        Link,
        Datepicker,
    },

    data() {
        return {
            all_alamat: false,
            tanggal: "",
            form: this.$inertia.form({
                kategori: this.jasa,
                jenis_layanan: "",
                unit: "",
                keluhan: "",
                properti: "",
                alamat: this.alamatUtama,
                tanggal_booking: "",
                total_harga: "",
                harga_layanan: 0,
                biaya_properti: 0,
            }),
        };
    },

    methods: {
        formatNumber(number) {
            return Intl.NumberFormat().format(number);
        },

        submit() {
            let tanggal = this.tanggal;
            if (tanggal) {
                let day = tanggal.getDate();
                let month = tanggal.getMonth();
                let year = tanggal.getFullYear();
                tanggal = day + "-" + month + "-" + year;
                if (String(day).length == 1) {
                    tanggal = "0" + day + "-" + month + "-" + year;
                }
                if (String(month).length == 1) {
                    tanggal = day + "-0" + month + "-" + year;
                }
                this.form.tanggal_booking = tanggal;
            }
            this.form.post(route("pesan-jasa.store"));
        },

        closeAllalamat(id) {
            this.all_alamat = false;
            this.form.alamat = id;
        },

        dateFormat() {
            this.form.tanggal_booking = this.tanggal;
        },
    },
});
</script>

<style scoped>
input:checked + label {
    border-color: black;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>

<template>
    <app-layout :title="'Pesan Jasa ' + jasa">
        <div class="px-10 lg:px-20">
            <div class="block p-6 rounded-lg shadow-lg bg-white w-full mt-8">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium text-center">
                        Form Pesanan
                    </h5>
                </div>
                <form @submit.prevent="submit">
                    <div class="p-6 px-10">
                        <div class="form-group mb-6">
                            <label class="form-label block mb-2 text-gray-700">
                                <strong>Pilih Layanan Jasa</strong></label
                            >
                            <div
                                class="form-check form-check-inline"
                                v-for="lyn in layanan"
                                :key="lyn"
                            >
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    :id="'layanan' + lyn['id']"
                                    :value="lyn['id']"
                                    :checked="lyn['id'] == form.jenis_layanan"
                                    v-model="form.jenis_layanan"
                                    @input="
                                        (checked) =>
                                            (form.harga_layanan = lyn['harga'])
                                    "
                                />
                                <label
                                    class="form-check-label capitalize ml-1"
                                    :for="'layanan' + lyn['id']"
                                    >{{
                                        lyn["nama_layanan"] +
                                        " (Rp." +
                                        formatNumber(lyn["harga"]) +
                                        ")"
                                    }}</label
                                >
                            </div>

                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.jenis_layanan"
                            >
                                {{ form.errors.jenis_layanan }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="nama_layanan"
                                class="form-label inline-block mb-2 text-gray-700"
                                ><strong>Jumlah Unit AC</strong></label
                            >
                            <input
                                type="number"
                                v-model="form.unit"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.unit
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="unit"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.unit"
                            >
                                {{ form.errors.unit }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="keluhan"
                                class="form-label block mb-2 text-gray-700"
                                ><strong>Informasi Keluhan AC</strong></label
                            >
                            <textarea
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                :class="
                                    form.errors.keluhan
                                        ? 'focus:border-red-600 border-red-600'
                                        : ''
                                "
                                v-model="form.keluhan"
                                id="keluhan"
                                rows="2"
                            ></textarea>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.keluhan"
                            >
                                {{ form.errors.keluhan }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label class="form-label block mb-2 text-gray-700">
                                <strong>Jenis Properti</strong></label
                            >
                            <div
                                class="form-check form-check-inline"
                                v-for="(pr, index) in properti"
                                :key="pr"
                            >
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    :id="'properti' + index"
                                    :value="pr['id']"
                                    :checked="pr['id'] == form.properti"
                                    v-model="form.properti"
                                    @input="
                                        (checked) =>
                                            (form.biaya_properti =
                                                pr['biaya_properti'])
                                    "
                                />
                                <label
                                    class="form-check-label capitalize ml-1"
                                    :for="'properti' + index"
                                    >{{ pr["properti"]
                                    }}{{
                                        pr["biaya_properti"] > 1
                                            ? " (+Rp." +
                                              formatNumber(
                                                  pr["biaya_properti"]
                                              ) +
                                              ")"
                                            : ""
                                    }}</label
                                >
                            </div>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.properti"
                            >
                                {{ form.errors.properti }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <div class="form-label block mb-2 text-gray-700">
                                <strong>Alamat</strong>
                                <Button
                                    class="ml-2"
                                    @click.prevent="$emit((all_alamat = true))"
                                    ><span
                                        class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full"
                                        >Lihat Alamat Lain</span
                                    ></Button
                                >
                            </div>
                            <div
                                v-for="almt in alamat"
                                :key="almt"
                                v-show="
                                    all_alamat
                                        ? true
                                        : form.alamat == almt['id']
                                "
                            >
                                <input
                                    class="hidden"
                                    :id="'alamat' + almt['id']"
                                    type="radio"
                                    :checked="almt['id'] == form.alamat"
                                    v-model="form.alamat"
                                />
                                <label
                                    class="flex flex-col p-4 border-2 rounded-lg cursor-pointer"
                                    :for="'alamat' + almt['id']"
                                    @click.prevent="closeAllalamat(almt['id'])"
                                >
                                    <span
                                        class="text-xs font-semibold uppercase font-bold"
                                        >{{ almt["label"] }}</span
                                    >
                                    <ul class="text-sm mt-2">
                                        <li class="capitalize">
                                            {{ almt["atas_nama"] }}
                                        </li>
                                        <li class="capitalize">
                                            {{ almt["alamat_lengkap"] }}
                                        </li>
                                        <li class="capitalize">
                                            {{ almt["no_hp"] }}
                                        </li>
                                    </ul>
                                </label>
                            </div>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.alamat"
                            >
                                {{ form.errors.alamat }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="nama_layanan"
                                class="form-label inline-block mb-2 text-gray-700"
                                ><strong>Tanggal Booking</strong></label
                            >
                            <datepicker
                                v-model="tanggal"
                                :format="'dd-MM-yyyy'"
                                :placeholder="'Pilih Tanggal'"
                                :minDate="
                                    new Date(
                                        new Date().setDate(
                                            new Date().getDate() + 1
                                        )
                                    )
                                "
                                :maxDate="
                                    new Date(
                                        new Date().setDate(
                                            new Date().getDate() + 14
                                        )
                                    )
                                "
                                :position="'left'"
                                id="tanggal_booking"
                            ></datepicker>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.tanggal_booking"
                            >
                                {{ form.errors.tanggal_booking }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="py-3 px-6 border-t border-gray-300 text-gray-600"
                    >
                        <div
                            class="text-lg text-center font-bold text-blue-700 border border-blue-200 rounded-lg p-3 shadow-sm hover:shadow-lg transition"
                        >
                            <span class="mr-3">SUB TOTAL HARGA:</span>
                            <span>{{
                                "Rp. " +
                                formatNumber(
                                    form.unit * form.harga_layanan +
                                        form.biaya_properti
                                )
                            }}</span>
                        </div>
                        <div class="my-3">
                            <div class="text-center">
                                <div>
                                    <button
                                        type="submit"
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                        class="inline-block px-20 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-md leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        <span class="mr-2"
                                            ><font-awesome-icon
                                                icon="fa-solid fa-cart-shopping"
                                        /></span>
                                        Lanjutkan Pesanan
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
