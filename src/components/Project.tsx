"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../../lib/data";
type ProjectProps = (typeof projectsData)[number];
type LinkHrefProp = {
  linkHref: string;
};

type Types = ProjectProps & LinkHrefProp

const Project: React.FC<Types> = ({
  title,
  description,
  tags,
  image,
  linkHref,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "1.3 1"],
    smooth: 1,
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.a
      target="_blank"
      href={linkHref}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        transition: ".2s",
      }}
      className="group even:flex-row-reverse hover:cursor-pointer hover:bg-gray-500/10 transition relative flex h-[20rem] gap-5 items-center p-8 bg-gray-50 max-w-[42rem] border-black/5 border overflow-hidden sm:pr-8"
    >
      <motion.div className="text-center flex h-full flex-1 flex-col justify-between ">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2  opacity-70 box font-medium overflow-hidden  text-ellipsis  line-clamp-3">
          {description}
        </p>
        <ul className="mt-4 justify-center sm:justify-start sm:mt-auto flex flex-wrap gap-2 text-white ">
          {tags.map((tag, i) => (
            <li
              className="bg-neutral-600 text-sm font-semibold py-2 px-3 rounded-full"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="flex-1 hidden sm:block">
        <div className="relative transition group-hover:-rotate-3 group-hover:scale-105  translate-y-8 translate-x-10 group-even:-translate-x-10  h-[300px] w-full rounded-lg overflow-hidden">
          <Image
            fill
            className="object-cover scale-125"
            src={image}
            alt={"Project I worked with"}
          />
        </div>
      </div>
    </motion.a>
  );
};
export default Project;
