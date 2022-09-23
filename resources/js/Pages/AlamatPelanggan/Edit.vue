<script>
import { defineComponent } from "vue";
import AppLayout from "@/layouts/TopNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        alamat: Object,
    },

    components: {
        AppLayout,
        Link,
    },

    data() {
        return {
            form: this.$inertia.form({
                label: this.alamat.label,
                atas_nama: this.alamat.atas_nama,
                no_hp: this.alamat.no_hp,
                patokan: this.alamat.patokan,
                alamat_lengkap: this.alamat.alamat_lengkap,
            }),
        };
    },

    methods: {
        submit(id) {
            this.form.put(route("alamat-pelanggan.update", { id }));
        },

        backPage() {
            this.$inertia.get(route("alamat-pelanggan.index"));
        },

        deleteData(id) {
            if (!confirm("Yakin Hapus alamat ini?")) return;
            this.$inertia.delete(route("alamat-pelanggan.destroy", { id }));
        },
    },
});
</script>

<template>
    <app-layout title="Ubah Alamat">
        <div class="flex justify-center mt-10 px-5">
            <div
                class="block rounded-lg shadow-sm bg-white min-w-full min-h-full p-10"
            >
                <div class="py-3 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Ubah Alamat
                    </h5>
                </div>

                <form @submit.prevent="submit(alamat.id)">
                    <div class="p-6 overflow-hidden">
                        <div class="form-group mb-6">
                            <label
                                for="label"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Label Alamat</label
                            >
                            <input
                                type="text"
                                v-model="form.label"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.label
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="label"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.label"
                            >
                                {{ form.errors.label }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="atas_nama"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Atas Nama</label
                            >
                            <input
                                type="text"
                                v-model="form.atas_nama"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.atas_nama
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="atas_nama"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.atas_nama"
                            >
                                {{ form.errors.atas_nama }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="no_hp"
                                class="form-label inline-block mb-2 text-gray-700"
                                >No. Hp/No. Whatsapp</label
                            >
                            <input
                                type="text"
                                v-model="form.no_hp"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.no_hp
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="no_hp"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.no_hp"
                            >
                                {{ form.errors.no_hp }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="alamat_lengkap"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Alamat Lengkap</label
                            >
                            <textarea
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                :class="
                                    form.errors.alamat_lengkap
                                        ? 'focus:border-red-600 border-red-600'
                                        : ''
                                "
                                v-model="form.alamat_lengkap"
                                id="alamat_lengkap"
                                rows="2"
                            ></textarea>
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.alamat_lengkap"
                            >
                                {{ form.errors.alamat_lengkap }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="patokan"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Patokan Rumah</label
                            >
                            <input
                                type="text"
                                v-model="form.patokan"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.patokan
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="patokan"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.patokan"
                            >
                                {{ form.errors.patokan }}
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
                                <div class="mr-4">
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

                                <div>
                                    <button
                                        type="button"
                                        @click.prevent="deleteData(alamat.id)"
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                        class="inline-block px-6 pt-2.5 pb-2 bg-red-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                    >
                                        <span class="mr-2"
                                            ><font-awesome-icon
                                                icon="fa-solid fa-trash"
                                        /></span>
                                        Hapus
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
