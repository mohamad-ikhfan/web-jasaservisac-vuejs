<script>
import { defineComponent } from "vue";
import AppLayout from "@/layouts/TopNavLayout.vue";
import ActionMessage from "@/Jetstream/ActionMessageBottom.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Moment from "moment";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default defineComponent({
    props: {
        pesanan: Object,
        sparepart: Object,
        biaya_part: String,
    },

    components: {
        AppLayout,
        ActionMessage,
        Moment,
        Link,
    },

    data() {
        return {
            id_sparepart: String(this.pesanan.id_sparepart).split(","),
            qty_sparepart: String(this.pesanan.qty_sparepart).split(","),
        };
    },

    methods: {
        formatNumber(number) {
            return Intl.NumberFormat().format(number);
        },

        formatDate(str) {
            let str_date = str.substr(0, 2);
            let str_month = str.substr(2, 2);
            let str_year = str.substr(4, 4);

            return Moment(str_year + str_month + str_date, "YYYYMMDD")
                .locale("ID")
                .format("DD-MM-yyyy");
        },

        print() {
            window.html2canvas = html2canvas;
            var doc = new jsPDF({
                orientation: "landscape",
                unit: "pt",
                format: "legal",
            });
            doc.html(document.querySelector("#printArea"), {
                callback: function (pdf) {
                    pdf.save("invoice.pdf");
                },
            });
        },

        orderDate(string) {
            return string.substr(3, 10);
        },
    },
});
</script>

<template>
    <app-layout title="Lihat Pesanan">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>

        <div class="flex justify-center mt-10 px-5">
            <div
                class="block rounded-lg shadow-sm bg-white min-w-full min-h-full p-10"
            >
                <div class="py-3 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium font-bold">
                        Pesanan Saya
                    </h5>
                    <button
                        v-show="pesanan.status_pesanan == 'selesai'"
                        class="px-3 py-1.5 rounded bg-gray-300 text-blue-600 my-2 hover:bg-blue-600 hover:text-gray-200"
                        @click="print()"
                    >
                        Download Invoice
                        <font-awesome-icon icon="fa-regular fa-file-pdf" />
                    </button>
                </div>

                <div class="p-6 overflow-hidden">
                    <div class="flex items-center justify-center">
                        <div class="w-full">
                            <div id="printArea">
                                <div class="text-sm px-2">
                                    <div class="flex justify-between">
                                        <div>
                                            <h6 class="font-bold">
                                                Tanggal Pesan :
                                                <span
                                                    class="text-sm font-medium uppercase"
                                                >
                                                    {{
                                                        formatDate(
                                                            orderDate(
                                                                pesanan.no_pesanan
                                                            )
                                                        )
                                                    }}</span
                                                >
                                            </h6>
                                            <h6 class="font-bold">
                                                Jadwal Kedatangan :
                                                <span
                                                    class="text-sm font-medium"
                                                >
                                                    {{
                                                        pesanan.tanggal_booking
                                                    }}</span
                                                >
                                            </h6>
                                            <h6 class="font-bold">
                                                No. Pesanan :
                                                <span
                                                    class="text-sm font-medium"
                                                >
                                                    {{
                                                        pesanan.no_pesanan
                                                    }}</span
                                                >
                                            </h6>
                                            <h6 class="font-bold">
                                                Status Pesanan :
                                                <span
                                                    class="capitalize text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"
                                                >
                                                    {{
                                                        pesanan.status_pesanan
                                                    }}</span
                                                >
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="py-5">
                                        <div
                                            class="border-b border-gray-200 shadow overflow-y-auto"
                                        >
                                            <table
                                                class="w-full border text-left"
                                            >
                                                <thead
                                                    class="bg-gray-50 text-center"
                                                >
                                                    <tr class="border">
                                                        <th
                                                            class="px-4 py-2 text-gray-500"
                                                        >
                                                            #
                                                        </th>
                                                        <th
                                                            class="px-4 py-2 text-gray-500"
                                                            colspan="3"
                                                        >
                                                            Keterangan
                                                        </th>
                                                        <th
                                                            class="px-4 py-2 text-gray-500 text-left"
                                                        >
                                                            Harga
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white">
                                                    <tr
                                                        class="whitespace-nowrap border"
                                                    >
                                                        <th
                                                            class="px-4 py-2 text-gray-500 bg-gray-50 text-center"
                                                        >
                                                            1
                                                        </th>
                                                        <th
                                                            class="p-2 text-gray-500 bg-gray-50 font-bold"
                                                        >
                                                            Layanan
                                                        </th>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900"
                                                            >
                                                                :
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                {{
                                                                    pesanan.nama_kategori
                                                                }}
                                                            </div>
                                                        </td>
                                                        <td></td>
                                                    </tr>

                                                    <tr
                                                        class="whitespace-nowrap border"
                                                    >
                                                        <th
                                                            class="px-4 py-2 text-gray-500 bg-gray-50 text-center"
                                                        >
                                                            2
                                                        </th>
                                                        <th
                                                            class="p-2 text-gray-500 bg-gray-50 font-bold"
                                                        >
                                                            Jenis Layanan
                                                        </th>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900"
                                                            >
                                                                :
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                {{
                                                                    pesanan.nama_layanan
                                                                }}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                {{
                                                                    "Rp." +
                                                                    formatNumber(
                                                                        pesanan.harga
                                                                    )
                                                                }}
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr
                                                        class="whitespace-nowrap border"
                                                    >
                                                        <th
                                                            class="px-4 py-2 text-gray-500 bg-gray-50 text-center"
                                                        >
                                                            3
                                                        </th>
                                                        <th
                                                            class="p-2 text-gray-500 bg-gray-50 font-bold"
                                                        >
                                                            Properti
                                                        </th>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900"
                                                            >
                                                                :
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                {{
                                                                    pesanan.properti
                                                                }}
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                {{
                                                                    "Rp." +
                                                                    formatNumber(
                                                                        pesanan.biaya_properti
                                                                    )
                                                                }}
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr
                                                        class="whitespace-nowrap border"
                                                        v-show="
                                                            pesanan.status_pesanan ==
                                                            'selesai'
                                                        "
                                                    >
                                                        <th
                                                            class="px-4 py-2 text-gray-500 bg-gray-50 text-center"
                                                        >
                                                            4
                                                        </th>
                                                        <th
                                                            class="p-2 text-gray-500 bg-gray-50 font-bold"
                                                        >
                                                            Tambahan
                                                        </th>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900"
                                                            >
                                                                :
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                <template
                                                                    v-for="index in id_sparepart.length"
                                                                    :key="index"
                                                                >
                                                                    <template
                                                                        v-for="sp in sparepart"
                                                                        :key="
                                                                            sp
                                                                        "
                                                                    >
                                                                        <div
                                                                            v-show="
                                                                                sp.id ==
                                                                                id_sparepart[
                                                                                    index -
                                                                                        1
                                                                                ]
                                                                            "
                                                                        >
                                                                            {{
                                                                                sp.nama_sparepart
                                                                            }}
                                                                            <span
                                                                                class="lowercase text-xs"
                                                                                v-on:loadeddata="
                                                                                    $emit(
                                                                                        (this.biaya_sparepart +=
                                                                                            sp.harga *
                                                                                            qty_sparepart[
                                                                                                index -
                                                                                                    1
                                                                                            ])
                                                                                    )
                                                                                "
                                                                                >{{
                                                                                    formatNumber(
                                                                                        sp.harga
                                                                                    ) +
                                                                                    "x" +
                                                                                    qty_sparepart[
                                                                                        index -
                                                                                            1
                                                                                    ]
                                                                                }}</span
                                                                            >
                                                                        </div>
                                                                    </template>
                                                                </template>
                                                            </div>
                                                        </td>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize"
                                                            >
                                                                {{
                                                                    "Rp." +
                                                                    formatNumber(
                                                                        biaya_part
                                                                    )
                                                                }}
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr
                                                        class="whitespace-nowrap border font-bold"
                                                    >
                                                        <th
                                                            class="px-4 py-2 text-gray-500 bg-gray-50 text-center"
                                                        >
                                                            #
                                                        </th>
                                                        <th
                                                            class="p-2 text-gray-500 bg-gray-50 font-bold"
                                                            colspan="3"
                                                        >
                                                            Total Biaya
                                                        </th>
                                                        <td class="p-2">
                                                            <div
                                                                class="text-gray-900 capitalize bg-gray-50"
                                                            >
                                                                {{
                                                                    "Rp." +
                                                                    formatNumber(
                                                                        pesanan.total_tagihan
                                                                    )
                                                                }}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="flex justify-between p-4">
                                        <div>
                                            <h3 class="text-xl">
                                                Alamat Tujuan :
                                            </h3>
                                            <ul
                                                class="text-xs list-disc list-inside capitalize"
                                            >
                                                <li>
                                                    Atas Nama :
                                                    {{ pesanan.atas_nama }}
                                                </li>
                                                <li>
                                                    No. Hp : {{ pesanan.no_hp }}
                                                </li>
                                                <li>
                                                    Alamat Lengkap :
                                                    {{ pesanan.alamat_lengkap }}
                                                    .
                                                    {{ pesanan.patokan }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        class="w-full h-0.5 bg-indigo-500"
                                    ></div>
                                </div>
                            </div>

                            <div class="p-4">
                                <div class="flex items-center justify-center">
                                    Terimakasih telah menggunakan layanan kami.
                                </div>
                                <div
                                    class="flex items-end justify-end space-x-3"
                                >
                                    <Link
                                        :href="route('pesan-jasa.index')"
                                        class="px-4 py-2 text-sm text-green-600 bg-green-100"
                                    >
                                        Daftar Pesanan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
