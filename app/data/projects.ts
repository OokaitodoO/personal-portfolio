import type { Project } from "~/types/project";

export const GameProjects: Project[] = [
    {
        title: 'Blackest Night',
        description: 'A dark-themed 2.5D indie game project, endless game loop. You need to survive as long as you can in a mystery forest.',
        image: '/images/BlackestNight/BlackestNight.png',
        techStack: ['Unity', 'C#', 'Android'],
        to: '/works/blackest-night'
    },
    {
        title: "Don't Press S",
        description: 'Live action interactive game. Made on Global Game Jam 2024 at CAMT, Chiang Mai University. Has 48 hours limited time. 1st runner-up rewarded.',
        image: '/images/DontPressS/DontPressS.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/dont-press-s'
    },
    {
        title: 'Last Day in Khumuang',
        description: 'An adventure game set in a fictional location, featuring narrative-driven gameplay and exploration. Players uncover the story through environmental storytelling in this immersive experience.',
        image: '/images/LastDayInKhumuang/LastDayInKhumueng.png',
        techStack: ['MonoGame', 'C#', 'Windows'],
        to: '/works/last-day-in-khumuang'
    },
    {
        title: 'Unusual Poker',
        description: 'A online poker taxas holdem android game with magic skill for cheating. Made with Unity and MagicOnion RPC C#. Developed while interning at Varisoft.',
        image: '/images/Poker/Poker.png',
        techStack: ['Unity', 'C#', 'Android', 'MagicOnion'],
        to: '/works/poker'
    },
    {
        title: 'Redveil',
        description: 'A 3D mysterious adventure game with a distinctive red aesthetic and weapon mechanic',
        image: '/images/Redveil/Redveil.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/redveil'
    },
    {
        title: 'ShootZ',
        description: 'A fast-paced shooting game with action-packed gameplay and dynamic combat mechanics.',
        image: '/images/ShootZ/ShootZ.png',
        techStack: ['Construct3', 'WebGL'],
        to: '/works/shootz'
    }
]

export const WebProjects: Project[] = [
    {
        title: 'Portfolio',
        description: 'Personal website portfolio for show my works with game and web development experience.',
        image: '/images/heroBG.png',
        techStack: ['HTML', 'Tailwind', 'Nuxt', 'Vue.js'],
    },
    {
        title: 'CAMT Portal',
        description: "Web portal for CAMT, Chiang Mai University. Manage staff task with web portal style. Fast accessibility, easy use.",
        image: '/images/CamtLogo.png',
        techStack: ['Laravel', 'MySQL', 'Vite', 'Docker', 'PHP'],
        to: '/works/camt-portal'
    }
]