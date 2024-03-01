import wordanalyticsImg from "/public/wordanalytics.png";
import aeScript from "/public/ae_script.png";
import countLinks from "/public/count-links.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Наверх",
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
    description:
      "Навчання програмуванню",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - до тепер",
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
    id: "count-links-app",
    url: "https://count-links-e2hfkxbug-mugidar.vercel.app",
    title: "Count Links App",
    description: `Я займайвся копірайтингом. Мені потрібно було постійно контролювати, щоб не було взято занадто багато матеріалів з одного відео. Вручну це було б не просто рахувати кількість однакових посилань, тому я вирішив створити додаток, який з декількох десятків посилань з таймкодами та тисяч символів тексту рахує кількість однакових посилань `,
    tags: ["React", "Tailwind"],
    imageUrl: countLinks,
  },
  {
    id: "ae-script",
    title: "Videoediting script",
    description: `Коли я працював відеомонтажером, була стадія створення відео, де потрібно розставляти переходи, а їх було близько 50-60. Робити це вручну - монотонна робота, тому завдяки Node.js я створив скрипт, який автоматизує цей процес.`,
    tags: ["Javascript","Node.js"],
    imageUrl: aeScript,
    videoName: "Видео.webm" 
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
