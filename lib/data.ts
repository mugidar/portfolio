import laragigs from "/public/laragigs.png";
import carshop from "/public/carshop.png";
import restaurant from "/public/restaurant.png";
import portfolio from "/public/portfolio.png";
import millionaire from "/public/millionaire.png";
import aeScript from "/public/ae_script.png";
import countLinks from "/public/count-links.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

interface projectsDataProps {
  id: string;
  url?: string;
  title: string;
  description: string;
  tags: string[];
  image: any;
  videoName?: string;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const uaLinks = [
  {
    name: "Вгору",
    hash: "#home",
  },
  {
    name: "Інфо",
    hash: "#about",
  },
  {
    name: "Проекти",
    hash: "#projects",
  },
  {
    name: "Скіли",
    hash: "#skills",
  },
  {
    name: "Досвід",
    hash: "#experience",
  },
  {
    name: "Контакти",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ВНЗ. Спеціальність Інженерія ПЗ. 3 курс",
    location: "Україна, Кривий Ріг",
    description: "Навчання програмуванню",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - до тепер",
  },
  {
    title: "Курси",
    location: "Дистанційно",
    description:
      "Проходив різноманітні курси з Front-end розробки і не тільки.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Фронтенд розробник",
    location: "Україна, Кривий Ріг",
    description:
      "Після 6 місяців навчання, я отримав роботу в компанії з розробки CRM системи.",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
  {
    title: "Фулл-стек розробник. Стажування",
    location: "Україна, Кривий Ріг",
    description:
      "Компанія, пов'язана з автоматизуванням та оптимізацією бізнесу різних галузей",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
] as const;

export const projectsData = [
  {
    id: "millionaire-game",
    url: "https://millionaire-game-sigma.vercel.app",
    title: "Millionaire Game",
    description: `Гра, копія легендарного шоу "Як стати міліонером". `,
    tags: ["JavaScript", "React", "SASS"],
    image: millionaire,
    videoName: "millionaire.webm",
  },
  {
    id: "restaurant",
    title: "Restaurant site",
    description: `Сайт закладу харчування, створений для можливості створення замовлень зі сторони клієнту та управління замовленнями зі сторони менеджеру`,
    tags: ["JavaScript", "React", "Next.js", "Tailwind", "Prisma", "Axios", "PostgreSQL"],
    image: restaurant,
    videoName: "restaurant.mp4",
  },
  {
    id: "car-shop",
    title: "Car Shop",
    description: `Курсова робота: розробка інтернет-магазину з продажу автівок`,
    tags: ["PHP", "JavaScript", "jQuery"],
    image: carshop,
    videoName: "carshop.webm",
  },
  {
    id: "count-links-app",
    url: "https://count-links-e2hfkxbug-mugidar.vercel.app",
    title: "Count Links App",
    description: `Я займайвся копірайтингом. Мені потрібно було постійно контролювати, щоб не було взято занадто багато матеріалів з одного відео. Вручну це було б не просто рахувати кількість однакових посилань, тому я вирішив створити додаток, який з декількох десятків посилань з таймкодами та тисяч символів тексту рахує кількість однакових посилань `,
    tags: ["React", "Tailwind"],
    image: countLinks,
  },
  {
    id: "ae-script",
    title: "Videoediting Script",
    description: `Коли я працював відеомонтажером, була стадія створення відео, де потрібно розставляти переходи, а їх було близько 50-60. Робити це вручну - монотонна робота, тому завдяки Node.js я створив скрипт, який автоматизує цей процес.`,
    tags: ["Javascript", "Node.js"],
    image: aeScript,
    videoName: "Видео.webm",
  },
  {
    id: "3d-portfolio",
    url: "https://threejs-portfolio-hg3zc04b3-mugidar.vercel.app",
    title: "Portfolio With 3D elements",
    description: `Проект-портфоліо, створений при практикуванні з бібліотекою Three.js.`,
    tags: ["Javascript", "React", "Three.js"],
    image: portfolio,
  },
  {
    id: "laragigs",
    title: "Job searching platform",
    description: `Проект для пошуку та розміщення вакансій.`,
    tags: ["PHP", "Laravel", "MySQL"],
    image: laragigs,
    videoName: "laragigs.mp4",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
