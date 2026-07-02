<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <NuxtLink href="/works" class="text-gray-500 hover:text-orange-400 mb-4">← Back to Works</NuxtLink>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">{{ current?.title }}</h1>
                <div class="flex gap-4">
                    <!-- <ExternalLink type="Demo" :link="demoUrl" /> -->
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <!-- Game Preview Image -->                         
            <div class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <img src="/images/ShootZ/ShootZ.png" alt="ShootZ"
                    class="w-full md:w-1/3 lg:w-1/4 h-auto object-cover" />
                <div class="p-6 flex flex-col justify-center">
                    <p class="text-gray-700 leading-relaxed">{{ current?.description }}</p>
                </div>
            </div>

            <div class="flex items-center justify-center">
                <iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media"
                    src="https://games.construct.net/43955/latest" frameborder="0" allowfullscreen="true"
                    msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
                    allowpaymentrequest="false" referrerpolicy="unsafe-url"
                    sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups"
                    scrolling="no"></iframe>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img v-for="i in screenshots" :key="i" :src="`/images/ShootZ/${i}`"
                    class="w-full h-32 object-cover rounded-lg border border-gray-200" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { GameProjects } from '~/data/projects'
const route = useRoute();
const current = GameProjects.find(project => project.to === route.path);

const screenshots = ['SZ01.png', 'SZ02.png', 'SZ03.png']

const demoUrl = "";

useHead({
    title: 'ShootZ - Game Project',
    meta: [
        {
            name: 'description',
            content: 'A fast-paced shooting game with action-packed gameplay and dynamic combat mechanics.'
        }
    ]
})
</script>

<style scoped></style>