<script>
import { defineComponent } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  props: {
    title: String,
  },

  components: {
    Head,
    Link,
  },

  methods: {
    logout() {
      if (!confirm("Yakin akan Keluar?")) return;
      this.$inertia.post(route("logout"));
    },
  },
});
</script>

<template>
  <div>
    <Head :title="title" />

    <div class="flex flex-col h-screen">
      <nav
        class="
          sticky
          top-0
          z-50
          w-full
          flex flex-wrap
          items-center
          justify-between
          p-5
          bg-gray-100
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          shadow-lg
          navbar navbar-expand-lg navbar-light
        "
      >
        <div
          class="
            container-fluid
            w-full
            flex flex-wrap
            items-center
            justify-between
          "
        >
          <button
            class="
              navbar-toggler
              text-gray-500
              border-0
              hover:shadow-none hover:no-underline
              py-2
              px-2.5
              bg-transparent
              focus:outline-none
              focus:ring-0
              focus:shadow-none
              focus:no-underline
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            class="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link
              class="
                flex
                items-center
                text-gray-900
                hover:text-gray-900
                focus:text-gray-900
                mt-2
                lg:mt-0
                mr-1
              "
              :href="route('home')"
            >
              <img
                :src="$page.props.asset + '/logo-cv.webp'"
                style="height: 20px"
                alt="logo-cv"
                loading="lazy"
              />
              <span class="ml-2">{{ $page.props.app.name }}</span>
            </Link>
            <!-- Left links -->
            <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <template v-if="$page.props.user">
                <li class="nav-item p-1">
                  <Link
                    class="nav-link text-gray-500 hover:text-blue-400"
                    :class="route().current('home') ? 'text-blue-600' : ''"
                    :href="route('home')"
                  >
                    Home
                  </Link>
                </li>
                <li
                  class="nav-item p-1"
                  v-show="
                    $page.props.akses.pemilik ||
                    $page.props.akses.role == 'karyawan'
                  "
                >
                  <Link
                    class="nav-link text-gray-500 hover:text-blue-400"
                    :class="route().current('dashboard') ? 'text-blue-600' : ''"
                    :href="route('dashboard')"
                  >
                    Dashboard
                  </Link>
                </li>
              </template>
            </ul>
            <!-- Left links -->
          </div>
          <!-- Collapsible wrapper -->

          <!-- Right elements -->
          <div class="flex items-center relative" v-if="$page.props.user">
            <Link
              class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
              :class="route().current('pesan-jasa.*') ? 'text-blue-600' : ''"
              :href="route('pesan-jasa.index')"
              v-show="$page.props.akses.pelanggan"
            >
              <span
                ><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left"
              /></span>
              <span class="mx-2">Pesanan Saya</span>
            </Link>
            <div class="dropdown relative">
              <a
                class="
                  text-gray-500
                  hover:text-gray-700
                  focus:text-gray-700
                  mr-4
                  dropdown-toggle
                  hidden-arrow
                  flex
                  items-center
                "
                href="#"
                id="dropdownMenuNotification"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span><font-awesome-icon icon="fa-solid fa-bell" /></span>
                <span
                  class="
                    text-white
                    bg-red-700
                    absolute
                    rounded-full
                    text-xs
                    -mt-2.5
                    ml-2
                    py-0
                    px-1.5
                  "
                  >1</span
                >
              </a>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                  left-auto
                  right-0
                "
                aria-labelledby="dropdownMenuNotification"
              >
                <li>
                  <Link
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    >Action</Link
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown relative ml-5">
              <a
                class="dropdown-toggle flex items-center hidden-arrow"
                href="#"
                id="dropdownMenuUser"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  v-if="
                    $page.props.akses.role == 'pelanggan' &&
                    $page.props.user.profile_photo_path != null
                  "
                  :src="
                    $page.props.asset +
                    '/pengguna/' +
                    $page.props.user.profile_photo_path
                  "
                  class="rounded-full"
                  style="height: 25px; width: 25px"
                  alt=""
                  loading="lazy"
                />
                <img
                  v-if="
                    $page.props.akses.role == 'karyawan' &&
                    $page.props.user.profile_photo_path != null
                  "
                  :src="
                    $page.props.asset +
                    '/karyawan/foto/' +
                    $page.props.user.profile_photo_path
                  "
                  class="rounded-full"
                  style="
                    height: 30px;
                    width: 30px;
                    object-fit: cover;
                    object-position: top;
                  "
                  alt=""
                  loading="lazy"
                />
                <img
                  v-else
                  :src="$page.props.asset + '/pengguna/Guest.jpg'"
                  class="rounded-full"
                  style="height: 25px; width: 25px"
                  alt=""
                  loading="lazy"
                />

                <span class="capitalize ml-2 hover:text-blue-600">{{
                  "Hi, " + $page.props.user.name
                }}</span>
              </a>
              <ul
                class="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                  left-auto
                  right-0
                "
                aria-labelledby="dropdownMenuUser"
              >
                <li>
                  <Link
                    v-if="$page.props.akses.role == 'pelanggan'"
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    :href="route('profile-pelanggan.show')"
                  >
                    <span class="mr-2"
                      ><font-awesome-icon icon="fa-solid fa-user"
                    /></span>
                    Profile
                  </Link>
                  <Link
                    v-else
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    :href="route('profile-karyawan.show')"
                  >
                    <span class="mr-2"
                      ><font-awesome-icon icon="fa-solid fa-user"
                    /></span>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    v-if="$page.props.akses.role == 'pelanggan'"
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    :href="route('alamat-pelanggan.index')"
                  >
                    <span class="mr-2"
                      ><font-awesome-icon icon="fa-solid fa-map-location-dot"
                    /></span>
                    Alamat
                  </Link>
                </li>
                <li>
                  <Link
                    class="
                      dropdown-item
                      text-sm
                      py-2
                      px-4
                      font-normal
                      block
                      w-full
                      whitespace-nowrap
                      bg-transparent
                      text-gray-700
                      hover:bg-gray-100
                    "
                    @click.prevent="logout"
                  >
                    <span class="mr-2"
                      ><font-awesome-icon icon="fa-solid fa-right-from-bracket"
                    /></span>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex items-center relative" v-else>
            <Link
              class="text-gray-500 hover:text-blue-400"
              :class="route().current('login') ? 'text-blue-600' : ''"
              :href="route('login')"
            >
              <span
                ><font-awesome-icon icon="fa-solid fa-right-to-bracket"
              /></span>
              <span class="mx-2">Login</span>
            </Link>
            <Link
              class="text-gray-500 hover:text-blue-400"
              :class="route().current('register') ? 'text-blue-600' : ''"
              :href="route('register')"
            >
              <span
                ><font-awesome-icon icon="fa-solid fa-person-chalkboard"
              /></span>
              <span class="mx-2">Registrasi</span>
            </Link>
          </div>
          <!-- Right elements -->
        </div>
      </nav>

      <main>
        <div class="bg-gray-100 flex-1 overflow-y-auto pb-10">
          <slot />
        </div>
      </main>

      <footer class="text-md p-5 text-right shadow-lg">
        <strong>{{ $page.props.app.name }}</strong>
        <span class="text-sm ml-2">Copyright@2022</span>
      </footer>
    </div>
  </div>
</template>
