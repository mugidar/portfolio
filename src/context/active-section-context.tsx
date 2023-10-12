'use client'
import React, { createContext, useEffect, useState } from 'react'
import { SectioName } from '../../lib/types'



type ActiveSectionContextType = {
	currentHash: SectioName
	setCurrentHash: React.Dispatch<React.SetStateAction<SectioName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
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
	const [timeOfLastClick, setTimeOfLastClick] = useState(0)

	useEffect(() => {
		window.location.hash = currentHash
	}, [currentHash])

	return (
		<ActiveSectionContext.Provider value={{ currentHash, setCurrentHash, timeOfLastClick, setTimeOfLastClick }}>
			{children}
		</ActiveSectionContext.Provider>
	)
}

export default ActiveSectionContextProvider


