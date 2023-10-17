import React from 'react'
import ExperienceItem from './ExperienceItem'
import SectionHeading from './section-heading'
import { experiencesData } from '../../lib/data'


const Experience = () => {
	return (
		<section>
			<SectionHeading>Job Experirence</SectionHeading>
			<div className="relative w-screen p-5 h-screen max-h-[50vh] md:max-h-[65vh] overflow-y-scroll no-scrollbar  md:max-w-[50rem] ">
				
					<div className="relative flex flex-col ">
						<div className="hidden md:absolute md:block -z-10 bg-black right-1/2 translate-x-1/2 h-[100%]  w-1 opacity-20 " />
						<div className="flex w-full items-center gap-5 md:gap-18 flex-col min-h-full ">
							{experiencesData.map((item: ExperienceItem , i) => (
								<>
								
								<ExperienceItem key={i} {...item} />
						
								</>
							))}
						</div>
					</div>
				
			</div>
		</section>
	)
}

export default Experience
