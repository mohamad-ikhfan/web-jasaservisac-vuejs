<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/SideNavLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import ActionMessage from "@/Jetstream/ActionMessage.vue";

export default defineComponent({
  props: {
    pesanan: Object,
    teknisi: Object,
    no_pesanan: String,
    sparepart: Object,
  },

  components: {
    AppLayout,
    Link,
    ActionMessage,
  },

  data() {
    return {
      tambahan_part: "ya",
      teknisi_count: 1,
      sparepart_count: 1,
      form: this.$inertia.form({
        no_pesanan: this.no_pesanan,
        sparepart_id: [],
        sparepart_qty: [],
        teknisi_nik: [],
        sparepart_harga: [],
      }),
    };
  },

  methods: {
    getPesanan: _.throttle(function () {
      this.$inertia.replace(
        this.route("laporan-teknisi.create", {
          no_pesanan: this.form.no_pesanan,
        })
      );
    }),

    submit() {
      this.form.post(route("laporan-teknisi.store"));
    },

    addQty() {
      if (this.form.sparepart_id.length != this.form.sparepart_qty.length) {
        this.form.sparepart_qty.push(1);
      }
      for (let index = 0; index < this.form.sparepart_id.length; index++) {
        this.form.sparepart_qty[index].push(1);
      }
    },

    formatNumber(number) {
      return Intl.NumberFormat().format(number);
    },
  },
});
</script>

<template>
  <app-layout title="Buat Laporan">
    <action-message :on="$page.props.flash.message">{{
      $page.props.flash.message
    }}</action-message>
    <div class="flex justify-center">
      <div class="block rounded-lg shadow-lg bg-white min-w-full">
        <div class="py-3 px-6 border-b border-gray-300">
          <h5 class="text-gray-900 text-xl font-medium">Buat Laporan</h5>
        </div>

        <div class="p-5">
          <form @submit.prevent="submit">
            <div class="grid grid-cols-2 space-x-4">
              <div class="p-5">
                <div class="form-group mb-6">
                  <label
                    for="pesanan"
                    class="form-label inline-block mb-2 text-gray-700"
                    >No Pesanan</label
                  >
                  <input
                    type="text"
                    v-model="form.no_pesanan"
                    class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white
                    "
                    id="pesanan"
                  />
                  <div class="mt-4 text-right">
                    <button
                      type="button"
                      @click.prevent="getPesanan"
                      class="
                        px-6
                        py-2.5
                        bg-gray-300
                        text-blue-600 text-sm
                        font-semibold
                        rounded-lg
                      "
                    >
                      Lihat Pesanan
                    </button>
                  </div>
                </div>
                <div v-if="pesanan">
                  <div
                    class="
                      grid grid-cols-2
                      bg-gray-100
                      p-5
                      text-sm
                      border-2 border-b-0 border-gray-300
                    "
                  >
                    <div class="font-semibold">Nomor Pesanan</div>
                    <div>{{ pesanan.no_pesanan }}</div>
                  </div>
                  <div
                    class="
                      grid grid-cols-2
                      bg-gray-100
                      p-5
                      text-sm
                      border-2 border-b-0 border-gray-300
                    "
                  >
                    <div class="font-semibold">Kategori Layanan</div>
                    <div class="capitalize">
                      {{ pesanan.nama_kategori }}
                    </div>
                  </div>
                  <div
                    class="
                      grid grid-cols-2
                      bg-gray-100
                      p-5
                      text-sm
                      border-2 border-b-0 border-gray-300
                    "
                  >
                    <div class="font-semibold">Nama Layanan</div>
                    <div class="capitalize">
                      {{ pesanan.nama_layanan }}
                    </div>
                  </div>
                  <div
                    class="
                      grid grid-cols-2
                      bg-gray-100
                      p-5
                      text-sm
                      border-2 border-b-0 border-gray-300
                    "
                  >
                    <div class="font-semibold">Jenis Properti</div>
                    <div class="capitalize">
                      {{ pesanan.properti }}
                    </div>
                  </div>
                  <div
                    class="
                      grid grid-cols-2
                      bg-gray-100
                      p-5
                      text-sm
                      border-2 border-gray-300
                    "
                  >
                    <div class="font-semibold">Alamat</div>
                    <div class="capitalize">
                      <div>Nama : {{ pesanan.atas_nama }}</div>
                      <div>No. Hp : {{ pesanan.no_hp }}</div>
                      <div>
                        Alamat :
                        {{ pesanan.alamat_lengkap }}
                      </div>
                      <div>Patokan : {{ pesanan.patokan }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="pesanan">
                <div>
                  <div class="form-group mb-6">
                    <label class="form-label mb-2 text-gray-700 mr-6">
                      <strong>Ada Tambahan Sparepart ?</strong></label
                    >
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="tambahan_part1"
                        value="ya"
                        :checked="tambahan_part == 'ya'"
                        v-model="tambahan_part"
                      />
                      <label
                        class="form-check-label capitalize ml-1"
                        for="tambahan_part1"
                        >Ya</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="tambahan_part2"
                        value="tidak"
                        :checked="tambahan_part == 'tidak'"
                        v-model="tambahan_part"
                      />
                      <label
                        class="form-check-label capitalize ml-1"
                        for="tambahan_part2"
                        >Tidak</label
                      >
                    </div>
                  </div>
                  <div class="mb-6" v-show="tambahan_part == 'ya'">
                    <div
                      class="grid grid-cols-2 space-x-5"
                      v-for="index in sparepart_count"
                      :key="index"
                    >
                      <div class="form-group mb-4">
                        <label
                          :for="'sparepart_id_' + index"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Sparepart</label
                        >
                        <select
                          class="
                            form-select
                            appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                          "
                          :class="
                            form.errors.sparepart_id &&
                            !form.sparepart_id[index - 1]
                              ? 'focus:border-red-600 border-red-600'
                              : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                          "
                          v-model="form.sparepart_id[index - 1]"
                          @change.prevent="addQty()"
                          :id="'sparepart_id_' + index"
                        >
                          <option
                            class="capitalize"
                            v-for="row in sparepart"
                            :key="row"
                            :selected="row.id == form.sparepart_id[index - 1]"
                            :value="row.id"
                          >
                            {{ row.nama_sparepart }}
                            ({{ "stok: " + row.jumlah }}) (
                            {{ "Rp." + formatNumber(row.harga) }}
                            )
                          </option>
                        </select>
                        <div
                          class="text-red-700 text-sm mt-1"
                          v-show="
                            form.errors.sparepart_id &&
                            !form.sparepart_id[index - 1]
                          "
                        >
                          {{ form.errors.sparepart_id }}
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <label
                          :for="'sparepart_qty_' + index"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Qty</label
                        >
                        <input
                          type="number"
                          v-model="form.sparepart_qty[index - 1]"
                          :disabled="!form.sparepart_qty[index - 1]"
                          class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white
                          "
                          min="1"
                          :class="
                            form.errors.sparepart_qty &&
                            !form.sparepart_qty[index - 1]
                              ? 'focus:border-red-600 border-red-600'
                              : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                          "
                          :id="'sparepart_qty_' + index"
                        />
                        <div
                          class="text-red-700 text-sm mt-1"
                          v-show="
                            form.errors.sparepart_qty &&
                            !form.sparepart_qty[index - 1]
                          "
                        >
                          {{ form.errors.sparepart_qty }}
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <button
                        @click.prevent="$emit(sparepart_count++)"
                        class="
                          px-4
                          py-1
                          5
                          bg-blue-500
                          text-gray-50 text-xs
                          rounded-lg
                        "
                        :class="{
                          'opacity-25':
                            sparepart_count == sparepart.length ||
                            sparepart.length < 1,
                        }"
                        :disabled="
                          sparepart_count == sparepart.length ||
                          sparepart.length < 1
                        "
                      >
                        Tambah Baris
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-label mb-2 text-gray-700">
                    <strong>Teknisi Yang Bekerja</strong>
                  </div>
                  <div
                    class="form-group my-5"
                    v-for="index in teknisi_count"
                    :key="index"
                  >
                    <select
                      class="
                        form-select
                        appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                      :class="
                        form.errors.teknisi_nik && !form.teknisi_nik[index - 1]
                          ? 'focus:border-red-600 border-red-600'
                          : 'border-gray-300 focus:border-blue-600 focus:outline-none'
                      "
                      v-model="form.teknisi_nik[index - 1]"
                    >
                      <option
                        class="capitalize"
                        v-for="row in teknisi"
                        :key="row"
                        :selected="row.nik == form.teknisi_nik[index - 1]"
                        :value="row.nik"
                      >
                        <span class="capitalize">{{
                          row.nik + " : " + row.nama_lengkap
                        }}</span>
                      </option>
                    </select>
                    <div
                      class="text-red-700 text-sm mt-1"
                      v-show="
                        form.errors.teknisi_nik && !form.teknisi_nik[index - 1]
                      "
                    >
                      {{ form.errors.teknisi_nik }}
                    </div>
                  </div>
                  <div class="mt-3">
                    <button
                      @click.prevent="$emit(teknisi_count++)"
                      class="
                        px-4
                        py-1
                        5
                        bg-blue-500
                        text-gray-50 text-xs
                        rounded-lg
                      "
                      :class="{
                        'opacity-25': teknisi_count == teknisi.length,
                      }"
                      :disabled="teknisi_count == teknisi.length"
                    >
                      Tambah Baris
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div>
                <button
                  type="button"
                  class="px-6 py-2.5 text-sm bg-gray-200 text-blue-500 rounded"
                >
                  Kembali
                </button>
              </div>
              <div class="text-right">
                <button
                  type="submit"
                  class="px-6 py-2.5 text-sm bg-blue-500 text-gray-50 rounded"
                  :class="{
                    'opacity-25': form.processing,
                  }"
                  :disabled="form.processing"
                >
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </app-layout>
</template>
