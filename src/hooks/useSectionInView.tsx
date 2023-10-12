import React, { useEffect } from 'react'
import useActiveSectionContext from './useActiveSectionContext'
import { useInView } from 'react-intersection-observer'
import { SectioName } from '../../lib/types'

const useSectionInView = (
	hash: SectioName,
	options = {}
) => {
	const { setCurrentHash,timeOfLastClick } = useActiveSectionContext()
	const { ref, inView } = useInView(options)
	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setCurrentHash(hash)
		}
	}, [inView])

	return { ref }
}

export default useSectionInView
