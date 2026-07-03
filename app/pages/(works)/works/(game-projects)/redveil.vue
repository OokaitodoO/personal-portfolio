<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <NuxtLink href="/works" class="text-gray-500 hover:text-orange-400 mb-4 size-fit">← Back to Works</NuxtLink>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">{{ current?.title }}</h1>
                <div class="flex gap-4">
                    <ExternalLink type="Github" :link="githubUrl" />
                    <ExternalLink type="Itch.io" :link="itchUrl" />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <!-- Game Preview Image -->
            <div class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <NuxtImg provider="cloudinary" :src="current?.image" alt="Redveil"
                    class="w-full md:w-1/3 lg:w-1/4 h-auto object-cover" preload/>
                <div class="p-6 flex flex-col justify-center">
                    <p class="text-gray-700 leading-relaxed">{{ current?.description }}</p>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <iframe width="700" height="393.75" src="https://www.youtube.com/embed/jDyLmlKuYYQ?si=XYouWUVdj5xFwrGR"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <LoadingProjectSkeleton v-if="pending"/>
            <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <NuxtImg provider="cloudinary" v-for="i in images" :key="i" :src="i"
                    class="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-[1.02]" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { GameProjects } from "~/data/projects"
const route = useRoute();
const current = GameProjects.find(project => project.to === route.path);
const { images, pending } = useProjectImages('game-projects/RedVeil')

const githubUrl = 'https://github.com/OokaitodoO/redveil'
const itchUrl = 'https://filllybui.itch.io/redvile'
const demoUrl = "";

useHead({
    title: 'Redveil - Game Project',
    meta: [
        {
            name: 'description',
            content: 'A mysterious adventure game with a distinctive red aesthetic and engaging storyline.'
        }
    ]
})
</script>

<style scoped></style>