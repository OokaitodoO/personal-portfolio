<template>
    <section class="flex flex-col">
        <!-- Header -->
        <div class="flex flex-col py-10">
            <h1 class="text-2xl font-bold text-gray-800">MY WORKS</h1>
            <p class="text-gray-600 mt-2">Showcasing all my projects and creations</p>
        </div>

        <!-- Project Cards Grid -->
        <div class="flex flex-col gap-6">
            <h1 class=" text-2xl text-center p-3 border-b border-gray-200 font-bold text-gray-800">Game development</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                <ProjectCard v-for="project in gameProjects" :key="project.title" :title="project.title"
                    :description="project.description" :image="project.image" :tech-stack="project.techStack"
                    :to="project.to" />
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <h1 class=" text-2xl text-center p-3 border-b border-gray-200 font-bold text-gray-800">Web development</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                <ProjectCard v-for="project in webProjects" :key="project.title" :title="project.title"
                    :description="project.description" :image="project.image" :tech-stack="project.techStack"
                    :to="project.to" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

interface Game {
    title: string
    description: string
    image: string
    techStack: string[]
    to?: string
}

interface Web {
    title: string
    description: string
    image: string
    techStack: string[]
    to?: string
}

const gameProjects: Game[] = [
    {
        title: 'Blackest Night',
        description: 'A dark-themed indie game project focused on atmospheric storytelling and immersive gameplay mechanics.',
        image: '/images/BlackestNight/BlackestNight.png',
        techStack: ['Unity', 'C#', 'Android'],
        to: '/works/blackest-night'
    },
    {
        title: "Don't Press S",
        description: 'A unique arcade-style game with a twist - players must navigate challenges while avoiding a specific key press.',
        image: '/images/DontPressS/DontPressS.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/dont-press-s'
    },
    {
        title: 'Last Day in Khumuang',
        description: 'An adventure game set in a fictional location, featuring narrative-driven gameplay and exploration.',
        image: '/images/LastDayInKhumuang/LastDayInKhumueng.png',
        techStack: ['MonoGame', 'C#', 'Windows'],
        to: '/works/last-day-in-khumuang'
    },
    {
        title: 'Poker',
        description: 'A digital poker card game implementation with classic gameplay mechanics and smooth UI.',
        image: '/images/Poker/Poker.png',
        techStack: ['Unity', 'C#', 'Android', 'MagicOnion'],
        to: '/works/poker'
    },
    {
        title: 'Redveil',
        description: 'A mysterious adventure game with a distinctive red aesthetic and engaging storyline.',
        image: '/images/Redveil/Redveil.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/redveil'
    },
    {
        title: 'ShootZ',
        description: 'A fast-paced shooting game with action-packed gameplay and dynamic combat mechanics.',
        image: '/images/ShootZ/ShootZ.png',
        techStack: ['Construct3', 'WebGL'],
        to: '/works/shootz'
    }
]

const webProjects: Web[] = [
    {
        title: 'Portfolio',
        description: 'Personal website portfolio for show my works with game and web development experience.',
        image: '/images/heroBG.png',
        techStack: ['HTML', 'Tailwind', 'Nuxt', 'Vue.js'],        
    },
    {
        title: 'CAMT Portal',
        description: 'Personal website portfolio for show my works with game and web development experience.',
        image: '/images/CamtLogo.png',
        techStack: ['Laravel', 'MySQL', 'Vite', 'Docker', 'PHP'],
        to: '/works/camt-portal'
    }
]


useHead({
    title: "Portfolio - Works",
    meta: [
        {
            name: "Works page",
            content: "Show all my project"
        }
    ]
});
</script>

<style scoped></style>