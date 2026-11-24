
'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import type {CSSProperties, FocusEvent} from 'react';
import type {Project} from '@/lib/types';

export default function CoverflowCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const slides = projects.filter((project) =>
    Boolean(project.coverImage?.asset?.url && project.slug),
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keep the active slide within range if the project list changes.
  useEffect(() => {
    setActiveIndex((current) =>
      slides.length ? current % slides.length : 0,
    );
  }, [slides.length]);

  // Automatic horizontal movement.
  useEffect(() => {
    if (paused || slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  if (!slides.length) {
    return (
      <div className="coverflow-empty">
        <span>SELECTED PROJECTS</span>
        <p>Your project previews will appear here.</p>
      </div>
    );
  }

  const move = (direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + slides.length) % slides.length,
    );
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (
      !event.currentTarget.contains(
        event.relatedTarget as Node | null,
      )
    ) {
      setPaused(false);
    }
  };

  return (
    <div
      className="coverflow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
      aria-label="Featured project gallery"
    >
      <div className="coverflow-stage">
        {slides.map((project, index) => {
          let offset =
            (index - activeIndex + slides.length) % slides.length;

          if (offset > slides.length / 2) {
            offset -= slides.length;
          }

          if (Math.abs(offset) > 2) return null;

          const distance = Math.abs(offset);

          const style: CSSProperties = {
            zIndex: 10 - distance,
            opacity:
              distance === 0 ? 1 : distance === 1 ? 0.78 : 0.38,
            filter:
              distance === 0
                ? 'blur(0px)'
                : distance === 1
                  ? 'blur(1.5px)'
                  : 'blur(3px)',
            transform: `
              translateX(calc(-50% + ${offset * 68}%))
              rotateY(${-offset * 24}deg)
              scale(${distance === 0 ? 1 : distance === 1 ? 0.79 : 0.66})
            `,
            pointerEvents: distance > 1 ? 'none' : 'auto',
          };

          return (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className={`coverflow-slide ${
                distance === 0 ? 'is-active' : ''
              }`}
              style={style}
              aria-label={`View ${project.title}`}
              tabIndex={distance > 1 ? -1 : 0}
            >
              <img
                src={project.coverImage?.asset?.url}
                alt={project.title}
                draggable={false}
                loading={distance === 0 ? 'eager' : 'lazy'}
              />

              <div className="coverflow-image-shade" />

              <div className="coverflow-caption">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <span className="coverflow-view">
                  VIEW PROJECT ↗
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="coverflow-controls">
        <span className="coverflow-count">
          {String(activeIndex + 1).padStart(2, '0')}
          <span> / </span>
          {String(slides.length).padStart(2, '0')}
        </span>

        <div className="coverflow-buttons">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous project"
            disabled={slides.length < 2}
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next project"
            disabled={slides.length < 2}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
