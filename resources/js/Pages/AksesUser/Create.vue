<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import _ from "lodash";

export default defineComponent({
    props: {
        karyawan: Object,
    },

    components: {
        AppLayout,
        Link,
    },

    data() {
        return {
            search: "",
            form: this.$inertia.form({
                nik: "",
            }),
        };
    },

    methods: {
        submit() {
            this.form.nik = this.karyawan.nik;
            this.form.post(route("akses-user.store"));
        },

        backPage() {
            this.$inertia.get(route("akses-user.index"));
        },

        searchData: _.throttle(function () {
            this.$inertia.replace(
                this.route("akses-user.create", { search: this.search })
            );
        }),
    },
});
</script>

<template>
    <app-layout title="Tambah Akses">
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Tambah Akses
                    </h5>
                </div>

                <div class="p-6">
                    <div class="text-center font-semibold mb-3">
                        Cari NIK Karyawan :
                    </div>
                    <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                            <div
                                class="input-group relative flex flex-wrap items-stretch w-full mb-4"
                            >
                                <input
                                    v-model="search"
                                    type="search"
                                    class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Masukkan NIK"
                                    aria-label="Masukkan NIK"
                                />
                                <button
                                    @click.prevent="searchData"
                                    class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    type="button"
                                    id="button-addon3"
                                >
                                    Cari
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submit" v-if="karyawan">
                    <div class="p-6">
                        <div class="form-group mb-6">
                            <label
                                for="nik"
                                class="form-label inline-block mb-2 text-gray-700"
                                >NIK Karyawan</label
                            >
                            <input
                                type="text"
                                disabled
                                :value="karyawan.nik"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                :class="
                                    form.errors.nik
                                        ? 'focus:border-red-600 border-red-600'
                                        : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                "
                                id="nik"
                            />
                            <div
                                class="text-red-700 text-sm mt-1"
                                v-show="form.errors.nik"
                            >
                                {{ form.errors.nik }}
                            </div>
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="nama_lengkap"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Nama</label
                            >
                            <input
                                type="text"
                                disabled
                                :value="karyawan.nama_lengkap"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                id="nama_lengkap"
                            />
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="email"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Email</label
                            >
                            <input
                                type="text"
                                disabled
                                :value="karyawan.email"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                id="email"
                            />
                        </div>

                        <div class="form-group mb-6">
                            <label
                                for="tanggal_lahir"
                                class="form-label inline-block mb-2 text-gray-700"
                                >Tanggal Lahir</label
                            >
                            <input
                                type="text"
                                disabled
                                :value="karyawan.tanggal_lahir"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                id="tanggal_lahir"
                            />
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
                <div class="p-6 text-center" v-else>Data tidak di temukan</div>
            </div>
        </div>
    </app-layout>
</template>
