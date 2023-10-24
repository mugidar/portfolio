import { Inter } from 'next/font/google'
import Link from 'next/link'
import '../globals.css'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} overflow-x-hidden bg-gray-100 text-inherit relative`}
			>
				<div className="absolute top-[-6rem] w-[31.25rem] h-[31.25rem] right-[11rem]  -z-10 bg-red-100 rounded-full blur-3xl  sm:w-[68.75rem]"></div>
				<div className="absolute top-[-1rem]  w-[50rem] h-[31.25rem] left-[-35rem] -z-10 bg-blue-100 rounded-full blur-3xl  right-[30rem] sm:w-[68.75rem]  md:left-[-33rem]  lg:left-[-28rem]  xl:left-[-15rem]  2xl:left-[-5rem]"></div>

				<Link href={'/'}>
					<h1 className="text-center text-xl font-bold underline text-blue-500 bg-red-200 p-5 ">
						GO TO THE DEVELOPER PAGE
					</h1>
				</Link>

				{children}
			</body>
		</html>
	)
}
