import { TechnologyType } from './types'

export const technologies: TechnologyType = {
	javascript: [
		{
			type: 'h1',
			content: 'JavaScript'
		},
		{
			type: 'h3',
			content: `Origins and History`
		},
		{
			type: 'p',
			content: `Conceived as a server-side language by Brendan Eich (then employed by the Netscape Corporation), JavaScript soon came to Netscape Navigator 2.0 in September 1995. JavaScript enjoyed immediate success and Internet Explorer 3.0 introduced JavaScript support under the name JScript in August 1996.
            In November 1996, Netscape began working with Ecma International to make JavaScript an industry standard. Since then, the standardized JavaScript is called ECMAScript and specified under ECMA-262, whose latest (twelfth, ES2021) edition is available as of June 2021.
            Recently, JavaScript's popularity has expanded even further through the successful Node.js platform—the most popular cross-platform JavaScript runtime environment outside the browser. Node.js - built using Chrome's V8 JavaScript Engine - allows developers to use JavaScript as a scripting language to automate things on a computer and build fully functional HTTP and WebSockets servers.`
		}
	],
	html: [
		{
			type: 'h1',
			content: 'HTML'
		},
		{
			type: 'h2',
			content: `HTML (HyperText Markup Language) is a descriptive language that specifies webpage structure.`
		},
		{
			type: 'h3',
			content: `Brief history`
		},
		{
			type: 'p',
			content: `In 1990, as part of his vision of the Web, Tim Berners-Lee defined the concept of hypertext, which Berners-Lee formalized the following year through a markup mainly based on SGML. The IETF began formally specifying HTML in 1993, and after several drafts released version 2.0 in 1995. In 1994 Berners-Lee founded the W3C to develop the Web. In 1996, the W3C took over the HTML work and published the HTML 3.2 recommendation a year later. HTML 4.0 was released in 1999 and became an ISO standard in 2000.
            At that time, the W3C nearly abandoned HTML in favor of XHTML, prompting the founding of an independent group called WHATWG in 2004. Thanks to WHATWG, work on HTML continued: the two organizations released the first draft of HTML5 in 2008 and an official standard in 2014. The term "HTML5" is just a buzzword referring to modern web technologies which are part of the HTML Living Standard.`
		},
		{
			type: 'h3',
			content: `Concept and syntax`
		},
		{
			type: 'p',
			content: `An HTML document is a plaintext document structured with elements. Elements are surrounded by matching opening and closing tags. Each tag begins and ends with angle brackets (<>). There are a few empty or void elements that cannot enclose any text, for instance <img>
            You can extend HTML tags with attributes, which provide additional information affecting how the browser interprets the element:
            Detail of the structure of an HTML element
            An HTML file is normally saved with an .htm or .html extension, served by a web server, and can be rendered by any Web browser.`
		}
	],
	css: [
		{
			type: 'h1',
			content: 'CSS'
		},
		{
			type: 'h2',
			content: `CSS (Cascading Style Sheets) is a declarative language that controls how webpages look in the browser.`
		},

		{
			type: 'p',
			content: `

            The browser applies CSS style declarations to selected elements to display them properly. A style declaration contains the properties and their values, which determine how a webpage looks.
            
            CSS is one of the three core Web technologies, along with HTML and JavaScript. CSS usually styles HTML elements, but can be also used with other markup languages like SVG or XML.
            
            A CSS rule is a set of properties associated with a selector. Here is an example that makes every HTML paragraph yellow against a black background:
            
          
            "Cascading" refers to the rules that govern how selectors are prioritized to change a page's appearance. This is a very important feature, since a complex website can have thousands of CSS rules.`
		}
	],
	'node.js': [
		{
			type: 'h1',
			content: 'Node.js'
		},
		{
			type: 'h2',
			content: `Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript.`
		},
		{
			type: 'h3',
			content: `Node Package Manager (npm)`
		},
		{
			type: 'p',
			content: `npm is a package manager that is downloaded and bundled alongside Node.js. Its command-line (CLI) client npm can be used to download, configure and create packages for use in Node.js projects. Downloaded packages can be imported by ES imports and CommonJS require() without including the dependency directory node_modules/ they are downloaded to, as Node.js resolves packages without a relative or absolute path specified in their import.
            Packages hosted on npm are downloaded from the registry at https://registry.npmjs.org/, but the CLI can be configured to use any compatible instance.`
		}
	],
	'next.js': [
		{
			type: 'h1',
			content: 'Next.js'
		},
		{
			type: 'h2',
			content: `Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.`
		},
		{
			type: 'h3',
			content: `About Next`
		},
		{
			type: 'p',
			content: `Next.js is a flexible React framework that gives you building blocks to create fast web applications.
			But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.`
		},
		{
			type: 'ul',
			content: [
				'User Interface - how users will consume and interact with your application.',
				'Routing - how users navigate between different parts of your application.',
				'Data Fetching - where your data lives and how to get it.',
				'Rendering - when and where you render static or dynamic content.',
				'Integrations - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.                ',
				'Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).',
				'Performance - how to optimize your application for end-users.',
				'Scalability - how your application adapts as your team, data, and traffic grow.',
				'Developer Experience - your team’s experience building and maintaining your application.'
			]
		},
		{
			type: 'p',
			content: `For each part of your application, you will need to decide whether you will build a solution yourself or use other tools such as libraries and frameworks.            `
		}
	],
	typescript: [
		{
			type: 'h1',
			content: 'TypeScript'
		},
		{
			type: 'h2',
			content: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`
		},
		{ type: 'h3', content: 'What is TypeScript?' },
		{
			type: 'h3',
			content: `JavaScript and More`
		},
		{
			type: 'p',
			content: `TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.`
		},
		{
			type: 'h3',
			content: `A Result You Can Trust`
		},
		{
			type: 'p',
			content: `TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.`
		},
		{
			type: 'h3',
			content: `Safety at Scale`
		},
		{
			type: 'p',
			content: `TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.`
		}
	],
	react: [
		{
			type: 'h1',
			content: 'React'
		},
		{
			type: 'h2',
			content: `A JavaScript library for building user interfaces`
		},
		{
			type: 'h3',
			content: `Declarative`
		},
		{
			type: 'p',
			content: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

			Declarative views make your code more predictable and easier to debug.`
		},
		{
			type: 'h3',
			content: `Component-Based
			`
		},
		{
			type: 'p',
			content: `Build encapsulated components that manage their own state, then compose them to make complex UIs.

			Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`
		},
		{
			type: 'h3',
			content: `Learn Once, Write Anywhere
			`
		},
		{
			type: 'p',
			content: `We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

			React can also render on the server using Node and power mobile apps using React Native.`
		}
	],
	git: [
		{
			type: 'h1',
			content: 'Git'
		},
		{
			type: 'h2',
			content: `Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.`
		},
		{
			type: 'h3',
			content: `About`
		},
		{
			type: 'p',
			content: `Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

			Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.`
		}
	],
	tailwind: [
		{
			type: 'h1',
			content: 'Tailwind'
		},
		{
			type: 'h2',
			content: `Rapidly build modern websites without ever leaving your HTML.`
		},
		{
			type: 'h3',
			content: `Brief history`
		},
		{
			type: 'p',
			content: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`
		},
		{
			type: 'h3',
			content: `Build whatever you want, seriously.`
		},
		{
			type: 'p',
			content: `Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.
			`
		},
		{
			type: 'h3',
			content: `It’s tiny — never ship unused CSS again.`
		},
		{
			type: 'p',
			content: `Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.			`
		},
		{
			type: 'h3',
			content: `Responsive everything.`
		},
		{
			type: 'p',
			content: `Wrestling with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.

			Throw a screen size in front of literally any utility class and watch it magically apply at a specific breakpoint.`
		}
	],
	prisma: [
		{
			type: 'h1',
			content: 'Prisma'
		},
		{
			type: 'h2',
			content: `Prisma is a server-side library that helps developers read and write data to the database in an intuitive, efficient and safe way.`
		},
		{
			type: 'h3',
			content: `About`
		},
		{
			type: 'p',
			content: `Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.`
		}
	],
	prfisma: [
		{
			type: 'h1',
			content: 'Tailwind'
		},
		{
			type: 'h2',
			content: `Rapidly build modern websites without ever leaving your HTML.`
		},
		{
			type: 'h3',
			content: `Brief history`
		},
		{
			type: 'p',
			content: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`
		}
	],
	mongodb: [
		{
			type: 'h1',
			content: 'MongoDB'
		},
		{
			type: 'h2',
			content: `Get your ideas to market faster with a developer data platform built on the leading modern database. MongoDB makes working with data easy.`
		},
		{
			type: 'h3',
			content: `For the next generation of intelligent applications.

			`
		},
		{
			type: 'p',
			content: `Build applications on the industry's first developer data platform. From AI-powered and event-driven apps to edge use cases and search, build fast and at the scale users demand.

			`
		}
	],
	'framer-motion': [
		{
			type: 'h1',
			content: 'Framer Motion'
		},
		{
			type: 'h2',
			content: `Rapidly build modern websites without ever leaving your HTML.`
		},
		{
			type: 'h3',
			content: `Production-ready declarative animations.
			`
		},
		{
			type: 'p',
			content: `A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.`
		},
		{
			type: 'h3',
			content: `Animations that work like magic.
			`
		},
		{
			type: 'p',
			content: `When animating between two separate components, Framer Motion will take care of everything in between.`
		},
		{
			type: 'h3',
			content: `Complex events and gestures.

			`
		},
		{
			type: 'p',
			content: `Framer Motion offers more advanced listeners and also extends the basic set of React event listeners.

			`
		}
	],
	postgresql: [
		{
			type: 'h1',
			content: 'PostgreSQL'
		},
		{
			type: 'h2',
			content: `PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for ...`
		},
		{
			type: 'h3',
			content: `New to PostgreSQL?
			`
		},
		{
			type: 'p',
			content: `PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

			There is a wealth of information to be found describing how to install and use PostgreSQL through the official documentation. The open source community provides many helpful places to become familiar with PostgreSQL, discover how it works, and find career opportunities. Learn more on how to engage with the community.`
		}
	],
	express: [
		{
			type: 'h1',
			content: 'Express'
		},
		{
			type: 'h2',
			content: `Fast, unopinionated, minimalist web framework for`
		},
		{
			type: 'h3',
			content: `Web Applications
			`
		},
		{
			type: 'p',
			content: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
			`
		},
		{
			type: 'h3',
			content: `APIs`
		},
		{
			type: 'p',
			content: `With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
			`
		},
		{
			type: 'h3',
			content: `Performance`
		},
		{
			type: 'p',
			content: `Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
			`
		},
		{
			type: 'h3',
			content: `Frameworks`
		},
		{
			type: 'p',
			content: `Many popular frameworks are based on Express.
			`
		}
	]
}
