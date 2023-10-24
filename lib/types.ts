import { experiencesData, links, skillsData } from './data'

export type SectionName = (typeof links)[number]['hash']

export type ExperienceItem = (typeof experiencesData)[number]

export type SkillName = (typeof skillsData)[number]

export type TechnologyType = {
    [key: string]: { type: string; content: string | string[]}[];
  };
