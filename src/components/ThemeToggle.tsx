"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { BsSun } from 'react-icons/bs'

const ThemeToggle = () => {

	return (
		<motion.a  href='#contact' initial={{opacity: 0, x: "100%"}} animate={{opacity: 1, x: "0"}} transition={{ delay: .3, duration: .4 }}  className='bg-black/70 p-3 text-white rounded-full fixed bottom-10 right-10'>
			<b>Status:</b> У пошуці компанії мрії, де зможу реалізувати свій потенціал. 
		</motion.a>
	)
}

export default ThemeToggle
