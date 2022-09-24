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
          <img
            class="mx-auto mb-10"
            :src="$page.props.asset + '/logo-cv.webp'"
            alt="logo"
          />
          <div class="text-center font-semibold">Jasa Pelayanan Servis AC</div>
          <div class="text-center font-semibold">CV Multi Artha Teknik</div>
        </div>
      </div>
    </div>
  </app-layout>
</template>
