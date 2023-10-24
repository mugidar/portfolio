import React from 'react'

const List = ({ content }: { content: string[] }) => {
	console.log(content)
	return (
		<ul className='flex flex-col'>
			{content.map(item => (
				<li className='list-decimal mx-10 text-lg' key={item}>{item}</li>
			))}
		</ul>
	)
}

export default List
