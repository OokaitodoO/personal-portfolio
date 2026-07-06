<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <NuxtLink href="/works" class="text-gray-500 hover:text-orange-400 mb-4 size-fit">← Back to Works</NuxtLink>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">{{ current?.title }}</h1>
                <div class="flex gap-4">
                    <ExternalLink type="Github" :link="githubUrl" />
                    <ExternalLink type="Demo" :link="DemoUrl" />                    
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <div class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <NuxtImg provider="cloudinary" :src="current?.image" alt="Blackest Night"
                    class="w-full md:w-1/3 lg:w-1/4 h-auto object-cover" preload />
                <div class="p-6 flex flex-col justify-center">
                    <p class="text-gray-700 leading-relaxed">{{ current?.description }}</p>
                </div>
            </div>

            <LoadingProjectSkeleton v-if="pending"/>
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <NuxtImg provider="cloudinary" v-for="url in images" :key="url" :src="url" loading="lazy"
                    class="w-full aspect-video object-cover rounded-lg border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-[1.02]" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { GameProjects } from '~/data/projects'

const route = useRoute();
const current = GameProjects.find(project => project.to === route.path);
const { images, pending } = useProjectImages('game-projects/FutsalHyperCasual');

const githubUrl = "https://github.com/OokaitodoO/FutsalHyperCasual";
const DemoUrl = "https://drive.google.com/file/d/1EER6Gclc-dycLJV3CPNsdGyeqHPvyBX4/view?usp=sharing";

</script>

<style scoped>

</style>