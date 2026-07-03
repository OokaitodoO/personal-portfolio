<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">        
        <div v-for="i in 8" :key="i"
            class="animate-pulse overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-2">            
            <div class="w-full aspect-video bg-slate-800 rounded-xl"></div>            
            <div class="p-4 space-y-3">
                <div class="h-5 bg-slate-800 rounded w-2/3"></div>
                <div class="h-4 bg-slate-800 rounded w-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>