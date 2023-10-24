import React, { createElement } from 'react'
import { technologies } from '../../../../lib/seo'
import Title from './title/Title'
import Paragraph from './paragraph/Paragraph'
import Subtitle from './subtitle/Subtitle'
import './technology.css'
import List from './list/List'
import { notFound } from 'next/navigation'

const page = ({ params }: { params: { technology: string } }) => {
	const { technology } = params
	const displayHtml = technologies[technology]
	console.log(displayHtml)

	if (!displayHtml) return notFound()
	
	return (
		<article>
			{displayHtml.map(tech =>
				createElement(
					tech.type === 'ul' ? List : tech.type,
					{
						...((tech.type === 'ul' && { content: tech.content }) as {
							content: string[]
						})
					},
					tech.content
				)
			)}
		</article>
	)
}

export default page
