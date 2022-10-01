<script>
import { defineComponent } from "vue";
import _ from "lodash";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import Pagination from "@/Jetstream/Pagination.vue";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        tugas_teknisi: Array,
    },

    components: {
        AppLayout,
        ActionMessage,
        Pagination,
        Link,
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
                        Daftar Tugas
                    </h5>
                </div>

                <div class="p-6 overflow-hidden">
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
                                                    Status Tugas
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
                                                v-if="tugas_teknisi.length"
                                            >
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 capitalize text-center"
                                                    v-for="(
                                                        row, index
                                                    ) in tugas_teknisi"
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
                                                        {{ row.tanggal_tugas }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4"
                                                    >
                                                        {{ row.status_tugas }}
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
            </div>
        </div>
    </app-layout>
</template>
