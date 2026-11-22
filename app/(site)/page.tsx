
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

      {/* ARCHITECTURAL LINE-ART BANNER */}
      <div className="hero-art">

        <div className="hero-art-note">
          INTERIOR ARCHITECTURE / DESIGN STUDY 01
        </div>

        <svg
          className="architecture-drawing"
          viewBox="0 0 1400 420"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="architectureFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a58b68" stopOpacity=".05"/>
              <stop offset="50%" stopColor="#897c68" stopOpacity=".75"/>
              <stop offset="100%" stopColor="#a58b68" stopOpacity=".12"/>
            </linearGradient>
          </defs>

          {/* Architectural wall elevations */}
          <g
            stroke="#897c68"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".58"
          >
            <path d="M430 350 V65 H1320 V350"/>
            <path d="M455 350 V85 H1295 V350"/>
            <path d="M470 105 H1280"/>
            <path d="M470 315 H1280"/>

            {/* Wall panels */}
            <path d="M490 110 V310 M650 110 V310 M810 110 V310"/>
            <path d="M490 125 H810 M490 290 H810"/>

            {/* Large architectural windows */}
            <path d="M850 110 V310 H1190 V110 Z"/>
            <path d="M1015 110 V310"/>
            <path d="M850 210 H1190"/>
            <path d="M865 125 H1000 M1030 125 H1175"/>

            {/* Ceiling and floor details */}
            <path d="M400 65 H1350 M380 350 H1360"/>
            <path d="M350 370 H1370" strokeDasharray="5 5"/>
            <path d="M430 45 H1320" strokeDasharray="3 5"/>

            {/* Sofa */}
            <path d="M700 270 Q700 245 730 245 H1080 Q1110 245 1110 270 V320 H700 Z"/>
            <path d="M715 270 H1095 V315 H715 Z"/>
            <path d="M730 245 V220 Q730 205 750 205 H1050 Q1080 205 1080 230 V245"/>
            <path d="M850 245 V315 M970 245 V315"/>
            <path d="M720 320 L710 350 M1090 320 L1100 350"/>

            {/* Coffee table */}
            <path d="M770 330 H1060 L1035 345 H790 Z"/>
            <path d="M810 345 L800 365 M1020 345 L1030 365"/>

            {/* Pendant lighting */}
            <path d="M900 65 V130 M1020 65 V130"/>
            <ellipse cx="900" cy="145" rx="28" ry="9"/>
            <ellipse cx="1020" cy="145" rx="28" ry="9"/>

            {/* Indoor tree */}
            <path d="M580 300 V220 M580 245 L550 210 M580 260 L610 220"/>
            <path d="M580 210 Q540 190 550 165 Q570 150 580 180 Q600 145 620 165 Q630 190 600 210"/>
            <path d="M555 300 H605 L595 320 H565 Z"/>

            {/* Architectural dimensions */}
            <path d="M430 35 V390 M1320 35 V390" strokeDasharray="3 5" opacity=".5"/>
            <path d="M420 55 H440 M420 350 H440 M1310 55 H1330 M1310 350 H1330"/>
          </g>

          {/* Fine construction guide lines */}
          <g stroke="url(#architectureFade)" strokeWidth=".8">
            <path d="M430 390 H1320"/>
            <path d="M430 385 V395 M1320 385 V395"/>
            <path d="M650 110 V65 M810 110 V65 M1015 110 V65"/>
            <path d="M680 350 V375 M1150 350 V375"/>
            <path d="M350 350 L430 350 M1320 350 L1380 350"/>
          </g>

          {/* Subtle dimension markers */}
          <g
            fill="#897c68"
            fontSize="10"
            fontFamily="Arial, sans-serif"
            opacity=".7"
          >
            <text x="415" y="200" transform="rotate(-90 415 200)">ELEVATION 01</text>
            <text x="820" y="390">INTERIOR STUDY</text>
            <text x="1300" y="390" textAnchor="end">01 / 01</text>
          </g>
        </svg>

        <div className="hero-art-caption">
          A considered approach to every space.
        </div>

      </div>
    </section>

    <section className="section wrap" id="work">
      <div className="section-heading">
        <div>
          <div className="eyebrow">01 / SELECTED WORK</div>
          <h2>Projects & Explorations</h2>
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
