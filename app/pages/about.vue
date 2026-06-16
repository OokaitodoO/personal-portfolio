<template>
    <section class="flex flex-col">
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

<script setup lang="ts">
useHead({
    title: "Portfolio - About",
    meta: [
        {
            name: "About page",
            content: "My education and about me"
        }
    ]
});
</script>

<style scoped></style>