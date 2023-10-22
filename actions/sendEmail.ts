'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API)

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get('email')
	const senderText = formData.get('text')


	if (senderEmail.trim().length < 4 || senderText.trim().length < 30)
		return { error: 'Invalid' }
	try {
		await resend.emails.send({
			from: `personalwebsite@resend.dev`,
			reply_to: senderEmail,
			to: 'mugidar@gmail.com',
			subject: 'PERSONAL WEBSITE',
			html: `<h1>${senderEmail}, </h1><h3>${senderText}</h3>`
		})
	} catch (error) {
		throw new Error(`${error}`)
	}
}
