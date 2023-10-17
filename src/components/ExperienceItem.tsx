import React from 'react'

const ExperienceItem = () => {
	return (
		<div className="group items  h-[13rem] relative even:flex-row-reverse flex">
			<div className="absolute bottom-10 right-full group-even:left-full flex flex-col bg-slate-400 p-2 rounded-md w-[20rem]">
				<h3>Gradadada</h3>
				<h5>London, BR</h5>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
					dolorem corporis fugiat aperiam consequatur minima.
				</p>
			</div>
			<div className="flex group-even:flex-row-reverse items-center gap-2">
				<span className="p-4 bg-white rounded-full mx-5">🎉</span>
				<p className="absolute right-full group-odd:left-full ">2019</p>
			</div>
		</div>
	)
}

export default ExperienceItem
