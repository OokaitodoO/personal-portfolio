<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <h1 class="text-2xl font-bold text-gray-800">ABOUT</h1>
            <div class="flex py-6">
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
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Construct3</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Figma</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">MagicOnion</span>
                        </div>
                        <div class=" bg-white size-fit py-2 px-4 rounded-2xl border">
                            <span class="">Laravel</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col pl-6">
                    <p>I'm a Junior Game/Web Developer passionate about creating engaging experiences. I focus on
                        building
                        constructive games and modern web applications, constantly learning and improving my craft.</p>
                    <p class=" pt-6">Currently learning Nuxt.js and exploring indie game development as a solo
                        developer.
                    </p>
                    <div class="flex py-6 justify-between items-center">
                        <div class="flex flex-col">
                            <h2 class=" text-6xl font-semibold">1+</h2>
                            <p class=" font-light">Years experience</p>
                        </div>
                        <div class="flex flex-col">
                            <h2 class=" text-6xl font-semibold">6</h2>
                            <p class=" font-light">Game projects</p>
                        </div>
                        <div class="flex flex-col">
                            <h2 class=" text-6xl font-semibold">2</h2>
                            <p class=" font-light">Web projects</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Education Section -->
            <div class="flex flex-col py-12 border-t border-gray-200">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">EDUCATION</h1>
                <div class="flex flex-col gap-6">
                    <div class="flex gap-4 items-center">
                        <img src="/images/CMULogo.png" alt="Chiang Mai University Logo"
                            class="w-24 h-auto object-contain flex-shrink-0">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-xl font-semibold text-gray-700">Bachelor of Science (Digital games)</h2>
                            <p class="text-gray-600 font-light">Chiang Mai University, Thailand</p>
                            <p class="text-gray-500">2022 - 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience Section -->
            <div class="flex flex-col py-12 border-t border-gray-200">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">EXPERIENCE</h1>
                <div class="flex gap-6 flex-col">
                    <div class="flex gap-4 items-center">
                        <img src="/images/VarisoftLogo.png" alt="Varisoft Logo" class="w-24 h-auto object-contain shrink">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg font-medium text-gray-700">Intern Unity Developer</h2>
                            <p class="text-gray-600 font-light">Varisoft • June 2025 - March 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Certificates Section -->
            <div class="flex flex-col py-12 border-t border-gray-200">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">CERTIFICATES</h1>
                <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
                    <div
                        class="flex flex-col gap-1 bg-white border border-gray-200 p-4 rounded-2xl items-center justify-center hover:shadow-md transition-all">
                        <h2 class="text-lg font-medium text-gray-700">Unity Certified User</h2>
                        <p class="text-gray-500 font-light">Unity Technologies • 2023</p>
                    </div>
                    <div
                        class="flex flex-col gap-1 bg-white border border-gray-200 p-4 rounded-2xl items-center justify-center hover:shadow-md transition-all">
                        <h2 class="text-lg font-medium text-gray-700">Google UX Design Certificate</h2>
                        <p class="text-gray-500 font-light">Coursera • 2022</p>
                    </div>
                    <div
                        class="flex flex-col gap-1 bg-white border border-gray-200 p-4 rounded-2xl items-center justify-center hover:shadow-md transition-all">
                        <h2 class="text-lg font-medium text-gray-700">Git and GitHub Essentials</h2>
                        <p class="text-gray-500 font-light">Coursera • 2022</p>
                    </div>
                </div> -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
                    <a :href="`/documents/certificates/typescript/certificate-en-1.pdf`" target="_blank" rel="noopener noreferrer"
                        class="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-2xl items-center justify-center hover:shadow-md transition-all cursor-pointer">
                        <img src="\documents\certificates\typescript\typecript-preview.jpg" alt="Typescript certificates" class="hover:scale-105 transition-transform duration-300">                        
                        <h2 class="text-lg font-medium text-gray-700">TypeScript Certificated</h2>
                        <p class="text-gray-500 font-light">TS and Framework • June 10, 2026</p>
                    </a>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
useHead({
    title: "Portfolio - About",
    meta: [
        {
            name: "About page",
            content: "My experience, education and certificates"
        }
    ]
});
</script>

<style scoped></style>