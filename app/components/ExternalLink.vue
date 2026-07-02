<template>
    <nuxt-link :to="link" target="blank" :class="getBtnClasses(type)">
        {{ type }}        
    </nuxt-link>
</template>

<script setup lang="ts">
interface link {
    type: string,
    link?: string
}

defineProps<link>();

const linkStyles: Record<string, string> = {
    "Github": "flex border text-center items-center rounded-2xl p-2 font-bold text-white bg-gray-800 hover:text-gray-800 hover:bg-white hover:cursor-pointer hover:px-4 transition-all",
    "Demo": "flex border border-emerald-500 text-center items-center rounded-2xl p-2 font-bold text-white bg-emerald-500 hover:bg-transparent hover:text-emerald-400 hover:cursor-pointer hover:px-4 transition-all",
    "Itch.io": "flex border border-amber-600 text-center items-center rounded-2xl p-2 font-bold text-white bg-amber-600 hover:bg-transparent hover:text-amber-600 hover:cursor-pointer hover:px-4 transition-all",
}

const getBtnClasses = (type: string) => {
    return linkStyles[type] || 'bg-gray-50 text-gray-400'
}
</script>

<style scoped></style>