<template>
    <div class="min-h-screen bg-[#f4f7f6] text-[#4a5568] flex items-center justify-center p-6 sm:p-12">
        <div
            class="max-w-3xl w-full bg-white rounded-3xl shadow-sm border border-[#e9ecef] p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative overflow-hidden">

            <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#e8f5e9] rounded-full blur-3xl opacity-70"></div>
            <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-[#e3f2fd] rounded-full blur-3xl opacity-70"></div>

            <!-- 👤 Left Column: Introduction & Context -->
            <div class="md:col-span-6 flex flex-col justify-between relative z-10">
                <div>
                    <span
                        class="text-xs font-semibold tracking-wider text-[#81c784] uppercase bg-[#e8f5e9] px-3 py-1 rounded-full">Let's
                        Connect</span>
                    <h1 class="text-4xl font-bold text-[#2d3748] mt-4 mb-4 tracking-tight">Let's build something
                        together!</h1>
                    <p class="text-sm text-[#718096] leading-relaxed">
                        I'm always open to discussing new opportunities, full-stack projects, or developer roles. Feel
                        free to reach out through any of these platforms!
                    </p>
                </div>

                <!-- Quick Location Metadata -->
                <div class="space-y-4 my-4">
                    <div class="flex items-center space-x-3 text-sm">
                        <span class="text-lg bg-[#f0f4f2] p-1.5 rounded-lg">👤</span>
                        <div>
                            <p class="text-xs text-[#a0aec0]">Name</p>
                            <p class="font-semibold text-[#2d3748]">Kanjanawat Muangkam</p>
                            <p class="font-semibold text-[#2d3748]">กาญจนวัฒน์ เหมืองคำ</p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-3 text-sm">
                        <span class="text-lg bg-[#f0f4f2] p-1.5 rounded-lg">📞</span>
                        <div>
                            <p class="text-xs text-[#a0aec0]">Phone</p>
                            <a href="tel:+66123456789" class="font-medium hover:text-[#81c784] transition-colors">+66 61 431 5900</a>
                        </div>
                    </div>

                    <div class="flex items-center space-x-3 text-sm">
                        <span class="text-lg bg-[#f0f4f2] p-1.5 rounded-lg">📍</span>
                        <div>
                            <p class="text-xs text-[#a0aec0]">Based in</p>
                            <p class="font-medium text-[#2d3748]">Bangkok, Thailand</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 🔗 Right Column: Direct Professional Links (Formless) -->
            <div class="md:col-span-6 flex flex-col justify-center space-y-4 relative z-10">

                <!-- Action 1: Email (Mailto Link) -->
                <nuxt-link to="mailto:m.kanjanawat@gmail.com"
                    class="flex items-center justify-between p-4 ] hover:bg-[#e0f2fe] border border-[#bae6fd] rounded-2xl group transition-all duration-200 shadow-sm">
                    <div class="flex items-center space-x-4">
                        <span class="text-2xl bg-white p-2.5 rounded-xl shadow-sm">✉️</span>
                        <div class="text-left">
                            <p class="text-xs text-[#7dd3fc] font-semibold uppercase tracking-wider">Direct Mail</p>
                            <p class="text-sm font-medium text-[#0369a1]">m.kanjanawat@gmail.com</p>
                        </div>
                    </div>
                    <span class="text-[#0284c7] transform group-hover:translate-x-1 transition-transform">➔</span>
                </nuxt-link>

                <!-- Action 2: GitHub -->
                <nuxt-link href="https://github.com/OokaitodoO" target="_blank" rel="noopener"
                    class="flex items-center justify-between p-4 hover:bg-[#dcfce7] border border-[#bbf7d0] rounded-2xl group transition-all duration-200 shadow-sm">
                    <div class="flex items-center space-x-4">
                        <span class="text-2xl bg-white p-2.5 rounded-xl shadow-sm">💻</span>
                        <div class="text-left">
                            <p class="text-xs text-[#86efac] font-semibold uppercase tracking-wider">Code Repository
                            </p>
                            <p class="text-sm font-medium text-[#15803d]">GitHub Profile</p>
                        </div>
                    </div>
                    <span class="text-[#16a34a] transform group-hover:translate-x-1 transition-transform">➔</span>
                </nuxt-link>

                <!-- Action 3: LinkedIn / Professional Network -->
                <nuxt-link href="https://www.linkedin.com/in/kanjanawat-muangkam-81b859332/" target="_blank"
                    rel="noopener"
                    class="flex items-center justify-between p-4 hover:bg-[#ede9fe] border border-[#ddd6fe] rounded-2xl group transition-all duration-200 shadow-sm">
                    <div class="flex items-center space-x-4">
                        <span class="text-2xl bg-white p-2.5 rounded-xl shadow-sm">💼</span>
                        <div class="text-left">
                            <p class="text-xs text-[#c084fc] font-semibold uppercase tracking-wider">Professional
                                Network</p>
                            <p class="text-sm font-medium text-[#6b21a8]">LinkedIn Profile</p>
                        </div>
                    </div>
                    <span class="text-[#9333ea] transform group-hover:translate-x-1 transition-transform">➔</span>
                </nuxt-link>

                <!-- Action 4: Utility Copy Button -->
                <button @click="copyEmailToClipboard"
                    class="w-full py-3 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] text-[#64748b] font-medium text-xs rounded-xl transition-colors tracking-wide uppercase">
                    {{ copied ? '📋 Copied to Clipboard!' : '🔗 Copy Email Address' }}
                </button>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Portfolio - Contact",
    meta: [
        {
            name: "Contact page",
        }
    ]
});

import { ref } from 'vue'

const copied = ref(false)
const emailAddress = 'm.kanjanawat@gmail.com'

const copyEmailToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(emailAddress)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy text: ', err)
    }
}
</script>

<style scoped></style>