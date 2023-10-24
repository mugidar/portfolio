'use server'

import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '@/components/contact-form-email'
const resend = new Resend(process.env.RESEND_API)





export const sendEmail = async (formData: FormData) => {
	const config = {
		message: {
			minLength: 30,
			maxLength: 500
		},
		email: {
			minLength: 4,
			maxLength: 50
		}
	}
	const senderEmail = formData.get('email') as string
	const senderText = formData.get('text') as string
	let data
	if (senderEmail.trim().length < config.email["minLength"])
		return { error: `Your email should be more than ${config.email["minLength"]} characters 🥰` }
	if (senderEmail.trim().length >= config.email["maxLength"])
		return { error: `Your email should be more than ${ config.email["maxLength"]} characters 🥰` }



	if (senderText.trim().length < config.message["minLength"])
		return { error: `Your message shoud be more than ${config.message["minLength"]} characters 🥰` }
	if (senderText.trim().length >= config.message["maxLength"])
		return { error: `Your message shoud be less than ${config.message["maxLength"]} characters 🥰` }

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
