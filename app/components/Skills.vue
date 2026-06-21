<template>
    <div class=" bg-white size-fit py-2 px-4 rounded-2xl border" v-for="value in skills" :key="value">
        <span>{{ value }}</span>
    </div>
</template>

<script setup lang="ts">
const skills = ["Unity", "C#", "Vue.js", "Nuxt", "Tailwind", "Git", "Construct3", "Figma", "MagicOnion", "Laravel"]
</script>

<style scoped></style>