import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MichaelDev | Portfolio',
	description: `I'm a web developer from Ukraine.`
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} overflow-x-hidden bg-gray-100 text-inherit relative pt-28`}
			>
				<div className="absolute top-[-6rem] w-[31.25rem] h-[31.25rem] right-[11rem]  -z-10 bg-red-100 rounded-full blur-3xl  sm:w-[68.75rem]"></div>
				<div className="absolute top-[-1rem]  w-[50rem] h-[31.25rem] left-[-35rem] -z-10 bg-blue-100 rounded-full blur-3xl  right-[30rem] sm:w-[68.75rem]  md:left-[-33rem]  lg:left-[-28rem]  xl:left-[-15rem]  2xl:left-[-5rem]"></div>

				<ActiveSectionContextProvider>
					<Header />
					{children}
				</ActiveSectionContextProvider>
			</body>
		</html>
	)
}
