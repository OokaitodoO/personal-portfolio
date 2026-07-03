<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <NuxtLink href="/works" class="text-gray-500 hover:text-orange-400 mb-4">← Back to Works</NuxtLink>                                
            <div class="flex justify-between items-center">                
                <h1 class="text-3xl font-bold text-gray-800">{{ current?.title }}</h1>                
                <div class="flex gap-4">                    
                    <ExternalLink type="Demo" :link="demoUrl"/>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <!-- Game Preview Image -->
            <div class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <img src="/images/Poker/Poker.png" alt="Poker" class="w-full md:w-1/3 lg:w-1/4 h-auto object-cover" />
                <div class="p-6 flex flex-col justify-center">
                    <p class="text-gray-700 leading-relaxed">{{ current?.description }}</p>
                </div>
            </div>

            <LoadingProjectSkeleton v-if="pending"/>
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <NuxtImg provider="cloudinary" v-for="i in images" :key="i" :src="i"
                    class="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-[1.02]" />
            </div>   
        </div>
    </section>
</template>

<script setup lang="ts">
import { GameProjects } from '~/data/projects'
const route = useRoute();
const current = GameProjects.find(project => project.to === route.path);
const { images, pending } = useProjectImages('game-projects/Poker')

const githubUrl = 'https://github.com/OokaitodoO/poker'
const demoUrl = "https://play.google.com/store/apps/details?id=com.varisoft.poker&pcampaignid=web_share"

useHead({
    title: 'Poker - Game Project',
    meta: [
        {
            name: 'description',
            content: 'A digital poker card game implementation with classic gameplay mechanics and smooth UI.'
        }
    ]
})
</script>

<style scoped></style>