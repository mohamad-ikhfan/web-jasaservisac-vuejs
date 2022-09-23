<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import ActionMessage from "@/Jetstream/ActionMessage.vue";

export default defineComponent({
    components: {
        AppLayout,
        Link,
        ActionMessage,
    },
});
</script>

<template>
    <app-layout title="Dashboard">
        <action-message :on="$page.props.flash.message">{{
            $page.props.flash.message
        }}</action-message>
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white min-w-full">
                <div class="py-3 px-6 border-b border-gray-300">
                    <h5 class="text-gray-900 text-xl font-medium">Dashboard</h5>
                </div>

                <div class="p-5">
                    <ul class="stepper">
                        <li class="stepper-step stepper-active">
                            <div class="stepper-head">
                                <span class="stepper-head-icon"> 1 </span>
                                <span class="stepper-head-text"> step1 </span>
                            </div>
                            <div class="stepper-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </li>
                        <li class="stepper-step">
                            <div class="stepper-head">
                                <span class="stepper-head-icon"> 2 </span>
                                <span class="stepper-head-text"> step2 </span>
                            </div>
                            <div class="stepper-content">
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
                            </div>
                        </li>
                        <li class="stepper-step">
                            <div class="stepper-head">
                                <span class="stepper-head-icon"> 3 </span>
                                <span class="stepper-head-text"> step3 </span>
                            </div>
                            <div class="stepper-content">
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                            </div>
                        </li>
                    </ul>

                    <div class="p-5 border-t-2 border-blue-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda saepe laborum voluptatem expedita illo!
                        Pariatur, expedita at reiciendis ipsam dignissimos
                        aliquam enim labore quam qui nihil sequi, sunt,
                        voluptatibus suscipit.
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
