<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import ActionMessage from "@/Jetstream/ActionMessage.vue";

export default defineComponent({
    props: {
        pesanan: Object,
        sparepart: Object,
        penugasan: Array,
    },

    components: {
        AppLayout,
        Link,
        ActionMessage,
    },

    methods: {
        formatNumber(number) {
            return Intl.NumberFormat().format(number);
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
                        Detail Laporan
                    </h5>
                </div>

                <div class="p-5">
                    <div class="grid grid-cols-2 space-x-4">
                        <div class="p-5">
                            <div>
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
                                    <div class="font-semibold">Tanggal</div>
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
                                        <div>No. Hp : {{ pesanan.no_hp }}</div>
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
                        <div class="py-5">
                            <div class="mb-6">
                                <div class="mb-2">
                                    <label
                                        class="form-label mb-2 text-gray-700 mr-6"
                                    >
                                        <strong
                                            >Sparepart Tambahan :</strong
                                        ></label
                                    >
                                </div>
                                <div class="flex justify-start">
                                    <ul
                                        class="bg-white rounded-lg w-96 text-gray-900"
                                    >
                                        <li
                                            class="px-2 py-2 border-b border-gray-200 w-full rounded-t-lg capitalize"
                                            v-for="sp in sparepart"
                                            :key="sp"
                                        >
                                            {{
                                                sp.nama_sparepart +
                                                " | Qty: " +
                                                sp.qty_sparepart
                                            }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-6">
                                <div class="mb-2">
                                    <label
                                        class="form-label mb-2 text-gray-700 mr-6"
                                    >
                                        <strong>Teknisi :</strong></label
                                    >
                                </div>
                                <div class="flex justify-start">
                                    <ul
                                        class="bg-white rounded-lg w-96 text-gray-900"
                                    >
                                        <li
                                            class="px-2 py-2 border-b border-gray-200 w-full rounded-t-lg capitalize"
                                            v-for="tek in penugasan"
                                            :key="tek"
                                        >
                                            {{ tek.nik + " - " + tek.nama }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
