import Image from 'next/image';
import type { Project } from '@/lib/content';
import { directions, projectsHeadingParts, projectsNote } from '@/lib/content';

/* Section titles on the live site are one filled phrase plus one outline phrase
   ("Останні <span>Проєкти</span>"), and every thumbnail carries the brand badge
   of the department that did the job. */
export default function ProjectGrid({ projects, showNote = false }: { projects: Project[]; showNote?: boolean }) {
  return (
    <section className="projects">
      <div className="projects__head">
        <h2 className="projects__title">
          {projectsHeadingParts.lead}
          <span className="stroke">{projectsHeadingParts.stroke}</span>
        </h2>
        {showNote && <span className="projects__note">{projectsNote}</span>}
      </div>
      <div className="projects__grid">
        {projects.map((p) => {
          const dept = directions[p.dept ?? 'builds'];
          return (
            <a href="/portfolio" className="projectCard" key={p.name}>
              <span className="projectCard__frame">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: p.pos ?? '50% 50%' }}
                />
                <span className="brandBadge">
                  <Image src={dept.logo} alt={dept.name} width={32} height={32} />
                </span>
              </span>
              <span className="projectCard__meta">
                <span>{p.name}</span>
                <span className="projectCard__area">{p.area}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
