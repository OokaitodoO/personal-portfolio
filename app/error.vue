<template>
    <Navbar />
    <div class="flex min-h-screen justify-center items-center bg-gray-100">
        <div class="flex flex-col text-center gap-3">
            <div class="animate-bounce">
                <span class=" text-6xl">😭</span>
                <h1 class="text-2xl font-bold">404</h1>
                <p class=" font-light">Not found the page</p>
            </div>
            <nuxt-link to="/" class=" hover:underline">Back to Home page 🏠</nuxt-link>
        </div>
    </div>
    <Footer />
</template>

<script setup lang="ts">
const props = defineProps({
    error: Object
})

const handleClearError = () => {
    clearError({ redirect: '/' })
}
</script>

<style scoped></style>