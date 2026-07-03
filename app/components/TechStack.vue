<template>
    <div class="flex flex-wrap gap-1.5" :class="wrapperClass">
        <span v-for="tech in technologies" :key="tech"
            :class="getTechClasses(tech)"
            class="px-2 py-0.5 rounded text-xs">
            {{ tech }}
        </span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    technologies: string[]
    wrapperClass?: string
}

withDefaults(defineProps<Props>(), {
    wrapperClass: ''
})

const techStyles: Record<string, string> = {
    // Game Engines
    'Unity': 'bg-zinc-200 text-zinc-900',
    'Godot': 'bg-violet-50 text-violet-400',
    'Construct3': 'bg-slate-50 text-slate-400',
    'MonoGame': 'bg-orange-50 text-orange-500',    

    // Programming Languages
    'C#': 'bg-purple-50 text-purple-400',
    'GDScript': 'bg-rose-50 text-rose-400',
    'TypeScript': 'bg-amber-50 text-amber-400',
    'JavaScript': 'bg-yellow-500 text-yellow-300',
    'Dart': 'bg-pink-50 text-pink-400',
    'PHP': 'bg-purple-50 text-purple-600',

    // Web Technologies
    'Nuxt 3': 'bg-sky-50 text-sky-400',
    'Nuxt': 'bg-sky-50 text-sky-400',
    'Vue.js': 'bg-emerald-50 text-emerald-600',
    'HTML': 'bg-orange-50 text-orange-400',
    'CSS': 'bg-indigo-50 text-indigo-400',
    'Laravel': 'bg-red-50 text-red-400',
    'React': 'bg-purple-50 text-blue-400',

    // Platforms
    'WebGL': 'bg-teal-50 text-teal-400',
    'Windows': 'bg-blue-50 text-blue-600',
    'Android': 'bg-green-50 text-green-400',

    // Backend / Database
    'MySQL': 'bg-emerald-50 text-emerald-400',
    'MagicOnion': 'bg-pink-50 text-pink-500',

    // Tools & Others
    'Storybook': 'bg-lime-50 text-lime-400',
    'Markdown': 'bg-stone-50 text-stone-400',
    'Vite': 'bg-fuchsia-50 text-fuchsia-400',
    'Tailwind': 'bg-sky-50 text-sky-400',
    'Git': 'bg-orange-50 text-orange-400',
    'Docker': 'bg-cyan-50 text-cyan-400',
    'Firebase': 'bg-orange-50 text-orange-400'
}

const getTechClasses = (tech: string) => {
    return techStyles[tech] || 'bg-gray-50 text-gray-400'
}
</script>

<style scoped></style>