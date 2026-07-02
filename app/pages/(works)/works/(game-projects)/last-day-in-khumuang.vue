<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <NuxtLink href="/works" class="text-gray-500 hover:text-orange-400 mb-4 size-fit">← Back to Works</NuxtLink>
            <div class="flex justify-between items-center">                
                <h1 class="text-3xl font-bold text-gray-800">{{ current?.title }}</h1>
                <div class="flex gap-4">
                    <ExternalLink type="Github" :link="githubUrl"/>
                    <ExternalLink type="Demo" :link="demoUrl"/>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <!-- Game Preview Image -->
            <div class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <img src="/images/LastDayInKhumuang/LDKMenu.png" alt="Last Day in Khumuang"
                    class="w-full md:w-1/3 lg:w-1/4 h-auto object-cover" />
                <div class="p-6 flex flex-col justify-center">
                    <p class="text-gray-700 leading-relaxed">{{ current?.description }}</p>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <img v-for="i in screenshots" :key="i" :src="`/images/LastDayInKhumuang/${i}`"
                    class="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-[1.02]" />
            </div>           
        </div>
    </section>
</template>

<script setup lang="ts">
import { GameProjects } from '~/data/projects'
const route = useRoute();
const current = GameProjects.find(project => project.to === route.path);

const githubUrl = 'https://gitlab.com/OokaitodoO/lastdayinkhumueng'
const itchUrl = 'https://your-itch-io-link-here'
const demoUrl = "https://drive.google.com/file/d/1LT2sxvnLNq4I-stsaH9xORsvrtQnHjVT/view?usp=drive_link"

const screenshots = ['LDK01.png', 'LDK02.png', 'LDK03.png', 'LDK04.png', 'LDK05.png']

useHead({
    title: 'Last Day in Khumuang - Game Project',
    meta: [
        {
            name: 'description',
            content: 'An adventure game set in a fictional location, featuring narrative-driven gameplay and exploration.'
        }
    ]
})
</script>

<style scoped></style>