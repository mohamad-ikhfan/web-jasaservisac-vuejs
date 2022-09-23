<script>
import { defineComponent } from "vue";
import _ from "lodash";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import Pagination from "@/Jetstream/Pagination.vue";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        pesanan: Object,
    },

    components: {
        AppLayout,
        ActionMessage,
        Pagination,
        Link,
    },

    data() {
        return {
            search: "",
        };
    },

    methods: {
        searchData: _.throttle(function () {
            this.$inertia.replace(
                this.route("pesanan-pelanggan.daftar", { search: this.search })
            );
        }),

        clearSearch: _.throttle(function () {
            this.$inertia.replace(
                this.route("pesanan-pelanggan.daftar", { search: "" })
            );
            this.search = "";
        }),

        formatNumber(number) {
            return Intl.NumberFormat().format(number);
        },
    },
});
</script>

<template>
    <app-layout title="Daftar Pesanan">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Daftar Pesanan
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
                                                    No. Pesanan
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Jadwal
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Status Pesanan
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
                                                v-if="pesanan.data.length"
                                            >
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 capitalize text-center"
                                                    v-for="(
                                                        row, index
                                                    ) in pesanan.data"
                                                    :key="row.id"
                                                >
                                                    <td
                                                        class="px-6 py-4 text-sm font-medium text-gray-900"
                                                    >
                                                        {{ ++index }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                    >
                                                        {{ row.no_pesanan }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{
                                                            row.jadwal_pengerjaan
                                                        }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{ row.status_pesanan }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                    >
                                                        <Link
                                                            class="text-sm inline-block p-1.5 leading-none bg-green-500 text-white rounded mx-1"
                                                            title="Lihat"
                                                            :href="
                                                                route(
                                                                    'pesanan-pelanggan.lihat-pesanan',
                                                                    row.no_pesanan
                                                                )
                                                            "
                                                        >
                                                            <font-awesome-icon
                                                                icon="fa-solid fa-circle-info"
                                                            />
                                                            Lihat
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
                                                        Belum ada pesanan.
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
                    v-show="pesanan.links.length > 3"
                >
                    <Pagination :links="pesanan.links"></Pagination>
                </div>
            </div>
        </div>
    </app-layout>
</template>
