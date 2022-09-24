<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/TopNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  props: {
    layanan: Object,
  },

  components: {
    AppLayout,
    Link,
  },
});
</script>

<style scoped>
#pricing-block-5 {
  height: 300px;
  padding-top: 55px;
}

@media (min-width: 992px) {
  #pricing-block-5 {
    height: 400px;
    padding-top: 80px;
  }
}
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(
      650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    ),
    radial-gradient(
      1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    );
}
</style>

<template>
  <app-layout title="Home">
    <section class="mb-32 text-gray-800">
      <div
        id="pricing-block-5"
        class="background-radial-gradient text-center text-white"
      >
        <h2 class="text-3xl font-bold text-center mb-5">SELAMAT DATANG !!</h2>
        <h3 class="text-3xl font-bold text-center mb-12">
          Pelayanan Jasa Servis AC
        </h3>
      </div>

      <div
        class="grid lg:grid-cols-3 px-6 md:px-12 xl:px-32"
        style="margin-top: -200px"
      >
        <div class="p-0 py-12 lg:mx-2" v-for="row in layanan" :key="row">
          <div class="block rounded-lg shadow-lg bg-white h-full">
            <div class="p-6 border-b border-gray-300 text-center">
              <div class="mb-6">
                <img
                  class="mx-auto"
                  :src="$page.props.asset + '/logo/' + row['logo']"
                  alt="logo"
                  style="width: 50px"
                />
              </div>
              <div class="uppercase mb-4">
                <strong>{{ row["nama_kategori"] }}</strong>
              </div>
              <Link
                v-if="
                  $page.props.akses.role == 'pelanggan' || !$page.props.user
                "
                :href="route('pesan-jasa.order', row['slug'])"
                class="
                  inline-block
                  px-6
                  py-2.5
                  bg-gray-300
                  text-slate-900
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  hover:text-gray-50 hover:bg-blue-500
                  transition
                  duration-150
                  ease-in-out
                  w-full
                "
              >
                pesan sekarang
              </Link>
              <button
                v-else
                disabled
                class="
                  inline-block
                  px-6
                  py-2.5
                  bg-gray-300
                  text-slate-900
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  hover:text-gray-50 hover:bg-blue-500
                  transition
                  duration-150
                  ease-in-out
                  w-full
                "
              >
                pesan sekarang
              </button>
            </div>
            <div class="p-6 uppercase text-center text-xs">
              <P> {{ row["deskripsi"] }}. </P>
            </div>
          </div>
        </div>
      </div>
    </section>
  </app-layout>
</template>
