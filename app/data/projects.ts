import type { Project } from "~/types/project";

export const GameProjects: Project[] = [
    {
        title: 'Education Game',
        description: 'An interactive educational game that digitizes Thai traditional performing arts across 4 regions, featuring cloud-synced player data and a web analytics dashboard.',
        image: '/Education_izacrx.png',
        techStack: ['Unity', 'C#', 'WebGL', 'Firebase', 'React'],
        to: '/works/education'
    },
    {
        title: 'Blackest Night',
        description: 'A dark-themed 2.5D indie game project, endless game loop. You need to survive as long as you can in a mystery forest.',
        image: '/BlackestNight_lqqewu.png',
        techStack: ['Unity', 'C#', 'Android'],
        to: '/works/blackest-night'
    },
    {
        title: "Don't Press S",
        description: 'Live action interactive game. Made on Global Game Jam 2024 at CAMT, Chiang Mai University. Has 48 hours limited time. 1st runner-up rewarded.',
        image: '/DontPressS_u4ksey.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/dont-press-s'
    },
    {
        title: 'Last Day in Khumuang',
        description: 'An adventure game set in a fictional location, featuring narrative-driven gameplay and exploration. Players uncover the story through environmental storytelling in this immersive experience.',
        image: '/LastDayInKhumueng_wngbhr.png',
        techStack: ['MonoGame', 'C#', 'Windows'],
        to: '/works/last-day-in-khumuang'
    },
    {
        title: 'Unusual Poker',
        description: 'A online poker taxas holdem android game with magic skill for cheating. Made with Unity and MagicOnion RPC C#. Developed while interning at Varisoft.',
        image: '/Poker_jtpc03.png',
        techStack: ['Unity', 'C#', 'Android', 'MagicOnion'],
        to: '/works/poker'
    },
    {
        title: 'Redveil',
        description: 'A 3D mysterious adventure game with a distinctive red aesthetic and weapon mechanic',
        image: '/Redveil_t5z7uy.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/redveil'
    },
    {
        title: 'ShootZ',
        description: 'A fast-paced shooting game with action-packed gameplay and dynamic combat mechanics.',
        image: '/ShootZ_t3aged.png',
        techStack: ['Construct3', 'WebGL'],
        to: '/works/shootz'
    },
    {
        title: 'Basket What',
        description: 'A simple basketball shooting game that blends physics with a touch of fantasy; players must try to shoot the ball into the hoop to achieve the highest score.',
        image: '/BasketWhat_dcnq44.png',
        techStack: ['Unity', 'C#', 'Windows'],
        to: '/works/basket-what'
    },
    {
        title: 'Run Run BlueBoy',
        description: 'This is a simple 2D runing platformer. With a little blue boy. Keep runing to goal and collect the coin.',
        image: '/dude_monster_icon_eopumi.png',
        techStack: ['Construct3', 'WebGL'],
        to: '/works/run-run-blue-boy'
    },
]

export const WebProjects: Project[] = [
    {
        title: 'Portfolio',
        description: 'Personal website portfolio for show my works with game and web development experience.',
        image: '/heroBG_sovijt.png',
        techStack: ['HTML', 'Tailwind', 'Nuxt', 'Vue.js', 'TypeScript', 'Cloudinary'],
    },
    {
        title: 'CAMT Portal',
        description: "Web portal for CAMT, Chiang Mai University. Manage staff task with web portal style. Fast accessibility, easy use.",
        image: '/CamtLogo_qpgb8k.png',
        techStack: ['Laravel', 'MySQL', 'Vite', 'Docker', 'PHP'],
        to: '/works/camt-portal'
    }
]