import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'John',
    lastName: 'Asemota',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer',
    avatar: '/images/avatar.jpg',
    location: 'Africa/Lagos',
    languages: ['English', 'Bini', 'Yoruba']
}

const newsletter = {
    display: true,
    title: <>Start a project with {person.firstName}</>,
    description: <>Interested in collaborating? Let’s schedule a time to connect—I’ll take care of the coffee!</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/jawnchuks',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jawnchuks/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:jawnchuks@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer and a cool guy</>,
    subline: <>I'm John, a software engineer at <InlineCode>VKM</InlineCode>, passionate about crafting elegant solutions to complex problems, contributing to open-source, and building stunning websites with seamless user experiences.<br /> </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm John, a Nigerian based software engineer working at VKM. I enjoy finding smart ways to solve tough problems with software. My work involves designing systems that can handle a lot of users, improving backend performance, and creating strong APIs. I also focus on making sure the software runs smoothly and is easy for people to use. I love contributing to open-source projects and taking on challenges that require deep thinking and careful planning.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'VKM',
                timeframe: '2021 - Present',
                role: 'Software Engineer',
                achievements: [
                    <>Designed and developed scalable management systems for internal and external stakeholders.</>,
                    <>Built and maintained a robust design system to ensure consistency and reusability across multiple applications.</>,
                    <>Led data cleaning efforts to ensure accurate and reliable datasets for analytics and reporting</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'EazyBillz',
                timeframe: '2023 - 2024',
                role: 'Lead Frontend Developer',
                achievements: [
                    <>Built and optimized frontend architectures for high-performance and scalable web applications</>,
                    <>Spearheaded the development of an intuitive design system, enabling a consistent and efficient user experience across all applications.</>,
                    <>Collaborated with cross-functional teams to implement new features and ensure alignment with product goals.</>
                ],
                images: []
            },
            {
                company: 'Freelance',
                timeframe: '2019 - 2024',
                role: 'Self-Employed Software Developer',
                achievements: [
                    <>Designed and implemented custom systems for startups, individual clients, and established businesses.</>,
                    <>Built user-friendly e-commerce platforms tailored to client specifications, enabling seamless online transactions.</>,
                    <>Delivered scalable solutions for end-users, including CRM tools and task management systems.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Landmark University',
                description: <>Studied chemical engineering.</>,
            },
            {
                name: 'HiiT',
                description: <>Enrolled in a web development bootcamp.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Python',
                description: <>Experienced in using Python for backend development, automation scripts, and data analysis. I also work with frameworks such as Django and Flask to build robust systems.</>,
                images: []
            },
            {
                title: 'React Native',
                description: <>Proficient in React Native for building cross-platform mobile applications, delivering seamless user experiences across iOS and Android devices.</>,
                images: []
            },
            {
                title: 'ODK',
                description: <>Skilled in using ODK (Open Data Kit) for data collection and management, particularly in field-based environments and research projects.</>,
                images: []
            },
            {
                title: 'R Programming & Excel',
                description: <>Experienced with R programming and Excel for data analysis, creating visualizations, and performing statistical modeling to derive insights.</>,
                images: []
            },
            {
                title: 'Figma',
                description: <>Proficient in using Figma for designing user interfaces and prototypes. I ensure that my designs are user-friendly and work seamlessly with development teams for efficient implementation.</>,
                images: []
            },
            {
                title: 'Next.js',
                description: <>Skilled in building modern, fast-loading web applications with Next.js, utilizing features like server-side rendering, API routes, and static site generation for optimal performance.</>,
                images: []
            },
            {
                title: 'React.js',
                description: <>Experienced in using React.js to build dynamic, interactive web applications with reusable components. I manage state effectively with tools such as Redux and Context API.</>,
                images: []
            },
            {
                title: 'Node.js',
                description: <>Proficient in using Node.js for backend services and API development, with experience in frameworks like Express.js and integrating databases for data-driven applications.</>,
                images: []
            },
            {
                title: 'TypeScript',
                description: <>Skilled in writing scalable and reliable JavaScript applications with TypeScript, ensuring better code quality and minimizing errors.</>,
                images: []
            },
            {
                title: 'Database Management',
                description: <>Experienced in working with relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB. I focus on designing efficient schemas and optimizing database performance.</>,
                images: []
            },
            {
                title: 'Version Control & CI/CD',
                description: <>Proficient in using Git for version control and setting up CI/CD pipelines with tools such as GitHub Actions and Jenkins to streamline deployments.</>,
                images: []
            },
            {
                title: 'Cloud Services',
                description: <>Experienced in deploying and managing applications on cloud platforms like AWS (EC2, S3, Lambda) and using Vercel for frontend hosting.</>,
                images: []
            },
            {
                title: 'Automation & Scripting',
                description: <>Skilled in writing automation scripts using Python and Bash for handling repetitive tasks, cleaning data, and web scraping efficiently.</>,
                images: []
            },
            {
                title: 'Testing & Debugging',
                description: <>Experienced in testing and debugging software using tools like Jest, Mocha, and Selenium to ensure the stability and functionality of applications before deployment.</>,
                images: []
            },
        ]
    }



    // {
    //     title: 'Testing & Debugging',
    //     description: <>I test and debug software effectively using tools like Jest, Mocha, and Selenium to ensure everything works as expected before deployment.</>,
    //     images: [
    //         // {
    //         //     src: '/images/projects/testing/cover-01.jpg',
    //         //     alt: 'Testing project example',
    //         //     width: 16,
    //         //     height: 9
    //         // },
    //     ]
    // },
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };