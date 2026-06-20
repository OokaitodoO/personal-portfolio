<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <NuxtLink href="/works" class="text-gray-500 hover:text-orange-400 mb-4">← Back to Works</NuxtLink>
            <h1 class="text-3xl font-bold text-gray-800">Redveil</h1>
        </div>

        <div class="flex flex-col gap-8 pb-10">
            <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <img src="/images/Redveil/Redveil.png" alt="Redveil"
                    class="w-full h-auto object-cover" />
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img v-for="i in screenshots" :key="i" :src="`/images/Redveil/${i}`"
                    class="w-full h-32 object-cover rounded-lg border border-gray-200" />
            </div>

            <div class="flex gap-4">
                <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
                    class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-3.004.651-3.709-1.502-3.709-1.502-.453-1.155-1.108-1.458-1.108-1.458-.904-.625.07-.613.07-.613 1.003.074 1.526 1.03 1.526 1.03.89 1.526 2.334 1.093 2.796.801.925.063.75-.226 2.707-.801.225-.62.89-.92.59-.765 1.526-2.661 1.03-.89 1.642-.015 2.707.801 2.51-.697 2.709-.823 3.013-.214 1.74-.217 2.947.904.89-.225 1.59-.92 2.807-.823 2.807-.823-.89.92-.59.765.225.62.89-.92-.59-.765-1.526-.075-.89-.226-.62-.89-.92.59-.765 1.526 1.03 1.526 1.03.89 1.03.074 1.526-.801.226-.62.89.92-.59.765-1.526.074-2.707.801-.225-.62-.89-.92-.59-.765.59-1.526-1.093 2.947-.801 2.51.697 2.71.823 3.013.214 1.74.217-2.947-.904-.89.225-1.59.92-2.807.823-2.807.823-.89.92-.59.765.225-.62-.89-.92-.59-.765-1.526-1.03-2.947-.801.225.62.89-.92.59-.765.59-1.526 1.093-2.947.801-.225-.62-.89-.92-.59-.765"
                            clip-rule="evenodd" />
                    </svg>
                    GitHub
                </a>
                <a :href="itchUrl" target="_blank" rel="noopener noreferrer"
                    class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 2v20l3.5-2.5V2H2zm17 0v20l3.5 2V2H19zM4 4v16l2.5 2V4H4zm12 0v16l2.5 2V4h-2.5z" />
                    </svg>
                    itch.io
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const screenshots = ['Redveil01.png', 'Redveil02.png', 'Redveil03.png']

const githubUrl = 'https://github.com/OokaitodoO/redveil'
const itchUrl = 'https://your-itch-io-link-here'

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