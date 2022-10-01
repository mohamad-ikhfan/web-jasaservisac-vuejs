<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import ActionMessage from "@/Jetstream/ActionMessage.vue";

export default defineComponent({
    props: {
        pesanan: Object,
        teknisi: Object,
    },

    components: {
        AppLayout,
        Link,
        ActionMessage,
    },

    data() {
        return {
            teknisi_count: 1,
            form: this.$inertia.form({
                tanggal_tugas: this.pesanan.tanggal_booking,
                teknisi_nik: [],
            }),
        };
    },

    methods: {
        submit() {
            this.form.post(
                route(
                    "pesanan-pelanggan.alokasi_teknisi",
                    this.pesanan.no_pesanan
                )
            );
        },
    },
});
</script>

<template>
    <app-layout title="Buat Laporan">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Penugasan Teknisi
                    </h5>
                </div>

                <div class="p-5">
                    <form @submit.prevent="submit">
                        <div class="grid grid-cols-2 space-x-4">
                            <div class="p-5">
                                <div v-if="pesanan">
                                    <div
                                        class="grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"
                                    >
                                        <div class="font-semibold">
                                            Nomor Pesanan
                                        </div>
                                        <div>{{ pesanan.no_pesanan }}</div>
                                    </div>
                                    <div
                                        class="grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"
                                    >
                                        <div class="font-semibold">
                                            Kategori Layanan
                                        </div>
                                        <div class="capitalize">
                                            {{ pesanan.nama_kategori }}
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"
                                    >
                                        <div class="font-semibold">
                                            Nama Layanan
                                        </div>
                                        <div class="capitalize">
                                            {{ pesanan.nama_layanan }}
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"
                                    >
                                        <div class="font-semibold">
                                            Jenis Properti
                                        </div>
                                        <div class="capitalize">
                                            {{ pesanan.properti }}
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-b-0 border-gray-300"
                                    >
                                        <div class="font-semibold">
                                            Tgl Booking
                                        </div>
                                        <div class="capitalize">
                                            {{ pesanan.tanggal_booking }}
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-2 bg-gray-100 p-5 text-sm border-2 border-gray-300"
                                    >
                                        <div class="font-semibold">Alamat</div>
                                        <div class="capitalize">
                                            <div>
                                                Nama : {{ pesanan.atas_nama }}
                                            </div>
                                            <div>
                                                No. Hp : {{ pesanan.no_hp }}
                                            </div>
                                            <div>
                                                Alamat :
                                                {{ pesanan.alamat_lengkap }}
                                            </div>
                                            <div>
                                                Patokan : {{ pesanan.patokan }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="pesanan">
                                <div>
                                    <div class="form-label mb-2 text-gray-700">
                                        <strong>Alokasi Teknisi</strong>
                                    </div>
                                    <div
                                        class="form-group my-5"
                                        v-for="index in teknisi_count"
                                        :key="index"
                                    >
                                        <select
                                            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            :class="
                                                form.errors.teknisi_nik &&
                                                !form.teknisi_nik[index - 1]
                                                    ? 'focus:border-red-600 border-red-600'
                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                            "
                                            v-model="
                                                form.teknisi_nik[index - 1]
                                            "
                                        >
                                            <option
                                                class="capitalize"
                                                v-for="row in teknisi"
                                                :key="row"
                                                :selected="
                                                    row.nik ==
                                                    form.teknisi_nik[index - 1]
                                                "
                                                :value="row.nik"
                                                :disabled="
                                                    row.penugasan ==
                                                    'di tugaskan'
                                                "
                                            >
                                                <span class="capitalize">{{
                                                    row.nik +
                                                    " : " +
                                                    row.nama +
                                                    " (" +
                                                    row.penugasan +
                                                    ")"
                                                }}</span>
                                            </option>
                                        </select>
                                        <div
                                            class="text-red-700 text-sm mt-1"
                                            v-show="
                                                form.errors.teknisi_nik &&
                                                !form.teknisi_nik[index - 1]
                                            "
                                        >
                                            {{ form.errors.teknisi_nik }}
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <button
                                            @click.prevent="
                                                $emit(teknisi_count++)
                                            "
                                            class="px-4 py-1 5 bg-blue-500 text-gray-50 text-xs rounded-lg"
                                            :class="{
                                                'opacity-25':
                                                    teknisi_count ==
                                                    teknisi.length,
                                            }"
                                            :disabled="
                                                teknisi_count == teknisi.length
                                            "
                                        >
                                            Tambah Baris
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div>
                                <button
                                    type="button"
                                    class="px-6 py-2.5 text-sm bg-gray-200 text-blue-500 rounded"
                                >
                                    Kembali
                                </button>
                            </div>
                            <div class="text-right">
                                <button
                                    type="submit"
                                    class="px-6 py-2.5 text-sm bg-blue-500 text-gray-50 rounded"
                                    :class="{
                                        'opacity-25': form.processing,
                                    }"
                                    :disabled="form.processing"
                                >
                                    Selesai
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </app-layout>
</template>
