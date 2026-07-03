<template>
    <section class="flex flex-col">
        <div class="flex flex-col py-10">
            <h1 class="text-2xl font-bold text-gray-800">ABOUT</h1>
            <AboutSection />

            <!-- Education Section -->
            <div class="flex flex-col py-12 border-t border-gray-200">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">EDUCATION</h1>
                <div class="flex flex-col gap-6">
                    <div class="flex gap-4 items-center">
                        <NuxtImg provider="cloudinary" alt="Chiang Mai University Logo" src="CMULogo_fhxucz.png" class="w-24 h-auto object-contain shrink-0" preload/>
                        <div class="flex flex-col gap-1">
                            <h2 class="text-xl font-semibold text-gray-700">Bachelor of Science (Digital games)</h2>
                            <p class="text-gray-600 font-light">Chiang Mai University, Thailand</p>
                            <p class="text-gray-500">2022 - 2026</p>
                            <p class="text-gray-500">GPX : 3.49</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience Section -->
            <div class="flex flex-col py-12 border-t border-gray-200">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">EXPERIENCE</h1>
                <div class="flex gap-6 flex-col">
                    <div class="flex gap-4 items-center">
                        <NuxtImg provider="cloudinary" alt="Varisoft Logo" src="VarisoftLogo_lldvpn" class="w-24 h-auto object-contain shrink" preload/>
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
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
                    <a :href="`/documents/certificates/typescript/certificate-en-1.pdf`" target="_blank" rel="noopener noreferrer"
                        class="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-2xl items-center justify-center hover:shadow-md transition-all cursor-pointer">
                        <img src="\documents\certificates\typescript\typecript-preview.jpg" alt="Typescript certificates" class="hover:scale-105 transition-transform duration-300">                        
                        <h2 class="text-lg font-medium text-gray-700">TypeScript Certificated</h2>
                        <p class="text-gray-500 font-light">TS and Framework • June 10, 2026</p>
                    </a>
                    
                    <a :href="`/documents/certificates/laravel/certificate-en-38.pdf`" target="_blank" rel="noopener noreferrer"
                        class="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-2xl items-center justify-center hover:shadow-md transition-all cursor-pointer">
                        <img src="\documents\certificates\laravel\laravel-preview.png" alt="Typescript certificates" class="hover:scale-105 transition-transform duration-300">                        
                        <h2 class="text-lg font-medium text-gray-700">Lravel8+React Certificated</h2>
                        <p class="text-gray-500 font-light">Laravel8 and React JS • July 2, 2026</p>
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