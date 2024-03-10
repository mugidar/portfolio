"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../../lib/data";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import useIntersectionObserver from "@/hooks/useSectionInView";
import Link from "next/link";

const Projects = () => {
  const ref = useIntersectionObserver("#projects", .1);

  return (
    <section ref={ref} id="projects">
      <SectionHeading>Проекти</SectionHeading>
      <div className="flex flex-col gap-5 mb-24 px-4 sm:px-0">
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project linkHref={`projects/${project.id}`} {...project} />
			
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
