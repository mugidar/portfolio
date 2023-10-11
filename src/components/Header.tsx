'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { links } from '../../lib/data'
import Link from 'next/link'

const Header = () => {
	return (
		<header className="z-[999] relative">
			<motion.div
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.003] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
			></motion.div>
			<nav className="flex fixed top-[0.15rem] left-1/2 h-12  -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className="flex h-full justify-center flex-wrap w-[22rem] gap-x-5 gap-y-1 text-[0.9rem] font-medium sm:flex-nowrap ">
					{links.map(link => (
						<motion.li
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className="h-3/4 flex items-center justify-center "
							key={link.hash}
						>
							<Link
								className="flex justify-center w-full items-center px-3 py-3 transition hover:text-gray-400"
								href={link.hash}
							>
								{link.name}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
