import React from 'react'
import { BsSun } from 'react-icons/bs'

const ThemeToggle = () => {
	return (
		<button className='bg-neutral-500 p-3 text-white rounded-full fixed bottom-10 right-10'>
			<BsSun/>
		</button>
	)
}

export default ThemeToggle
