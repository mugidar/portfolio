'use client'
import useSectionInView from '@/hooks/useSectionInView'
import React from 'react'

const Contact = () => {
	const ref = useSectionInView('#contact')
	return (
		<section ref={ref} id="contact">
	
		</section>
	)
}

export default Contact
