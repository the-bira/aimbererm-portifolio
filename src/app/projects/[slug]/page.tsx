import { client } from '@/lib/sanity';
import { Key } from 'react';
import { urlFor } from '@/lib/sanity'
import Image from 'next/image';
import { PortableText } from '@portabletext/react'

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function fetchProject(slug: string) {
  const query = `*[_type == 'projects' && _id == $slug][0]{
    _id,
    title,
    slug,
    type,
    titleImage,
    smallDescription,
    content
  }`;

  const project = await client.fetch(query, { slug });
  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {

  const { slug } = params;

  const project = await fetchProject(slug);

  return (
    <div className="mt-32 w-full flex justify-center">
      <div className=' lg:w-2/3 w-full flex flex-col items-center '>
        <h1 className='sm:text-4xl text-3xl text-center leading-8 font-bold tracking-tight'>{project.title}</h1>
        <Image src={urlFor(project.titleImage).url()} alt={project.title} priority width={1000} height={1000} className='mt-8 rounded' style={{ objectFit: 'cover', width: '100%', maxHeight: '500px' }} />
        <p className='mt-8 text-slate-400'>{project.smallDescription}</p>
        <div className="mt-16 w-full prose prose-xl dark:prose-invert">
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  )




}