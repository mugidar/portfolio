import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '../../lib/data'

import Project from './Project'

const Projects = () => {
	return (
		<section id='projects'>
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

