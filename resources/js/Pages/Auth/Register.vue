<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/TopNavLayout.vue";
import JetCheckBox from "@/Jetstream/Checkbox.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: {
        title: String,
    },

    components: {
        AppLayout,
        JetCheckBox,
        Link,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                terms: false,
            }),
        };
    },

    methods: {
        submit() {
            this.form.post(this.route("register"), {
                onFinish: () =>
                    this.form.reset("password", "password_confirmation"),
            });
        },
    },
});
</script>

<template>
    <app-layout title="Register">
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <div
            class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-8"
        >
            <div class="py-3 px-6 border-b border-gray-300">
                <h5 class="text-gray-900 text-xl font-medium text-center">
                    Form Registrasi
                </h5>
            </div>
            <div class="p-6">
                <form @submit.prevent="submit">
                    <div class="form-group mb-6">
                        <label
                            for="name"
                            class="form-label inline-block mb-2 text-gray-700"
                            >Nama Lengkap</label
                        >
                        <input
                            type="text"
                            v-model="form.name"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                            :class="
                                form.errors.name
                                    ? 'focus:border-red-600 border-red-600'
                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                            "
                            id="name"
                            aria-describedby="emailHelp"
                            placeholder="Enter name"
                        />
                        <div
                            class="text-red-700 text-sm mt-1"
                            v-show="form.errors.name"
                        >
                            {{ form.errors.name }}
                        </div>
                    </div>

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

                    <div class="form-group mb-6">
                        <label
                            for="password_confirmation"
                            class="form-label inline-block mb-2 text-gray-700"
                            >Password</label
                        >
                        <input
                            type="password"
                            v-model="form.password_confirmation"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white"
                            :class="
                                form.errors.password
                                    ? 'focus:border-red-600 border-red-600'
                                    : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                            "
                            id="password_confirmation"
                            placeholder="Ulangi Password"
                        />
                        <div
                            class="text-red-700 text-sm mt-1"
                            v-show="form.errors.password"
                        >
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <div
                        class="flex justify-between items-center mb-6"
                        v-if="
                            $page.props.jetstream
                                .hasTermsAndPrivacyPolicyFeature
                        "
                    >
                        <div class="form-group form-check">
                            <jet-check-box
                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="remember_me"
                                v-model:checked="form.terms"
                            />
                            <label
                                class="form-check-label inline-block text-gray-800"
                                for="remember_me"
                                >I agree to the
                                <a
                                    target="_blank"
                                    :href="route('terms.show')"
                                    class="underline text-sm text-gray-600 hover:text-gray-900"
                                    >Terms of Service</a
                                >
                                and
                                <a
                                    target="_blank"
                                    :href="route('policy.show')"
                                    class="underline text-sm text-gray-600 hover:text-gray-900"
                                    >Privacy Policy</a
                                >
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Register
                    </button>
                </form>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <p class="text-gray-800 text-center">
                    Sudah registrasi?
                    <Link
                        :href="route('login')"
                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                        >Login</Link
                    >
                </p>
            </div>
        </div>
    </app-layout>
</template>
