import { ActiveSectionContext } from '@/context/active-section-context'
import React, { useContext } from 'react'

const useActiveSectionContext = () => {
	const context = useContext(ActiveSectionContext)
	if (context === null) {
		throw new Error('Use this hook only in ActiveSectionContext')
	}

	return context
}

export default useActiveSectionContext
