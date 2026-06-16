<template>
    <section class="flex flex-col">
        <div class="flex relative">
            <div class="flex flex-col justify-start w-full md:w-1/2 py-10 z-10">
                <p class=" font-light">Junior Game / Web Developer</p>
                <h1 class=" text-3xl font-medium typewriter py-3">Play games constructively; extract benefits from
                    games.
                </h1>
                <p class=" text-balance">I developing game indie with solo dev. And interesting about web development,
                    so I
                    try my best for learn and develop myself every day. Now I'm learning Nuxt.</p>
                <div class=" flex items-center gap-10 py-3 flex-wrap">
                    <nuxt-link to="/works"
                        class=" font-bold py-2 px-4 rounded-2xl bg-white border cursor-pointer hover:bg-amber-100">View
                        mywork</nuxt-link>
                    <a href="/documents/ResumeENG.pdf" target="blank"
                        class=" font-bold py-2 px-4 rounded-2xl bg-white border cursor-pointer hover:bg-amber-100"
                        external>Download resume</a>
                </div>
            </div>
            <div class="absolute inset-0">
                <img src="/images/heroBG.png" alt="hero background" class="w-full h-full object-cover object-center md:object-right" />
                <div class="absolute inset-0 bg-linear-to-r from-gray-100 via-gray-100/80 to-transparent"></div>
            </div>
        </div>

        <!-- Preview project - Carousel showing 3 projects -->
        <div class="flex flex-col py-10">
            <div class="mb-8">
                <h1 class="text-2xl font-bold text-gray-800">SELECTED WORK</h1>
                <p class="text-gray-600 mt-2">Showcasing my recent projects and creations</p>
            </div>

            <!-- Carousel Container - Shows 3 projects at once -->
            <div class="relative w-full max-w-8xl mx-auto px-10">
                <div class="overflow-hidden">
                    <div ref="carouselTrack" class="flex transition-transform duration-500 ease-in-out">
                        <!-- Project Group 1 -->
                        <div class="w-full flex-shrink-0">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <!-- Project 1 -->
                                <div
                                    class="bg-white border border-gray-100 rounded-xl p-5 flex flex-col hover:border-gray-200 transition-all">
                                    <h3 class="text-lg font-medium text-gray-800 mb-2">Game Project Alpha</h3>
                                    <p class="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">An indie puzzle game
                                        focused on constructive gameplay mechanics.</p>
                                    <div class="flex flex-wrap gap-1.5 mb-3">
                                        <span class="px-2 py-0.5 bg-blue-50 text-blue-400 rounded text-xs">Unity</span>
                                        <span class="px-2 py-0.5 bg-purple-50 text-purple-400 rounded text-xs">C#</span>
                                    </div>
                                    <a href="#" class="text-gray-600 text-sm hover:text-gray-800 transition-colors">View
                                        Project →</a>
                                </div>

                                <!-- Project 2 -->
                                <div
                                    class="bg-white border border-gray-100 rounded-xl p-5 flex flex-col hover:border-gray-200 transition-all">
                                    <h3 class="text-lg font-medium text-gray-800 mb-2">Web Portfolio</h3>
                                    <p class="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">My personal
                                        portfolio built with Nuxt 3 and Tailwind CSS showcasing my work.</p>
                                    <div class="flex flex-wrap gap-1.5 mb-3">
                                        <span class="px-2 py-0.5 bg-sky-50 text-sky-400 rounded text-xs">Nuxt 3</span>
                                        <span class="px-2 py-0.5 bg-cyan-50 text-cyan-400 rounded text-xs">Vue.js</span>
                                    </div>
                                    <a href="#" class="text-gray-600 text-sm hover:text-gray-800 transition-colors">View
                                        Project →</a>
                                </div>

                                <!-- Project 3 -->
                                <div
                                    class="bg-white border border-gray-100 rounded-xl p-5 flex flex-col hover:border-gray-200 transition-all">
                                    <h3 class="text-lg font-medium text-gray-800 mb-2">Mobile Game</h3>
                                    <p class="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">A mobile-friendly
                                        arcade game with smooth controls and engaging gameplay.</p>
                                    <div class="flex flex-wrap gap-1.5 mb-3">
                                        <span
                                            class="px-2 py-0.5 bg-indigo-50 text-indigo-400 rounded text-xs">Flutter</span>
                                        <span class="px-2 py-0.5 bg-pink-50 text-pink-400 rounded text-xs">Dart</span>
                                    </div>
                                    <a href="#" class="text-gray-600 text-sm hover:text-gray-800 transition-colors">View
                                        Project →</a>
                                </div>
                            </div>
                        </div>

                        <!-- Project Group 2 -->
                        <div class="w-full flex-shrink-0">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <!-- Project 4 -->
                                <div
                                    class="bg-white border border-gray-100 rounded-xl p-5 flex flex-col hover:border-gray-200 transition-all">
                                    <h3 class="text-lg font-medium text-gray-800 mb-2">Pixel Adventure</h3>
                                    <p class="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">A retro-style pixel
                                        art platformer with modern game mechanics.</p>
                                    <div class="flex flex-wrap gap-1.5 mb-3">
                                        <span
                                            class="px-2 py-0.5 bg-violet-50 text-violet-400 rounded text-xs">Godot</span>
                                        <span
                                            class="px-2 py-0.5 bg-rose-50 text-rose-400 rounded text-xs">GDScript</span>
                                    </div>
                                    <a href="#" class="text-gray-600 text-sm hover:text-gray-800 transition-colors">View
                                        Project →</a>
                                </div>

                                <!-- Project 5 -->
                                <div
                                    class="bg-white border border-gray-100 rounded-xl p-5 flex flex-col hover:border-gray-200 transition-all">
                                    <h3 class="text-lg font-medium text-gray-800 mb-2">UI Component Library</h3>
                                    <p class="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">Reusable Vue
                                        components with TypeScript for rapid development.</p>
                                    <div class="flex flex-wrap gap-1.5 mb-3">
                                        <span
                                            class="px-2 py-0.5 bg-amber-50 text-amber-400 rounded text-xs">TypeScript</span>
                                        <span
                                            class="px-2 py-0.5 bg-lime-50 text-lime-400 rounded text-xs">Storybook</span>
                                    </div>
                                    <a href="#" class="text-gray-600 text-sm hover:text-gray-800 transition-colors">View
                                        Project →</a>
                                </div>

                                <!-- Project 6 -->
                                <div
                                    class="bg-white border border-gray-100 rounded-xl p-5 flex flex-col hover:border-gray-200 transition-all">
                                    <h3 class="text-lg font-medium text-gray-800 mb-2">Dev Blog</h3>
                                    <p class="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">Technical blog
                                        sharing game development insights and tutorials.</p>
                                    <div class="flex flex-wrap gap-1.5 mb-3">
                                        <span
                                            class="px-2 py-0.5 bg-rose-50 text-rose-400 rounded text-xs">Markdown</span>
                                        <span
                                            class="px-2 py-0.5 bg-fuchsia-50 text-fuchsia-400 rounded text-xs">VitePress</span>
                                    </div>
                                    <a href="#" class="text-gray-600 text-sm hover:text-gray-800 transition-colors">View
                                        Project →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation Arrows -->
                <button @click="prevSlide"
                    class="absolute left-0 top-1/2 -translate-y-8 bg-white/90 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all cursor-pointer z-10">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button @click="nextSlide"
                    class="absolute right-0 top-1/2 -translate-y-8 bg-white/90 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all cursor-pointer z-10">
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Dots Navigation -->
                <div class="flex justify-center mt-6 gap-2">
                    <button v-for="i in 2" :key="i" @click="goToSlide(i - 1)" :class="[
                        'w-2 h-2 rounded-full transition-all cursor-pointer',
                        currentSlide === i - 1 ? 'bg-gray-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
                    ]"></button>
                </div>
            </div>
        </div>

        <div class="flex flex-col py-10">
            <h1 class="text-2xl font-bold text-gray-800">ABOUT</h1>
            <div class="flex pt-6">
                <div class="flex flex-col gap-3 border-e pr-6 w-5xl">
                    <div class=" rounded-4xl bg-purple-100 p-4 size-fit">
                        <h1 class=" text-2xl text-purple-500">KM</h1>
                    </div>
                    <div>
                        <p>Kanjanawat Muangkam</p>
                        <p class=" font-light">Based in Bangkok</p>
                    </div>
                    <div class="flex gap-3 flex-wrap">
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Unity</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">C#</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Vue.js</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Nuxt</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Tailwind</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Git</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col pl-6">
                    <p>I'm a Junior Game/Web Developer passionate about creating engaging experiences. I focus on
                        building constructive games and modern web applications, constantly learning and improving my
                        craft.</p>
                    <p class=" pt-6">Currently learning Nuxt.js and exploring indie game development as a solo
                        developer.</p>
                    <div class="flex py-6 justify-between items-center">
                        <div class="flex flex-col">
                            <h2 class=" text-6xl font-semibold">1+</h2>
                            <p class=" font-light">Years experience</p>
                        </div>
                        <div class="flex flex-col">
                            <h2 class=" text-6xl font-semibold">3</h2>
                            <p class=" font-light">Game projects</p>
                        </div>
                        <div class="flex flex-col">
                            <h2 class=" text-6xl font-semibold">2</h2>
                            <p class=" font-light">Web projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

useHead({
    title: "Portfolio - Home",
    meta: [
        {
            name: "Home page",
            content: "Overall my portfolio"
        }
    ]
});

const currentSlide = ref(0)
const carouselTrack = ref(null)
const totalSlides = 2 // Number of slide groups

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides
    updateCarousel()
}

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? totalSlides - 1 : currentSlide.value - 1
    updateCarousel()
}

const goToSlide = (index) => {
    currentSlide.value = index
    updateCarousel()
}

const updateCarousel = () => {
    if (carouselTrack.value) {
        carouselTrack.value.style.transform = `translateX(-${currentSlide.value * 100}%)`
    }
}

// Auto-slide functionality
let autoSlideInterval = null

onMounted(() => {
    autoSlideInterval = setInterval(nextSlide, 10000)
})

onBeforeUnmount(() => {
    if (autoSlideInterval) clearInterval(autoSlideInterval)
})
</script>

<style lang="scss" scoped></style>