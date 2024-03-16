"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import useIntersectionObserver from "@/hooks/useSectionInView";

const About = () => {
  const ref = useIntersectionObserver("#about", 1);

  return (
    <motion.section
      ref={ref}
      id={"about"}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.176 }}
      className="mb-28 max-w-[45rem] leading-8 px-2 sm:px-0  text-center"
    >
      <SectionHeading>Про мене</SectionHeading>
      <p>
        {" "}
        Наразі навчаюся в Державному університеті економіки та технологій на
        факультеті інформаційних технологій. Спеціальність "Інженерія
        програмного забезпечення". Коли розпочав свій шлях розробника у 2022
        році, я вже знав HTML, CSS та JS (трохи) з 2017 року, потім я пройшов
        декілька курсів і почав наполегливе навчання. Мав досвід навчання з
        ментором - сіньйор-розробником компанії "EPAM" Моя улюблена частина
        програмування - це вирішення проблем та створення чогось нового. Мій
        основний стек - це JavaScript, React | Next.js і трохи знайомий з
        TypeScript. <br />{" "}
        <b>Завжди прагну вивчати щось нове та вдосконалювати набуте.</b>
      </p>
      {/*  <p>
        Наразі я шукаю роботу розробником. Коли я не кодую, мені подобається читати книги, грати на
        гітарі та займатися спортом. Також мені подобається вивчати щось нове.
      </p> */}
    </motion.section>
  );
};

export default About;
