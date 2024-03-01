//@ts-ignore
import React from "react";
import { projectsData } from "../../../../lib/data";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({ params }: { params: { projectTitle: string } }) => {
  const project: any = projectsData.find(
    (project) => project.id === params.projectTitle
  );
  return (
    <div className="h-[calc(100vh - 30px)]">
      <div className="flex gap-5 p-20 ">
        <div className="flex flex-col gap-4 pt-10 w-1/2 ">
          <h1 className=" text-3xl font-bold">{project?.title}</h1>
          <p className="text-xl">{project?.description}</p>
  
          {project.url && (
            <Link
              target="_blank"
              className="bg-green-400 p-3 self-start rounded-3xl"
              href={project.url}
            >
              Посилання на додаток
            </Link>
          )}
        </div>
        <div className="relative w-[1200px] h-[700px]">
          {project.videoName ? (
            <video src={`/${project.videoName}`} autoPlay={true} controls muted></video>
          ) : (
            <Image
              className="object-cover"
              src={project?.imageUrl}
              fill
              alt={""}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
