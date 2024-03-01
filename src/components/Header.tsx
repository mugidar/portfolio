'use client'
import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { links, uaLinks } from '../../lib/data'
import Link from 'next/link'
import ActiveSectionContextProvider, {
	ActiveSectionContext
} from '@/context/active-section-context'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'

const Header = () => {
	const { currentHash, setCurrentHash, setTimeOfLastClick } =
		useActiveSectionContext()

	return (
		<header className="z-[999] relative">
			<motion.div
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.003] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
			></motion.div>
			<nav className="flex fixed top-[0.15rem] left-1/2 h-12  -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className="flex h-full justify-center flex-wrap w-[22rem] gap-x-5 gap-y-1 text-[0.9rem] font-medium sm:flex-nowrap ">
					{uaLinks.map(link => (
						<motion.li
							onClick={() => {
								setCurrentHash(link.hash)
								setTimeOfLastClick(Date.now)
							}}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className={`relative h-3/4 flex items-center justify-center `}
							key={link.hash}
						>
							<Link
								className={`flex justify-center items-center px-3 py-3 transition text-gray-950/70 hover:text-gray-400 transition ${
									currentHash === link.hash && '!text-gray-950 '
								}`}
								href={link.hash}
							>
								{link.name}

								{currentHash === link.hash && (
									<motion.span
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 30
										}}
										layoutId="section"
										className="bg-black/5 rounded-full absolute inset-0 sm:inset-1"
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
