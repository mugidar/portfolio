'use client'
import useSectionInView from '@/hooks/useSectionInView'
import React from 'react'
import SectionHeading from './section-heading'
import { FaTelegramPlane } from 'react-icons/fa'

const Contact = () => {
	const ref = useSectionInView('#contact')
	return (
		<section className="mt-20 w-[30%]" ref={ref} id="contact">
			<SectionHeading className="mb-0">Contact</SectionHeading>
			<p className="flex flex-col items-center ">
				Contact me here or directly at{' '}
				<a href="mailto:mugidar@gmail.com">
					<u>mugidar@gmail.com</u>
				</a>{' '}
			</p>

			<form className="flex px-2 flex-col gap-5 mt-5">
				<input
					type="email"
					placeholder="Your email"
					className="p-2 resize-none border-2 rounded-md border-gray-300 focus:border-gray-400 outline-gray-400 transition "
				/>
				<textarea
					placeholder="Your text here..."
					className="p-2 resize-none border-2 border-gray-300 focus:border-gray-400 outline-gray-400 transition rounded-md"
					rows={10}
				></textarea>
				<button
					type="submit"
					className="group flex self-start px-4 py-2 rounded-full text-white gap-2 items-center bg-gray-900"
				>
					Submit <FaTelegramPlane className='group-hover:scale-125 group-hover:rotate-[10deg] transition' />{' '}
				</button>
			</form>
		</section>
	)
}

export default Contact
