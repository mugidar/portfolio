import React from 'react'
import { ExperienceItem } from '../../lib/types'
import { motion } from 'framer-motion'

const ExperienceItem: React.FC<ExperienceItem & { index: number }> = ({
	date,
	description,
	icon,
	location,
	title,
	index
}) => {
	return (
		<div className="group flex  flex-row-reverse items-center md:gap-0 md:h-[14rem] md:relative md:even:flex-row-reverse ">
			<motion.div
			initial={{
				x: -50,
				opacity: 0
			}}
			whileInView={{
				x: 0,
				opacity: 1
				 ,transition: {
					delay: 0.5 * index
				} 
			}}
			viewport={{once: true}}
			className=" md:absolute shadow-xl   bottom-10 right-full group-even:left-full flex flex-col bg-slate-400/60 p-4 rounded-md md:w-[20rem]">
				<h3 className="text-xl capitalize font-bold">{title}</h3>
				<h5 className="italic text-lg">{location}</h5>
				<p className="font-medium">{description}</p>
			</motion.div>
			<div className="flex flex-1 min-w-[70px] flex-col justify-center items-center md:flex-row md:group-even:flex-row-reverse ">
				<motion.span
					initial={{
						y: 50,
						opacity: 0
					}}
					whileInView={{
						y: 0,
						opacity: 1,
						transition: {
							delay: 0.4 * index
						}
					}}
					viewport={{ once: true }}
					className="p-4 shadow-lg bg-white rounded-full md:mx-5"
				>
					{icon}
				</motion.span>
				<motion.p
					initial={{
						x: 50,
						opacity: 0
					}}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: {
							delay: 0.4 * index
						}
					}}
					viewport={{ once: true }}
					className="md:absolute  font-bold text-gray-700 flex justify-center text-center right-full  md:w-[8rem] group-odd:left-full "
				>
					{date}
				</motion.p>
			</div>
		</div>
	)
}

export default ExperienceItem
