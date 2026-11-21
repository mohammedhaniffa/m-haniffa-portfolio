import {createClient} from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const sanityConfigured = Boolean(projectId && projectId !== 'your_project_id');
export const client = createClient({projectId: projectId || 'missing-project-id', dataset, apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01', useCdn: true});
export const imageUrl = (source: any) => source?.asset?._ref ? `https://cdn.sanity.io/images/${projectId}/${dataset}/${source.asset._ref.replace('image-','').replace('-','.')}` : '';
export const projectsQuery = `*[_type == "project"] | order(sortOrder asc, _createdAt desc){_id,title,"slug":slug.current,category,year,location,summary,featured,coverImage{asset->{_id,url,metadata{dimensions}}},gallery[]{asset->{_id,url,metadata{dimensions}}},description}`;
export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(sortOrder asc, _createdAt desc){_id,title,"slug":slug.current,category,year,location,summary,coverImage{asset->{_id,url}}}`;
