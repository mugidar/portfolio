'use client'
import useSectionInView from '@/hooks/useSectionInView'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import SectionHeading from './section-heading'
import { FaTelegramPlane } from 'react-icons/fa'
import { sendEmail } from '../../actions/sendEmail'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

const Contact = () => {
	const ref = useSectionInView('#contact')
	const [isLoading, setIsLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
		const emailValue = e.currentTarget.value
		
		if (emailValue.length > 50) {
			toast.error('Max length reached!')
			return
		}
		setEmail(e.currentTarget.value)
	}
	const handleChangeMessage = (e: FormEvent<HTMLTextAreaElement>) => {
		const messageValue = e.currentTarget.value

		if (messageValue.length > 500) {
			toast.error('Max length reached!')
			return
		}
		setMessage(e.currentTarget.value)
	}

	return (
		<section className="mt-20 w-[80%] md:w-[40%]" ref={ref} id="contact">
			<SectionHeading className="mb-0">Contact</SectionHeading>
			<p className="flex flex-col items-center ">
				Contact me here or directly at{' '}
				<a href="mailto:mugidar@gmail.com">
					<u>mugidar@gmail.com</u>
				</a>{' '}
			</p>

			<form
				action={async (formData: FormData) => {
					const { data, error } = await sendEmail(formData)
					if (data) {
						toast.success(
							`I will reply to you as soon as possible. Thank you 🙏.`,
							{ duration: 3000 }
						)
					}
					if (!data) {
						setIsLoading(false)
						toast.error(error)
					}
					setIsLoading(false)
				}}
				className="flex px-2 flex-col gap-5 mt-5"
			>
				<input
					value={email}
					onChange={e => handleChangeEmail(e)}
					name="email"
					type="email"
					placeholder="Your email"
					className="p-2 resize-none border-2 rounded-md border-gray-300 focus:border-gray-400 outline-gray-400 transition "
				/>
				<textarea
					onChange={e => handleChangeMessage(e)}
					value={message}
					id="message"
					name="text"
					placeholder="Your text here..."
					className="p-2 resize-none border-2 border-gray-300 focus:border-gray-400 outline-gray-400 transition rounded-md"
					rows={10}
				></textarea>

				<button
					onClick={() => setIsLoading(true)}
					disabled={false}
					type="submit"
					className="group flex self-start px-4 py-2 rounded-full w-full sm:w-[120px] h-[40px] justify-center text-white gap-2 items-center bg-gray-900 disabled:scale-150"
				>
					{isLoading ? (
						<div className="w-4 h-4 border-2 rounded-full border-r-0 animate-spin" />
					) : (
						<>
							Submit{' '}
							<FaTelegramPlane className="group-hover:scale-125 group-hover:rotate-[10deg] transition" />{' '}
						</>
					)}
				</button>
			</form>
		</section>
	)
}

export default Contact
