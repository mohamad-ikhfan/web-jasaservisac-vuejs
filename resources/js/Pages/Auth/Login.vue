<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/TopNavLayout.vue";
import JetCheckBox from "@/Jetstream/Checkbox.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        title: String,
        canResetPassword: Boolean,
        status: String,
    },

    components: {
        AppLayout,
        JetCheckBox,
        Link,
    },

    data() {
        return {
            form: this.$inertia.form({
                email: "",
                password: "",
                remember: false,
            }),
        };
    },

    methods: {
        submit() {
            this.form
                .transform((data) => ({
                    ...data,
                    remember: this.form.remember ? "on" : "",
                }))
                .post(this.route("login"), {
                    onFinish: () => this.form.reset("password"),
                });
        },
    },
});
</script>

<template>
    <app-layout title="Login">
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <div
            class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-8"
        >
            <div class="py-3 px-6 border-b border-gray-300">
                <h5 class="text-gray-900 text-xl font-medium text-center">
                    Form Login
                </h5>
            </div>
            <div class="p-6">
                <div v-if="$page.props.flash.message">
                    <div
                        class="bg-green-100 rounded-lg p-4 mb-3 text-xs hover:shadow-sm text-base text-green-700 inline-flex items-center w-full"
                        role="alert"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check-circle"
                            class="w-4 h-4 mr-2 fill-current"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                        </svg>
                        {{ $page.props.flash.message }}
                    </div>
                </div>
                <form @submit.prevent="submit">
                    <div class="form-group mb-6">
                        <label
                            for="email"
                            class="form-label inline-block mb-2 text-gray-700"
                            >Alamat Email</label
                        >
                        <input
                            type="email"
                            v-model="form.email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                            :class="
                                form.errors.email
                                    ? 'focus:border-red-600 border-red-600'
                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                            "
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <div
                            class="text-red-700 text-sm mt-1"
                            v-show="form.errors.email"
                        >
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <div class="form-group mb-6">
                        <label
                            for="password"
                            class="form-label inline-block mb-2 text-gray-700"
                            >Password</label
                        >
                        <input
                            type="password"
                            v-model="form.password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                            :class="
                                form.errors.password
                                    ? 'focus:border-red-600 border-red-600'
                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                            "
                            id="password"
                            placeholder="Password"
                        />
                        <div
                            class="text-red-700 text-sm mt-1"
                            v-show="form.errors.password"
                        >
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <div class="flex justify-between items-center mb-6">
                        <div class="form-group form-check">
                            <jet-check-box
                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="remember_me"
                                v-model:checked="form.remember"
                            />
                            <label
                                class="form-check-label inline-block text-gray-800"
                                for="remember_me"
                                >Remember me</label
                            >
                        </div>
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                            >Lupa password?</Link
                        >
                    </div>
                    <button
                        type="submit"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Sign in
                    </button>
                </form>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <p class="text-gray-800 text-center">
                    Belum registrasi?
                    <Link
                        :href="route('register')"
                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                        >Register</Link
                    >
                </p>
            </div>
        </div>
    </app-layout>
</template>
