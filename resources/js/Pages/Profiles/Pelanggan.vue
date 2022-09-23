<script>
import { defineComponent } from "vue";
import AppLayout from "@/layouts/TopNavLayout.vue";
import ActionMessage from "@/Jetstream/ActionMessageBottom.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        pelanggan: Object,
    },

    components: {
        AppLayout,
        ActionMessage,
        Link,
    },

    data() {
        return {
            changePassword: false,
            form: this.$inertia.form({
                password_lama: "",
                password_baru: "",
                password_baru_confirmation: "",
            }),
        };
    },

    methods: {
        submit() {
            this.form.post(route("profile-pelanggan.change-password"), {
                preserveScroll: true,
                onSuccess: () => {
                    form.reset();
                    this.changePassword = false;
                },
            });
        },
    },
});
</script>

<template>
    <app-layout title="Profil Saya">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>

        <div class="flex justify-center mt-10 px-5">
            <div
                class="block rounded-lg shadow-sm bg-white min-w-full min-h-full p-10"
            >
                <div class="py-3 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">
                        Profil Saya
                    </h5>
                </div>

                <div class="flex flex-col p-5">
                    <div class="md:flex no-wrap md:-mx-2">
                        <!-- Left Side -->
                        <div class="w-full md:w-3/12 md:mx-2">
                            <!-- Profile Card -->
                            <div class="p-3">
                                <div class="image overflow-hidden">
                                    <img
                                        v-if="pelanggan.profile_photo_path"
                                        class="h-auto w-full mx-auto"
                                        :src="
                                            $page.props.asset +
                                            '/pengguna/' +
                                            pelanggan.profile_photo_path
                                        "
                                        alt="pelanggan"
                                    />
                                    <img
                                        v-else
                                        class="h-auto w-full mx-auto"
                                        :src="
                                            $page.props.asset +
                                            '/pengguna/Guest.jpg'
                                        "
                                        alt="pelanggan"
                                    />
                                </div>
                            </div>
                            <!-- End of profile card -->
                            <div class="my-2"></div>
                        </div>
                        <!-- Right Side -->
                        <div class="w-full md:w-9/12 mx-2">
                            <!-- Profile tab -->
                            <!-- About Section -->
                            <div class="p-3">
                                <div>
                                    <div
                                        class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                                    >
                                        <span clas="text-green-500">
                                            <font-awesome-icon
                                                icon="fa-solid fa-id-card-clip"
                                            />
                                        </span>
                                        <span class="tracking-wide"
                                            >Data Saya</span
                                        >
                                    </div>
                                    <div class="text-gray-700">
                                        <div class="p-4 space-y-4">
                                            <div
                                                class="grid grid-cols-3 font-semibold"
                                            >
                                                <span>NAMA</span>
                                                <span
                                                    >:
                                                    {{ pelanggan.name }}</span
                                                >
                                            </div>
                                            <div
                                                class="grid grid-cols-3 font-semibold"
                                            >
                                                <span>EMAIL</span>
                                                <span
                                                    >:
                                                    {{ pelanggan.email }}</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            class="p-4"
                                            v-if="changePassword == false"
                                        >
                                            <button
                                                type="button"
                                                @click.prevent="
                                                    $emit(
                                                        (changePassword = true)
                                                    )
                                                "
                                                class="px-4 py-2.5 rounded-lg bg-gray-200 text-blue-600"
                                            >
                                                Ubah Password
                                            </button>
                                        </div>
                                        <div class="p-4" v-else>
                                            <form @submit.prevent="submit">
                                                <div class="w-1/2">
                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="password_lama"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            >Password
                                                            Lama</label
                                                        >
                                                        <input
                                                            type="password"
                                                            v-model="
                                                                form.password_lama
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .password_lama
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="password_lama"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .password_lama
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .password_lama
                                                            }}
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="password_baru"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            >Password
                                                            Baru</label
                                                        >
                                                        <input
                                                            type="password"
                                                            v-model="
                                                                form.password_baru
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .password_baru
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="password_baru"
                                                        />
                                                        <div
                                                            class="text-red-700 text-sm mt-1"
                                                            v-show="
                                                                form.errors
                                                                    .password_baru
                                                            "
                                                        >
                                                            {{
                                                                form.errors
                                                                    .password_baru
                                                            }}
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="form-group mb-6"
                                                    >
                                                        <label
                                                            for="password_baru_confirmation"
                                                            class="form-label inline-block mb-2 text-gray-700"
                                                            >Konfirmasi
                                                            Password</label
                                                        >
                                                        <input
                                                            type="password"
                                                            v-model="
                                                                form.password_baru_confirmation
                                                            "
                                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                                                            :class="
                                                                form.errors
                                                                    .password
                                                                    ? 'focus:border-red-600 border-red-600'
                                                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                                                            "
                                                            id="password_baru_confirmation"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-3">
                                                    <div>
                                                        <button
                                                            type="submit"
                                                            @click.prevent="
                                                                $emit(
                                                                    (changePassword = false)
                                                                )
                                                            "
                                                            :class="{
                                                                'opacity-25':
                                                                    form.processing,
                                                            }"
                                                            :disabled="
                                                                form.processing
                                                            "
                                                            class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                                        >
                                                            Batal
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button
                                                            type="submit"
                                                            :class="{
                                                                'opacity-25':
                                                                    form.processing,
                                                            }"
                                                            :disabled="
                                                                form.processing
                                                            "
                                                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal capitalize rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                                                        >
                                                            Simpan
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of about section -->
                        </div>
                    </div>
                </div>

                <div
                    class="py-3 px-6 border-t border-gray-300 text-gray-600"
                ></div>
            </div>
        </div>
    </app-layout>
</template>
