<script>
import { defineComponent } from "vue";
import _ from "lodash";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import Pagination from "@/Jetstream/Pagination.vue";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        laporan: Object,
        teknisi: Object,
        sparepart: Object,
    },

    components: {
        AppLayout,
        Pagination,
        ActionMessage,
        Link,
    },

    data() {
        return {
            search: "",
        };
    },

    methods: {
        deleteData(id) {
            if (!confirm("Yakin Hapus data ini?")) return;
            this.$inertia.delete(route("laporan-teknisi.destroy", { id }));
        },

        searchData: _.throttle(function () {
            this.$inertia.replace(
                this.route("laporan-teknisi.index", { search: this.search })
            );
        }),

        clearSearch: _.throttle(function () {
            this.$inertia.replace(
                this.route("laporan-teknisi.index", { search: "" })
            );
            this.search = "";
        }),
    },
});
</script>

<template>
    <app-layout title="Laporan Teknisi">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Laporan Teknisi
                    </h5>
                </div>

                <div class="p-6 overflow-hidden">
                    <div class="grid grid-cols-2">
                        <div class="flex justify-start">
                            <div class="mb-3 xl:w-96">
                                <div
                                    class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded"
                                >
                                    <input
                                        type="text"
                                        class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Cari"
                                        aria-label="Cari"
                                        v-model="search"
                                        @keyup="searchData"
                                    />
                                    <button
                                        type="button"
                                        class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded text-blue-700"
                                        @click.prevent="clearSearch"
                                        v-show="search"
                                    >
                                        <span
                                            ><font-awesome-icon
                                                icon="fa-solid fa-xmark"
                                        /></span>
                                    </button>
                                    <span
                                        class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                                    >
                                        <span
                                            ><font-awesome-icon
                                                icon="fa-solid fa-magnifying-glass"
                                        /></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div
                                class="py-2 inline-block min-w-full sm:px-6 lg:px-8"
                            >
                                <div class="overflow-x-auto overflow-y-hidden">
                                    <table class="min-w-full">
                                        <thead class="bg-white border-b">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    No Pesanan
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Tanggal Pengerjaan
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Teknisi
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    <font-awesome-icon
                                                        icon="fa-solid fa-gears"
                                                    />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template
                                                v-if="laporan.data.length"
                                            >
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 capitalize text-center"
                                                    v-for="(
                                                        row, index
                                                    ) in laporan.data"
                                                    :key="row.id"
                                                >
                                                    <td
                                                        class="px-6 py-4 text-sm font-medium text-gray-900"
                                                    >
                                                        {{ ++index }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{ row.no_pesanan }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{
                                                            row.tanggal_selesai
                                                        }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                    >
                                                        <template
                                                            v-for="nik in String(
                                                                row.teknisi
                                                            ).split(',')"
                                                            :key="nik"
                                                        >
                                                            <template
                                                                v-for="tek in teknisi"
                                                                :key="tek"
                                                            >
                                                                <template
                                                                    v-if="
                                                                        tek.nik ==
                                                                        nik
                                                                    "
                                                                >
                                                                    {{
                                                                        tek.nama_lengkap
                                                                    }}<br />
                                                                </template>
                                                            </template>
                                                        </template>
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                    >
                                                        <Link
                                                            class="text-sm inline-block p-1.5 leading-none bg-green-500 text-white rounded mx-1"
                                                            title="Detail"
                                                            :href="
                                                                route(
                                                                    'laporan-teknisi.show',
                                                                    row.no_pesanan
                                                                )
                                                            "
                                                        >
                                                            <font-awesome-icon
                                                                icon="fa-solid fa-circle-info"
                                                            />
                                                            Detail
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </template>

                                            <template v-else>
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                                >
                                                    <td
                                                        class="px-6 py-3 text-sm font-medium text-gray-900 text-center"
                                                        colspan="5"
                                                    >
                                                        No data record.
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="py-3 px-6 border-t border-gray-300 text-gray-600"
                    v-show="laporan.links.length > 3"
                >
                    <Pagination :links="laporan.links"></Pagination>
                </div>
            </div>
        </div>
    </app-layout>
</template>
