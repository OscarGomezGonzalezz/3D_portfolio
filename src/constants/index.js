import { sevilleUniversity, hochschuleReutlingen, esb } from "../assets/images";
import {
    car,
    css,
    estate,
    nginx,
    git,
    githubActions,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    pricewise,
    react,
    snapgram,
    java,
    python,
    summiz,
    threads,
    kubernetes,
    docker,
    keycloak,
    springSecurity,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: docker,
        name: "Docker",
        type: "Cloud",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Cloud",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "Proxy",
    },
    {
        imageUrl: keycloak,
        name: "Keycloak",
        type: "IAM",
    },
    {
        imageUrl: springSecurity,
        name: "Spring-Security",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "ML",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: githubActions,
        name: "GitHub-Actions",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Research Associate ",
        company_name: "Hochschule Reutlingen",
        icon: hochschuleReutlingen,
        iconBg: "#accbe1",
        date: "May 2025 - August 2025",
        points: [
            "Integrate and automate features of an IAM software into the global structure of the FoPraNet-BW Project, \
             by the hand of Prof. Dr. rer. medic. Christian Thies and Dipl.-Ing. (FH) Sven Dörflinger."
        ],
    },
    {
        title: "Junior Consultant",
        company_name: "ESB Student Consulting e.V",
        icon: esb,
        iconBg: "white",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Conduct a market analysis of existing both generative and specialized AI solutions in the sustainability field providing potential use cases relevant for a $90B annual revenue client .",
        ],
    },
];

export const education = [
    {
        title: "Software Engineering",
        company_name: "Universidad de Sevilla",
        icon: sevilleUniversity,
        iconBg: "white",
        date: "2022 - 2026",
        points: [
            "Grade: 7.75/10 (Upper Second Class Honours 2:1)",
            "Being part of the sports federation",
        ],
    },
    {
        title: "Exchange Year",
        company_name: "Hochschule Reutlingen",
        icon: hochschuleReutlingen,
        iconBg: "#fee1dcff",
        date: "2024 - 2025",
        points: [
            "Grade: 1.47/5 (First-class honours 1st)",
            "German Intensive Language lessons"
        ],
    },
];
export const languages = [
    {
        name: 'Spanish',
        level: 'Native',
        icon: "🇪🇸",
    },
    {
        name: 'English',
        level: 'C1',
        icon: "🇬🇧",
    },
    {
        name: 'German',
        level: 'A2',
        icon: "🇩🇪",
    }
];
export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/oscargomezgonzalezz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/oscargomezgonzalez/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];