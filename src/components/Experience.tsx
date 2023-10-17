import React from 'react'
import ExperienceItem from './ExperienceItem'
import SectionHeading from './section-heading'

const Experience = () => {
	return (
		<section>
			<SectionHeading>Job Experirence</SectionHeading>
			<div className="relative max-h-[80vh] overflow-y-scroll no-scrollbar  min-w-[50rem] my-auto">
				<div className="">
					<div className="relative flex flex-col ">
						<div className="absolute -z-10 bg-black right-1/2 translate-x-1/2 h-[100%]  w-1 opacity-20 " />
						<div className="flex items-center   gap-18 flex-col min-h-full ">
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
							<ExperienceItem />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
