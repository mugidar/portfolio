'use client'
import React from 'react'
import { skillsData } from '../../lib/data'
import { SkillName } from '../../lib/types'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index
		}
	})
}

const SkillItem = ({ skill, index }: { skill: SkillName; index: number }) => {
	return (
		<motion.li
		key={index}
			viewport={{
				once: true
			}}
			initial="initial"
			whileInView="animate"
			custom={index}
			variants={fadeInAnimationVariants}
			className="hover:bg-gray-200 transition-all cursor-pointer p-2 bg-gray-100 rounded-xl shadow-md"
		>
			{skill}
		</motion.li>
	)
}

export default SkillItem
