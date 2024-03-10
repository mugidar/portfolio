"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import { useInView } from "react-intersection-observer";
import useIntersectionObserver from "@/hooks/useSectionInView";
const Intro = () => {
  const ref = useIntersectionObserver("#home", 0.8);

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center mb-28 sm:mb-0"
    >
      <div className=" flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            className="relative h-36 w-36 overflow-hidden rounded-full shadow-xl border-[0.35rem]"
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Image
              className="translate object-cover translate-y-[15px]  translate-x-[-3px]   scale-[1.3]"
              priority={true}
              quality={95}
              fill
              src={"/me.png"}
              alt=""
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.7,
              delay: 0.1,
            }}
            className=" absolute bottom-0 right-0 drop-shadow-lg text-4xl"
          >
            😎
          </motion.span>
        </div>
        <motion.h1
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5]"
        >
          <b>Привіт, мене звати Михайло</b>. Я&nbsp;
          <u>Фронт-енд / Фулл-стек</u> розробник <b> з досвідом у 1.5 року</b>{" "}
          та <b> більше 3 років</b> HTML+CSS досвіду. Створення <i>веб-сайтів та веб-додатків</i> надихає
          мене. Зараз основний фокус на <u>React </u>та<u> Next.js </u>{" "}
        </motion.h1>
        {/* <motion.h1
					initial={{ scale: 0, opacity: 0, y: 100 }}
					animate={{ scale: 1, opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
					className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5]"
				>
					<b>Привіт, мене звати Майкл</b>. I&apos;m a{' '}
					<u>Front-end / Full-stack</u> developer <b>with a year</b> and{' '}
					<b> more than 3 years</b> of HTML+CSS experience. I enjoy web
					developing. Creating <i>web-sites and web-apps</i> inspires me. Now
					focus is <u>React (Next.js)</u>{' '}
				</motion.h1> */}
        <div className="flex select-none flex-col font-medium sm:flex-row gap-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              href={"#contact"}
              className=" cursor-pointer bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
            >
              Зв'язатися через емейл <BsArrowRight />
            </Link>
          </motion.div>
          <motion.a
            href="/CV.pdf"
            download
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
            className="  cursor-pointer bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full"
          >
           Завантажити резюме<HiDownload />
          </motion.a>
          <span className="flex justify-evenly gap-2">
            <motion.a
              href="https://www.linkedin.com/in/mykhailo-romanyuk-84838b255"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.4, stiffness: 200 }}
              className="hover:text-black transition-colors hover:bg-gray-500/30 cursor-pointer bg-gray-500/50 text-white text-xl p-4  flex items-center gap-2 rounded-full"
            >
              <BsLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/mugidar"
              target="_blank"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", delay: 0.6, stiffness: 200 }}
              className="hover:text-black transition-colors hover:bg-gray-500/30 cursor-pointer bg-gray-500/50 text-white text-xl p-4  flex items-center gap-2 rounded-full"
            >
              <BsGithub />
            </motion.a>{" "}
            <motion.a
              href="https://t.me/mugidar"
              target="_blank"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", delay: 0.6, stiffness: 200 }}
              className="hover:text-black transition-colors hover:bg-gray-500/30 cursor-pointer bg-gray-500/50 text-white text-xl p-4  flex items-center gap-2 rounded-full"
            >
              <BsTelegram />
            </motion.a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
