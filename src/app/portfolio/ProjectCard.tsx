import { Icon } from "@iconify/react";
import { Project } from "@src/models/project.model";
import ExpandableText from "@src/shared/components/text/ExpandableText";

interface ProjectCardProps { project: Project; roleLabel: string; ctaLabel: string }

export default function ProjectCard({ project, roleLabel, ctaLabel }: ProjectCardProps) {
  return (
    <article aria-label={`Project ${project.title}`} className="group flex-none w-80 md:w-96 flex flex-col rounded-2xl border border-(--surface-border) bg-(--surface) shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="p-4 pt-5">
        <div className="relative h-40 w-full overflow-hidden rounded-xl bg-(--surface-muted) border border-(--surface-border) transition-transform duration-300 group-hover:scale-[1.02]">
          <img src={project.imageUrl || "/img/projects/placeholder.jpg"} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold text-(--text)">{project.title}</h3>
        <div className="flex items-center gap-2 text-sm text-(--text-soft)">
          <Icon icon="mdi:account-badge-outline" className="text-base" />
          <span className="font-medium">{roleLabel}:</span>
          <span>{project.role}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-1 rounded-full bg-(--surface-muted) px-3 py-1 text-xs font-medium text-(--text-soft)">
              <Icon icon="mdi:tools" className="text-sm" />
              {tech}
            </span>
          ))}
        </div>
        <ExpandableText lines={5}>{project.description}</ExpandableText>
      </div>
      {project.siteUrl && (
        <div className="mt-auto px-4 pb-4">
          <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-(--surface-border) px-4 py-2 text-sm font-medium text-(--text) transition-colors hover:bg-(--surface-hover)">
            <Icon icon="mdi:open-in-new" className="text-base" />
            {ctaLabel}
          </a>
        </div>
      )}
    </article>
  );
}
