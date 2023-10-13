'use client'
import { motion } from 'framer-motion'
import React from 'react'

const SectionDivider = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125}}
			className=" hidden sm:block rounded-full opacity-50  w-2 my-32 h-16 bg-neutral-400"
		></motion.div>
	)
}

export default SectionDivider
