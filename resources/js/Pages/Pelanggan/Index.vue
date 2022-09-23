<script>
import { defineComponent } from "vue";
import _ from "lodash";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import Pagination from "@/Jetstream/Pagination.vue";
import ActionMessage from "@/Jetstream/ActionMessage.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        pelanggan: Object,
    },

    components: {
        AppLayout,
        Pagination,
        ActionMessage,
        Link,
    },
});
</script>

<template>
    <app-layout title="Pelanggan">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">Pelanggan</h5>
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
                                                    Nama Pelanggan
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center font-bold"
                                                >
                                                    Email
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template
                                                v-if="pelanggan.data.length"
                                            >
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 capitalize text-center"
                                                    v-for="(
                                                        row, index
                                                    ) in pelanggan.data"
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
                                                        {{ row.name }}
                                                    </td>
                                                    <td
                                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap lowercase"
                                                    >
                                                        {{ row.email }}
                                                    </td>
                                                </tr>
                                            </template>

                                            <template v-else>
                                                <tr
                                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                                >
                                                    <td
                                                        class="px-6 py-3 text-sm font-medium text-gray-900 text-center"
                                                        colspan="3"
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
                    v-show="pelanggan.links.length > 3"
                >
                    <Pagination :links="pelanggan.links"></Pagination>
                </div>
            </div>
        </div>
    </app-layout>
</template>
