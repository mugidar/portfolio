import React from 'react'
import { ExperienceItem } from '../../lib/types'

const ExperienceItem:React.FC<ExperienceItem> = ({date,description,icon,location,title}) => {
	return (
		<div className="group flex  flex-row-reverse items-center md:gap-0 md:h-[14rem] md:relative md:even:flex-row-reverse ">
			<div className=" md:absolute shadow-xl   bottom-10 right-full group-even:left-full flex flex-col bg-slate-400/60 p-4 rounded-md md:w-[20rem]">
				<h3 className='text-xl capitalize font-bold'>{title}</h3>
				<h5 className='italic text-lg'>{location}</h5>
				<p className='font-medium'>
					{description}
				</p>
			</div>
			<div className="flex flex-1 min-w-[70px] flex-col justify-center items-center md:flex-row md:group-even:flex-row-reverse ">
				<span className="p-4 shadow-lg bg-white rounded-full md:mx-5">{icon}</span>
				<p className="md:absolute  font-bold text-gray-700 flex justify-center text-center right-full  md:w-[8rem] group-odd:left-full ">{date}</p>
			</div>
		</div>
	)
}

export default ExperienceItem
