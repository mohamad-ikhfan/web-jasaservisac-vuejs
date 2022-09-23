<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        layanan: Object,
    },

    components: {
        AppLayout,
        Link,
    },

    methods: {
        backPage() {
            this.$inertia.get(route("kategori-layanan.index"));
        },
    },
});
</script>

<template>
    <app-layout title="Kategori Layanan">
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium capitalize">
                        Lihat Kategori Layanan {{ layanan.nama_kategori }}
                    </h5>
                </div>

                <form @submit.prevent="submit" enctype="multipart/form-data">
                    <div class="p-6">
                        <div class="form-group mb-6">
                            <div class="flex justify-center">
                                <img
                                    v-if="layanan.logo"
                                    :src="
                                        $page.props.asset +
                                        '/logo/' +
                                        layanan.logo
                                    "
                                    class="rounded"
                                    style="width: 100px"
                                    alt="logo"
                                />
                                <img
                                    v-else
                                    :src="$page.props.asset + '/no-image.webp'"
                                    class="rounded"
                                    style="width: 100px"
                                    alt="logo"
                                />
                            </div>
                            <p class="text-center mt-1">Logo</p>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="nama_kategori"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Nama Kategori</label
                            >
                            <input
                                type="text"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white capitalize"
                                :value="layanan.nama_kategori"
                                id="nama_kategori"
                                readonly
                            />
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="deskripsi"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Deskripsi</label
                            >
                            <textarea
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none capitalize"
                                id="deskripsi"
                                rows="2"
                                :placeholder="layanan.deskripsi"
                            ></textarea>
                        </div>
                    </div>

                    <div
                        class="py-3 px-6 border-t border-gray-300 text-gray-600"
                    >
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
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </app-layout>
</template>
