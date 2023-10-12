'use client'
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '../../lib/data'
import { useInView } from 'react-intersection-observer'
import Project from './Project'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'

const Projects = () => {
	const { setCurrentHash } = useActiveSectionContext()
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			setCurrentHash('#projects')
		}
	}, [inView])
	return (
		<section ref={ref} id="projects">
			<SectionHeading>My Projects</SectionHeading>
			<div className="flex flex-col gap-5 mb-24 px-4 sm:px-0">
				{projectsData.map((project, i) => (
					<React.Fragment key={i}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}

export default Projects
