
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import {client, sanityConfigured, featuredProjectsQuery, projectsQuery} from '@/lib/sanity';
import type {Project} from '@/lib/types';

export const revalidate = 60;

export default async function Home(){
 let projects:Project[]=[];
 if(sanityConfigured){
  try{
   projects=await client.fetch(featuredProjectsQuery)
  }catch{
   projects=[]
  }
 }
 if(!projects.length && sanityConfigured){
  try{
   projects=(await client.fetch(projectsQuery)).slice(0,3)
  }catch{}
 }

 return <main id="top">
  <section className="hero wrap">
   <div className="eyebrow"><span className="eyebrow-dot"/> INDEPENDENT DESIGNER & VISUALIZER</div>
   <h1>Spaces with<br/><em>purpose & feeling.</em></h1>
   <div className="hero-bottom">
    <p>I’m M. Haniffa, an interior designer focused on thoughtful spaces, considered details and compelling visual experiences.</p>
    <a className="text-link" href="#work">Explore selected work <span>↓</span></a>
   </div>
   <div className="hero-art">
    <div className="hero-art-note">DESIGN / DETAIL / ATMOSPHERE</div>
    <div className="hero-art-shape shape-one"/>
    <div className="hero-art-shape shape-two"/>
    <div className="hero-art-shape shape-three"/>
    <span className="hero-art-caption">A considered approach to every space.</span>
   </div>
  </section>

  <section className="section wrap" id="work">
   <div className="section-heading">
    <div>
     <div className="eyebrow">01 / SELECTED WORK</div>
     <h2>Projects & explorations</h2>
    </div>
    <span className="muted">A selection of design work</span>
   </div>

   {!sanityConfigured ? (
    <div className="setup-note">
     <span className="setup-number">01</span>
     <div>
      <h3>Your project gallery is ready for your work.</h3>
      <p>Connect the project manager to start adding projects. Once connected, everything you publish in the private dashboard will appear here automatically.</p>
      <a className="text-link" href="/studio">Open project manager ↗</a>
     </div>
    </div>
   ) : projects.length ? (
    <div className="project-grid">
     {projects.map(p=><ProjectCard key={p._id} project={p}/>)}
    </div>
   ) : (
    <div className="empty-state">
     No projects published yet. Add your first project in the <a href="/studio">project manager</a>.
    </div>
   )}

   <div className="all-work">
    <Link className="text-link" href="/projects">View all projects <span>↗</span></Link>
   </div>
  </section>

  <section className="about-section" id="about">
   <div className="wrap about-grid">
    <div>
     <div className="eyebrow">02 / A LITTLE ABOUT ME</div>
     <h2>Designing beyond<br/><em>the visual.</em></h2>
    </div>
    <div className="about-copy">
     <p className="large-copy">Good design is not only how a space looks. It is how it works, how it feels, and how naturally people connect with it.</p>
     <p>I’m an interior designer and 3D visualizer working across commercial interiors, spatial concepts, furniture and architectural visualization. I bring creative thinking together with technical understanding to shape ideas into clear, considered spaces.</p>
     <a href="#contact" className="text-link">More about working together ↗</a>
    </div>
   </div>
  </section>

  <section className="section wrap" id="services">
   <div className="eyebrow">03 / WHAT I DO</div>
   <h2>From first idea<br/><em>to final image.</em></h2>
   <div className="services-grid">
    {[
     ['01','Interior design','Concept development, space planning and interior detailing.'],
     ['02','3D visualization','Photorealistic renders that communicate the design intent.'],
     ['03','Technical drawings','Clear 2D drawings and documentation for execution.'],
     ['04','Furniture design','Custom furniture concepts, modelling and presentation.']
    ].map(([n,t,d])=>(
     <div className="service" key={n}>
      <span>{n}</span>
      <h3>{t}</h3>
      <p>{d}</p>
     </div>
    ))}
   </div>
  </section>

  <section className="contact-section" id="contact">
   <div className="wrap contact-inner">
    <div className="eyebrow">04 / HAVE A PROJECT IN MIND?</div>
    <h2>Let’s make<br/><em>something meaningful.</em></h2>
    <p>For collaborations, freelance enquiries and project discussions.</p>

    <a className="contact-link" href="mailto:mohammedhaniffa14647@gmail.com">
     Get in touch <span>↗</span>
    </a>

    <div className="contact-details">
     <div>
      <h3>Email</h3>
      <a href="mailto:mohammedhaniffa14647@gmail.com">
       mohammedhaniffa14647@gmail.com
      </a>
     </div>

     <div>
      <h3>Saudi Arabia</h3>
      <p>+966 56 215 9404</p>
      <a href="https://wa.me/966562159404" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      {' · '}
      <a href="tel:+966562159404">Call</a>
     </div>

     <div>
      <h3>Sri Lanka</h3>
      <p>+94 76 358 7054</p>
      <a href="https://wa.me/94763587054" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      {' · '}
      <a href="tel:+94763587054">Call</a>
     </div>
    </div>
   </div>
  </section>
 </main>
}
