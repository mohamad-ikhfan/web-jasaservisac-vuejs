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

        <aside
            class="w-60 h-screen shadow-md bg-white fixed py-5"
            id="sidenavSecExample"
        >
            <div class="pt-4 pb-2 px-6">
                <Link
                    :href="route('profile-karyawan.show')"
                    v-if="$page.props.user.role == 'karyawan'"
                >
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img
                                :src="
                                    $page.props.asset +
                                    '/karyawan/foto/' +
                                    $page.props.user.profile_photo_path
                                "
                                class="rounded-full w-10 h-10"
                                alt="Avatar"
                                style="object-fit: cover; object-position: top"
                            />
                        </div>
                        <div class="grow ml-3">
                            <p
                                class="text-sm font-semibold text-blue-600 capitalize"
                            >
                                {{ $page.props.user.name }}
                            </p>
                            <p class="text-xs text-gray-600">
                                {{ $page.props.user.role }}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link v-else>
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img
                                :src="$page.props.asset + '/pengguna/Guest.jpg'"
                                class="rounded-full w-10 h-10"
                                alt="Avatar"
                                style="object-fit: cover; object-position: top"
                            />
                        </div>
                        <div class="grow ml-3">
                            <p
                                class="text-sm font-semibold text-blue-600 capitalize"
                            >
                                {{ $page.props.user.name }}
                            </p>
                            <p class="text-xs text-gray-600">
                                {{ $page.props.user.role }}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <hr class="my-2" />

            <ul class="relative px-1">
                <li class="relative">
                    <Link
                        :href="route('dashboard')"
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                        :class="
                            route().current('dashboard')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-gauge"
                        /></span>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li
                    class="relative"
                    id="sidenavProduk"
                    v-show="
                        $page.props.akses.admin || $page.props.akses.owner
                    "
                >
                    <a
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                        :class="
                            route().current('kategori-layanan.*') ||
                            route().current('jenis-layanan.*')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSidenavProduk"
                        aria-expanded="false"
                        aria-controls="collapseSidenavProduk"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon
                                icon="fa-brands fa-servicestack"
                        /></span>
                        <span>Daftar Layanan</span>
                        <span class="ml-auto"
                            ><font-awesome-icon icon="fa-solid fa-angle-down"
                        /></span>
                    </a>
                    <ul
                        class="relative accordion-collapse collapse"
                        :class="
                            route().current('kategori-layanan.*') ||
                            route().current('jenis-layanan.*')
                                ? 'show'
                                : ''
                        "
                        id="collapseSidenavProduk"
                        aria-labelledby="sidenavProduk"
                        data-bs-parent="#sidenavSecExample"
                    >
                        <li class="relative">
                            <Link
                                :href="route('kategori-layanan.index')"
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                :class="
                                    route().current('kategori-layanan.*')
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Kategori Layanan</span>
                            </Link>
                        </li>
                        <li class="relative">
                            <Link
                                :href="route('jenis-layanan.index')"
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                :class="
                                    route().current('jenis-layanan.*')
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Jenis Layanan</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li
                    class="relative"
                    id="sidenavSparepart"
                    v-show="
                        $page.props.akses.admin || $page.props.akses.owner
                    "
                >
                    <a
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                        :class="
                            route().current('sparepart.*') ||
                            route().current('stok-sparepart.*')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSidenavSparepart"
                        aria-expanded="false"
                        aria-controls="collapseSidenavSparepart"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-swatchbook"
                        /></span>
                        <span>Sparepart</span>
                        <span class="ml-auto"
                            ><font-awesome-icon icon="fa-solid fa-angle-down"
                        /></span>
                    </a>
                    <ul
                        class="relative accordion-collapse collapse"
                        :class="
                            route().current('sparepart.*') ||
                            route().current('stok-sparepart.*')
                                ? 'show'
                                : ''
                        "
                        id="collapseSidenavSparepart"
                        aria-labelledby="sidenavSparepart"
                        data-bs-parent="#sidenavSecExample"
                    >
                        <li class="relative">
                            <Link
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                :class="
                                    route().current('sparepart.*')
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                :href="route('sparepart.index')"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Daftar Sparepart</span>
                            </Link>
                        </li>
                        <li class="relative">
                            <Link
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                :class="
                                    route().current('stok-sparepart.*')
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                :href="route('stok-sparepart.index')"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Stok Sparepart</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li class="relative" id="sidenavPesanan">
                    <a
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSidenavPesanan"
                        aria-expanded="false"
                        aria-controls="collapseSidenavPesanan"
                        :class="
                            route().current('pesanan-pelanggan.*')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                    >
                        <span class="mr-3"
                            ><font-awesome-icon
                                icon="fa-solid fa-arrow-down-up-across-line"
                        /></span>
                        <span>Pesan Layanan</span>
                        <span class="ml-auto"
                            ><font-awesome-icon icon="fa-solid fa-angle-down"
                        /></span>
                    </a>
                    <ul
                        class="relative accordion-collapse collapse"
                        id="collapseSidenavPesanan"
                        aria-labelledby="sidenavPesanan"
                        data-bs-parent="#sidenavSecExample"
                        :class="
                            route().current('pesanan-pelanggan.*') ? 'show' : ''
                        "
                    >
                        <li class="relative">
                            <Link
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                                :class="
                                    route().current(
                                        'pesanan-pelanggan.daftar-pesanan'
                                    )
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                :href="
                                    route('pesanan-pelanggan.daftar-pesanan')
                                "
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Daftar Pesanan</span>
                            </Link>
                        </li>

                        <li class="relative">
                            <Link
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                                :class="
                                    route().current(
                                        'pesanan-pelanggan.pesanan-masuk'
                                    )
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                :href="route('pesanan-pelanggan.pesanan-masuk')"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Pesanan Masuk</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li class="relative" id="sidenavLaporan">
                    <a
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSidenavLaporan"
                        aria-expanded="false"
                        aria-controls="collapseSidenavLaporan"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-book"
                        /></span>
                        <span>Laporan</span>
                        <span class="ml-auto"
                            ><font-awesome-icon icon="fa-solid fa-angle-down"
                        /></span>
                    </a>
                    <ul
                        class="relative accordion-collapse collapse"
                        id="collapseSidenavLaporan"
                        aria-labelledby="sidenavLaporan"
                        data-bs-parent="#sidenavSecExample"
                        :class="
                            route().current('laporan-teknisi.*') ? 'show' : ''
                        "
                    >
                        <li class="relative">
                            <Link
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                                :class="
                                    route().current('laporan-teknisi.index')
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                :href="route('laporan-teknisi.index')"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Lihat Laporan</span>
                            </Link>
                        </li>
                        <li class="relative">
                            <Link
                                class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="primary"
                                :class="
                                    route().current('laporan-teknisi.create')
                                        ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                        : 'text-gray-700'
                                "
                                :href="route('laporan-teknisi.create')"
                            >
                                <span class="mr-3"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-rectangle-list"
                                /></span>
                                <span>Buat Laporan</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li
                    class="relative"
                    v-show="
                        $page.props.akses.admin || $page.props.akses.owner
                    "
                >
                    <Link
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        :class="
                            route().current('karyawan.*')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                        :href="route('karyawan.index')"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-id-card"
                        /></span>
                        <span>Data Karyawan</span>
                    </Link>
                </li>

                <li
                    class="relative"
                    v-show="
                        $page.props.akses.admin || $page.props.akses.owner
                    "
                >
                    <Link
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        :class="
                            route().current('akses-user.*')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                        :href="route('akses-user.index')"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-user-cog"
                        /></span>
                        <span>User Akses</span>
                    </Link>
                </li>

                <li
                    class="relative"
                    v-show="
                        $page.props.akses.admin || $page.props.akses.owner
                    "
                >
                    <Link
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        :class="
                            route().current('pelanggan.*')
                                ? 'ripple-surface-primary bg-blue-100 text-blue-700'
                                : 'text-gray-700'
                        "
                        :href="route('pelanggan.index')"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-users"
                        /></span>
                        <span>Data Pelanggan</span>
                    </Link>
                </li>

                <li class="relative pt-5">
                    <Link
                        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="primary"
                        @click.prevent="logout()"
                    >
                        <span class="mr-3"
                            ><font-awesome-icon icon="fa-solid fa-sign-out"
                        /></span>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>

            <div class="text-center bottom-0 absolute w-full">
                <hr class="m-0" />
                <p class="py-2 text-md text-gray-700">
                    <strong>{{ $page.props.app.name }}</strong
                    ><br />
                    <span class="text-sm">Copyright @2022</span>
                </p>
            </div>
        </aside>

        <main>
            <div
                class="ml-60 p-2 lg:p-8 bg-gray-100 static overflow-hidden min-h-screen"
            >
                <slot />
            </div>
        </main>
    </div>
</template>
