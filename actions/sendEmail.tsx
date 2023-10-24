'use server'

import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '@/components/contact-form-email'
const resend = new Resend(process.env.RESEND_API)

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get('email') as string
	const senderText = formData.get('text') as string
	let data
	if (senderEmail.trim().length < 4)
		return { error: 'Your email should be more than 4 characters 🥰' }
	if (senderText.trim().length < 30)
		return { error: 'Your message shoud be more than 30 characters 🥰' }

	try {
		data = await resend.emails.send({
			from: `Contact form <personalwebsite@resend.dev>`,
			reply_to: senderEmail as string,
			to: 'mugidar@gmail.com',
			subject: 'PERSONAL WEBSITE',
			react: React.createElement(ContactFormEmail, {
				message: senderText,
				senderEmail
			})
		})
	} catch (error) {
		console.log(error)
		throw new Error(`${error}`)
	}
	return { data }
}
