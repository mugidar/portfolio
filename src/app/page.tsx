import About from '@/components/About'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import SectionDivider from '@/components/section-divider'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Experience /> 
		</main>
	)
}
