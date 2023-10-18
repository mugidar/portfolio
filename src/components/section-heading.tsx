import React from 'react'

const SectionHeading = ({ children,className = ""}: { children: React.ReactNode, className?:string }) => {
	return <h2 className={`mb-8 text-3xl font-medium capitalize text-center ${className} `}>{children}</h2>
}

export default SectionHeading
