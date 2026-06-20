<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <div class="flex gap-4">
                <nuxt-link to="/works" class="text-3xl font-bold text-gray-800 text-center">←</nuxt-link>
                <h1 class="text-3xl font-bold text-gray-800">Blackest Night</h1>
                <div class="flex gap-4">
                    <nuxt-link :to="githubUrl" target="_blank" rel="noopener noreferrer"
                        class="font-bold py-2 px-4 rounded-2xl bg-white border cursor-pointer hover:bg-gray-800 hover:text-gray-100">GitHub</nuxt-link>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <!-- Game Preview Image -->
            <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <img src="/images/BlackestNight/BlackestNight.png" alt="Blackest Night"
                    class="w-full h-auto object-cover" />
            </div>

            <!-- Screenshots Gallery -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <img v-for="i in screenshots" :key="i" :src="`/images/BlackestNight/${i}`"
                    class="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-[1.02]" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const screenshots = ['BN01.png', 'BN02.png', 'BN03.png', 'BN04.png', 'BN05.png', 'BN06.png', 'BN07.png', 'BN08.png', 'BNMenu.png']

const githubUrl = 'https://github.com/OokaitodoO/the-blackest-night'

useHead({
    title: 'Blackest Night - Game Project',
    meta: [
        {
            name: 'description',
            content: 'A dark-themed indie game project focused on atmospheric storytelling and immersive gameplay mechanics.'
        }
    ]
})
</script>

<style scoped></style>