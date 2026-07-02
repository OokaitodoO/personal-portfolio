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
                <ProjectCard v-for="project in GameProjects" :key="project.title" :title="project.title"
                    :description="project.description" :image="project.image" :tech-stack="project.techStack"
                    :to="project.to" />
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <h1 class=" text-2xl text-center p-3 border-b border-gray-200 font-bold text-gray-800">Web development</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                <ProjectCard v-for="project in WebProjects" :key="project.title" :title="project.title"
                    :description="project.description" :image="project.image" :tech-stack="project.techStack"
                    :to="project.to" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { GameProjects, WebProjects } from "~/data/projects"

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