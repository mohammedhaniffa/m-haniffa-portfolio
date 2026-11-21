import ProjectCard from '@/components/ProjectCard';
import {client,sanityConfigured,projectsQuery} from '@/lib/sanity';
import type {Project} from '@/lib/types';
export const revalidate=60;
export default async function Projects(){let projects:Project[]=[];if(sanityConfigured){try{projects=await client.fetch(projectsQuery)}catch{}}return <main className="wrap listing-page"><div className="eyebrow">PORTFOLIO / INDEX</div><h1>Selected <em>work.</em></h1><p className="listing-intro">A collection of interiors, concepts and visual explorations.</p>{projects.length?<div className="project-grid">{projects.map(p=><ProjectCard key={p._id} project={p}/>)}</div>:<div className="empty-state">Your published projects will appear here. <a href="/studio">Open the project manager</a> to add your first one.</div>}</main>}
