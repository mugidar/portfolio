'use client'
import React from 'react'
import ExperienceItem from './ExperienceItem'
import SectionHeading from './section-heading'
import { experiencesData } from '../../lib/data'
import useSectionInView from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'

const Experience = () => {
	const ref = useSectionInView('#experience', 1)

	const variants = {
		initial: {
			y: '-100%',
			opacity: 0
		},
		animate: {
			y: 0,
			x: '-50%',
			opacity: 0.4
		}
	}
	return (
		<motion.section  ref={ref} id="experience">
			<SectionHeading>Job Experirence</SectionHeading>
			<div className="inline-block relative w-screen p-5 h-full  max-h-[60vh] md:max-h-[85vh] overflow-y-scroll no-scrollbar  md:max-w-[50rem] ">
				<div className="relative flex flex-col ">
					<motion.div
						variants={variants}
						initial="initial"
						transition={{ duration: 2, type: "just" }}
						viewport={{once: true}}
						whileInView="animate"
						className="hidden md:absolute md:block -z-10 bg-black left-1/2   h-[100%]  w-1 "
					/>
					<div className="flex w-full items-center gap-5 md:gap-18 flex-col min-h-full ">
						{experiencesData.map((item: ExperienceItem, i) => (
							
								<ExperienceItem key={i} index={i} {...item} />
							
						))}
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Experience
