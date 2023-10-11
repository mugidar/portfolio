import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

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
				{/* <div className="absolute w-[30rem] h-[30rem] -z-10 bg-red-100 rounded-full blur-3xl left-[30rem] sm:w-[68.75rem]"></div>
				<div
					className="absolute
         w-[30rem]
         h-[50rem]
         -z-10
         bg-blue-100
         rounded-full
         blur-3xl
         top-[20rem]
         right-[30rem]
          sm:w-[68rem]
          md:left-[-33rem]
          lg:left-[-28rem]
          xl:left-[-15rem]
          2xl:left-[-5rem]"
				></div> */}
				<Header />
				{children}
			</body>
		</html>
	)
}
