'use client'
import React from 'react'
import SectionHeading from './section-heading'
import SkillItem from './SkillItem'
import { skillsData } from '../../lib/data'
import useSectionInView from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'

const Skills = () => {
	const ref = useSectionInView('#skills')
	
	return (
		<motion.section id='skills' ref={ref} className="w-1/2 mb-28">
			<SectionHeading>Skills</SectionHeading>
			<ul className="flex justify-center flex-wrap gap-5 ">
				{skillsData.map((skill, index) => (
					<SkillItem key={skill} skill={skill} index={index} />
				))}
			</ul>
		</motion.section>
	)
}

export default Skills
