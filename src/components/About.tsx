'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

const About = () => {
	return (
		<motion.section
		id={"about"}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.176 }}
			className="mb-28 max-w-[45rem] leading-8 px-2 sm:px-0  text-center"
		>
			<SectionHeading>About me</SectionHeading>
			<p>
				{' '}
				I'm studying at State University of Economics and Technologies. I
				decided to pursue my passion for programming after a little depression
				when I didn't know what I want to do in this life. I already knew HTML,
				CSS and JS(a little) from 2017, then I downloaded some courses and
				started my journey. My favorite part of programming is the
				problem-solving aspect. I love the feeling of finally figuring out a
				solution to a problem. My core stack is React, Next.js, Node.js, Laravel
				and MongoDB / MySQL. I am also familiar with TypeScript and Prisma. I am
				always looking to learn new technologies.
			</p>
			<p>
				I am currently looking for a full-time position as a software developer.
				When I'm not coding, I enjoy reading books, playing video games, and
				doing sports. I also enjoy learning new things.
			</p>
		</motion.section>
	)
}

export default About
