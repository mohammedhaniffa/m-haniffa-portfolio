
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import {client, sanityConfigured, featuredProjectsQuery, projectsQuery} from '@/lib/sanity';
import type {Project} from '@/lib/types';

export const revalidate = 60;

const software = [
  {name:'AutoCAD', image:'/software/01-autocad.png'},
  {name:'3ds Max', image:'/software/02-3ds-max.png'},
  {name:'SketchUp', image:'/software/03-sketchup.png'},
  {name:'V-Ray', image:'/software/04-v-ray.png'},
  {name:'Corona', image:'/software/05-corona.png'},
  {name:'Lumion', image:'/software/06-lumion.png'},
  {name:'Photoshop', image:'/software/07-photoshop.png'},
  {name:'Illustrator', image:'/software/08-illustrator.png'},
  {name:'InDesign', image:'/software/09-indesign.png'},
  {name:'SketchBook Pro', image:'/software/10-sketchbook-pro.png'},
  {name:'Microsoft Office', image:'/software/11-microsoft-office.png'},
];

export default async function Home(){
  let projects:Project[]=[];

  if(sanityConfigured){
    try{
      projects=await client.fetch(featuredProjectsQuery);
    }catch{
      projects=[];
    }
  }

  if(!projects.length && sanityConfigured){
    try{
      projects=(await client.fetch(projectsQuery)).slice(0,3);
    }catch{}
  }

  return <main id="top">

    <section className="hero wrap">
      <div className="eyebrow">
        <span className="eyebrow-dot"/> INDEPENDENT DESIGNER & VISUALIZER
      </div>

      <h1>Spaces with<br/><em>purpose & feeling.</em></h1>

      <div className="hero-bottom">
        <p>
          I’m M. Haniffa, an Interior Designer and Architectural 3D Visualizer
          with professional experience in Sri Lanka and Saudi Arabia.
          Since beginning my career in 2023, I’ve worked across interior design,
          commercial spaces, exhibition stands, event booths and architectural
          visualization. My skills combine creative concept development,
          technical drawings, 3D modelling, material and lighting development,
          photorealistic rendering and production coordination.
        </p>

        <a className="text-link" href="#work">
          Explore selected work <span>↓</span>
        </a>
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
          <p className="large-copy">
            Good design is not only how a space looks. It is how it works,
            how it feels, and how naturally people connect with it.
          </p>
          <p>
            I’m an interior designer and 3D visualizer working across commercial
            interiors, spatial concepts, furniture and architectural visualization.
            I bring creative thinking together with technical understanding to
            shape ideas into clear, considered spaces.
          </p>
          <a href="#contact" className="text-link">More about working together ↗</a>
        </div>
      </div>
    </section>

    <section className="software-section" id="software">
      <div className="wrap">
        <div className="eyebrow">03 / SOFTWARE & TOOLS</div>
        <h2>Tools behind<br/><em>the ideas.</em></h2>
      </div>

      <div className="software-marquee">
        <div className="software-track">
          <div className="software-group">
            {software.map(item=>(
              <div className="software-item" key={item.name}>
                <img src={item.image} alt={item.name}/>
              </div>
            ))}
          </div>

          <div className="software-group" aria-hidden="true">
            {software.map(item=>(
              <div className="software-item" key={item.name}>
                <img src={item.image} alt=""/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section wrap" id="services">
      <div className="eyebrow">04 / WHAT I DO</div>
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
        <div className="eyebrow">05 / HAVE A PROJECT IN MIND?</div>
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

  </main>;
}
