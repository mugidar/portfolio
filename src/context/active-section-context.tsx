'use client'
import React, { createContext, useState } from 'react'
import { links } from '../../lib/data'

type SectioName = (typeof links)[number]['hash']

type ActiveSectionContextType = {
	currentHash: SectioName
	setCurrentHash: React.Dispatch<React.SetStateAction<SectioName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
)

const ActiveSectionContextProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	const [currentHash, setCurrentHash] = useState<SectioName>('#home')

	return (
		<ActiveSectionContext.Provider value={{ currentHash, setCurrentHash }}>
			{children}
		</ActiveSectionContext.Provider>
	)
}

export default ActiveSectionContextProvider


