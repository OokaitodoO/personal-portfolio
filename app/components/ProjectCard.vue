<template>
    <div class="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-all hover:shadow-lg flex flex-col h-full">
        <div class="aspect-video overflow-hidden">
            <img :src="image" :alt="title"
                class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="p-5 flex flex-col grow">
            <h3 class="text-lg font-medium text-gray-800 mb-2">{{ title }}</h3>
            <p class="text-gray-500 mb-4 text-sm leading-relaxed grow">{{ description }}</p>
            <TechStack :technologies="techStack" wrapper-class="mb-3" />
            <NuxtLink v-if="to" :to="to"
                class="text-gray-600 text-sm hover:text-gray-800 transition-colors inline-flex items-center gap-1 mt-auto">
                View Project →
            </NuxtLink>
            <a v-else-if="href" :href="href" target="_blank"
                class="text-gray-600 text-sm hover:text-gray-800 transition-colors inline-flex items-center gap-1 mt-auto">
                View Project →
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
    description: string
    image: string
    techStack: string[]
    to?: string
    href?: string
}

defineProps<Props>()
</script>

<style scoped></style>