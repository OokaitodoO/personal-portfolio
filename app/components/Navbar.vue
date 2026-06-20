<template>
    <nav class="grid grid-cols-3 items-center py-2 px-6 bg-white">
        <p class=" self-start"><nuxt-link to="/">Kanjanawat Muangkam</nuxt-link></p>
        <ul class=" flex justify-between items-center self-center">
            <li><nuxt-link to="/" active-class="text-orange-400 underline" class=" hover:underline hover:text-orange-400">Home</nuxt-link></li>
            <li><nuxt-link to="/about" active-class="text-orange-400 underline" class=" hover:underline hover:text-orange-400">About</nuxt-link></li>
            <li><nuxt-link to="/works" active-class="text-orange-400 underline" class=" hover:underline hover:text-orange-400">MyWorks</nuxt-link></li>
        </ul>
        <!-- <nuxt-link to="/contact" active-class="text-orange-400 underline" class="ml-auto inline-block hover:underline hover:text-orange-400">Get in touch</nuxt-link> -->
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>