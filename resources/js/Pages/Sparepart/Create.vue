<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    components: {
        AppLayout,
        Link,
    },

    data() {
        return {
            url: null,
            form: this.$inertia.form({
                gambar: null,
                nama_sparepart: "",
                harga: "",
                keterangan: "",
            }),
        };
    },

    methods: {
        previewFoto(e) {
            const file = e.target.files[0];
            this.form.gambar = file;
            this.url = URL.createObjectURL(file);
        },

        submit() {
            this.form.post(route("sparepart.store"));
        },

        backPage() {
            this.$inertia.get(route("sparepart.index"));
        },
    },
});
</script>

<template>
    <app-layout title="Tambah Sparepart">
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Tambah Sparepart
                    </h5>
                </div>

                <form @submit.prevent="submit" enctype="multipart/form-data">
                    <div class="p-6">
                        <div class="form-group mb-6">
                            <div class="grid grid-cols-2">
                                <div class="flex justify-start">
                                    <div class="relative pt-5">
                                        <label
                                            for="gambar"
                                            class="form-label inline-block mb-2 text-gray-700"
                                            >Upload Gambar</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                            @change="previewFoto"
                                            :class="
                                                form.errors.gambar
                                                    ? 'focus:border-red-600 border-red-600'
                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                            "
                                            id="gambar"
                                        />
                                    </div>
                                </div>
                                <div class="flex justify-center">
                                    <img
                                        v-if="url"
                                        :src="url"
                                        class="rounded"
                                        style="width: 100px"
                                        alt="gambar"
                                    />
                                    <img
                                        v-else
                                        :src="
                                            $page.props.asset + '/no-image.webp'
                                        "
                                        class="rounded"
                                        style="width: 100px"
                                        alt="gambar"
                                    />
                                </div>
                            </div>

                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.gambar"
                            >
                                {{ form.errors.gambar }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="nama_sparepart"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Nama Sparepart</label
                            >
                            <input
                                type="text"
                                v-model="form.nama_sparepart"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.nama_sparepart
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="nama_sparepart"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.nama_sparepart"
                            >
                                {{ form.errors.nama_sparepart }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="harga"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Harga</label
                            >
                            <input
                                type="number"
                                v-model="form.harga"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.harga
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="harga"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.harga"
                            >
                                {{ form.errors.harga }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="keterangan"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Keterangan</label
                            >
                            <textarea
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                :class="
                                    form.errors.keterangan
                                        ? 'focus:border-red-600 border-red-600'
                                        : ''
                                "
                                v-model="form.keterangan"
                                id="keterangan"
                                rows="2"
                            ></textarea>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.keterangan"
                            >
                                {{ form.errors.keterangan }}
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
