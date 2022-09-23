<script>
import { usePage } from "@inertiajs/inertia-vue3";
import { defineComponent } from "vue";

defineComponent({
    computed: {
        message: usePage().props.flash.message,
    },
});
</script>

<style scoped>
.alert-toast-in {
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*Toast close animation*/
.alert-toast-out {
    -webkit-animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

@-webkit-keyframes fade-out-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0;
    }
}

@keyframes fade-out-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0;
    }
}
</style>

<template>
    <div
        class="fixed z-100 top-5 right-5"
        :class="flash ? 'alert-toast-in' : ''"
    >
        <div
            class="flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm shadow-green-600"
        >
            <div class="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                    />
                </svg>
                <p class="ml-3 text-sm font-bold text-green-600">
                    <slot />
                </p>
            </div>

            <button
                title="close"
                class="inline-flex items-center"
                @click="$emit((message = null))"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
