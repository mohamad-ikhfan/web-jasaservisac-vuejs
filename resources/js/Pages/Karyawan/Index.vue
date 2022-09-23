<script>
import { defineComponent } from "vue";
import _ from "lodash";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import Pagination from "@/Jetstream/Pagination.vue";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        karyawan: Object,
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
        addData() {
            this.$inertia.get(route("karyawan.create"));
        },

        deleteData(id) {
            if (!confirm("Yakin Hapus data ini?")) return;
            this.$inertia.delete(route("karyawan.destroy", { id }));
        },

        searchData: _.throttle(function () {
            this.$inertia.replace(
                this.route("karyawan.index", { search: this.search })
            );
        }),

        clearSearch: _.throttle(function () {
            this.$inertia.replace(this.route("karyawan.index", { search: "" }));
            this.search = "";
        }),
    },
});
</script>

<template>
    <app-layout title="Data Karyawan">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Data Karyawan
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
                        <div class="flex space-x-2 justify-end">
                            <div>
                                <button
                                    type="button"
                                    @click="addData"
                                    class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                >
                                    <span class="mr-2"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-plus"
                                    /></span>
                                    Tambah Karyawan
                                </button>
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
                                                    NIK
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Nama
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    No Hp
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Bagian
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
                                                v-if="karyawan.data.length"
                                            >
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 capitalize text-center"
                                                    v-for="(
                                                        row, index
                                                    ) in karyawan.data"
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
                                                        {{ row.nik }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{ row.nama_lengkap }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                    >
                                                        {{ row.no_hp }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{ row.bagian }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                                    >
                                                        <Link
                                                            class="text-sm inline-block p-1.5 leading-none bg-green-500 hover:bg-green-300 hover:text-gray-500 text-white rounded mx-1 align-middle"
                                                            :href="
                                                                route(
                                                                    'karyawan.show',
                                                                    row.nik
                                                                )
                                                            "
                                                        >
                                                            <font-awesome-icon
                                                                icon="fa-solid fa-circle-info"
                                                            />
                                                            <span
                                                                style="
                                                                    font-size: 10px;
                                                                "
                                                            >
                                                                Detail</span
                                                            >
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
                    v-show="karyawan.links.length > 3"
                >
                    <Pagination :links="karyawan.links"></Pagination>
                </div>
            </div>
        </div>
    </app-layout>
</template>
