<template>
    <nav class=" grid grid-cols-3 items-center py-2 px-6 bg-white">
        <!-- <h1 class=" text-2xl">Kanjanawat Muangkam</h1> -->
        <p class=" self-start"><nuxt-link to="/">Kanjanawat Muangkam</nuxt-link></p>
        <ul class=" flex justify-between items-center self-center">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/works">MyWorks</nuxt-link></li>
        </ul>
        <nuxt-link to="/contact" class=" text-right self-end">Get in touch</nuxt-link>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>