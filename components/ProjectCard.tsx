import Link from 'next/link';
import type {Project} from '@/lib/types';

export default function ProjectCard({project}: {project: Project}) {
  const image = project.coverImage?.asset?.url;
  return <Link className="project-card" href={`/projects/${project.slug}`}>
    <div className="project-image">{image ? <img src={image} alt={project.title}/> : <div className="image-placeholder"><span>MH / {project.category}</span></div>}<span className="view-project">View project ↗</span></div>
    <div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}{project.location ? ` · ${project.location}` : ''}</p></div>{project.year && <span>{project.year}</span>}</div>
  </Link>;
}
