import { sevilleUniversity, hochschuleReutlingen, esb } from "../assets/images";
import {
    css,
    nginx,
    bank,
    shop,
    git,
    githubActions,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    react,
    java,
    python,
    summiz,
    kubernetes,
    docker,
    keycloak,
    springSecurity,
    iam
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
        iconUrl: bank,
        theme: 'btn-back-red',
        name: 'UniWallet',
        description: 'Banking App( cross-platform ) created with React Native + Expo Router, connected to a Firebase DB for a financial centralized management.',
        link: 'https://github.com/OscarGomezGonzalezz/banking-app',
    },
    {
        iconUrl: iam,
        theme: 'btn-back-green',
        name: 'IAM Integration with Spring',
        description: 'Backend created with Spring, and linked with Keycloak as the OAuth2 Resource Server (access token creation and validation for RBAC).',
        link: 'https://github.com/OscarGomezGonzalezz/Keycloak-Backend',
    },
    {
        iconUrl: kubernetes,
        theme: 'btn-back-blue',
        name: 'Cloud Native TODO List - Kubernetes Version',
        description: 'MERN application orchestrated with kubernetes & Helm (CI pipeline enabled), using an Nginx ingress controller as a reverse proxy for routing and enabling TLS.',
        link: 'https://github.com/OscarGomezGonzalezz/MERN-k8s',
    },
    {
        iconUrl: docker,
        theme: 'btn-back-pink',
        name: 'Cloud Native TODO List - Docker Compose Version',
        description: 'MERN application deployed with docker-compose, and enrouted with a reverse proxy (Nginx).',
        link: 'https://github.com/OscarGomezGonzalezz/MERN-compose',
    },
    {
        iconUrl: shop,
        theme: 'btn-back-black',
        name: 'Amazon WebShop Clone',
        description: 'Amazon-based WebShop, launched with XAMPP (Apache and MySQL).',
        link: 'https://github.com/OscarGomezGonzalezz/Amazon-Web-Project',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Youtube & Vimeo Data Miner',
        description: 'Data Miner project from Youtube and Vimeo.',
        link: 'https://github.com/OscarGomezGonzalezz/VideoMinerAplication',
    }
];