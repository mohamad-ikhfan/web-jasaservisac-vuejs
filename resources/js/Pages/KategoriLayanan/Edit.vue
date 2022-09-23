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

    data() {
        return {
            url: null,
            form: this.$inertia.form({
                nama_kategori: this.layanan.nama_kategori,
                deskripsi: this.layanan.deskripsi,
            }),
        };
    },

    methods: {
        submit(id) {
            this.form.put(route("kategori-layanan.update", { id }));
        },

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
                    <h5 class="text-gray-900 text-xl font-medium">
                        Buat Kategori Layanan
                    </h5>
                </div>

                <form
                    @submit.prevent="submit(layanan.id)"
                    enctype="multipart/form-data"
                >
                    <div class="p-6">
                        <div class="form-group mb-6">
                            <label
                                for="nama_kategori"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Nama Kategori</label
                            >
                            <input
                                type="text"
                                v-model="form.nama_kategori"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.nama_kategori
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="nama_kategori"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.nama_kategori"
                            >
                                {{ form.errors.nama_kategori }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="deskripsi"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Deskripsi</label
                            >
                            <textarea
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                :class="
                                    form.errors.deskripsi
                                        ? 'focus:border-red-600 border-red-600'
                                        : ''
                                "
                                v-model="form.deskripsi"
                                id="deskripsi"
                                rows="2"
                            ></textarea>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.deskripsi"
                            >
                                {{ form.errors.deskripsi }}
                            </div>
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
                            <div class="flex space-x-2 justify-end">
                                <div>
                                    <button
                                        type="submit"
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                        class="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                    >
                                        <span class="mr-2"
                                            ><font-awesome-icon
                                                icon="fa-solid fa-floppy-disk"
                                        /></span>
                                        Simpan
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
