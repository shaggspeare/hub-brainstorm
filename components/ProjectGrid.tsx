import Image from 'next/image';
import type { Project } from '@/lib/content';
import { projectsHeading, projectsNote } from '@/lib/content';

export default function ProjectGrid({ projects, showNote = false }: { projects: Project[]; showNote?: boolean }) {
  return (
    <section className="projects">
      <div className="projects__head">
        <h2 className="projects__title">{projectsHeading}</h2>
        {showNote && <span className="projects__note">{projectsNote}</span>}
      </div>
      <div className="projects__grid">
        {projects.map((p) => (
          <a href="#" className="projectCard" key={p.name}>
            <span className="projectCard__frame">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: p.pos ?? '50% 50%' }}
              />
            </span>
            <span className="projectCard__meta">
              <span>{p.name}</span>
              <span className="projectCard__area">{p.area}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
