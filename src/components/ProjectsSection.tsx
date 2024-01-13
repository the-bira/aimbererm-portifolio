import { client } from '@/lib/sanity'
import { Project } from './Project'
import { Section } from './Section'

async function fetchProjects() {
  const query = `
  *[_type == 'projects'] | order(_createdAt desc){
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
      
  }`

  const data = await client.fetch(query)

  return data
}

interface IProjects {
  id: string
  title: string
  smallDescription: string
  url?: string
  github?: string
  titleImage?: any
}

const ProjectsSection = async () => {

  const Projects: IProjects[] = await fetchProjects()

  return (
    <Section className='justify-center mt-1 h-full'>
      <div className="py-24 w-full xl:w-2/3 rounded-md px-10">
        <h1 className="text-4xl text-center font-semibold mt-4">Cases</h1>
        <div className="mt-8 flex-col lg:flex lg:flex-row gap-8">
          {Projects.map((project, index) => (
            <Project
              key={project.id}
              name={project.title}
              description={project.smallDescription}
              url={project.url || ''}
              github={project.github || ''}
              titleImage={project.titleImage || ''}
              className="max-w-50 h-fit"
            />
          ))}
        </div>
      </div>
    </Section>
  )

}

export { ProjectsSection }