<template>
    <div class="flex justify-center" v-if="links.length > 3">
        <nav aria-label="Page navigation example">
            <ul class="flex list-style-none">
                <template v-for="(link, index) in links" :key="index">
                    <li class="page-item disabled">
                        <Link
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full"
                            :class="
                                link.url === null
                                    ? 'pointer-events-none'
                                    : link.active
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            "
                            :href="link.url"
                            tabindex="-1"
                            :aria-disabled="link.url === null"
                        >
                            <span v-html="link.label"></span>
                        </Link>
                    </li>
                </template>
            </ul>
        </nav>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    props: {
        links: Array,
    },
    components: {
        Link,
    },
};
</script>
