"use client";

import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import Card from "@src/shared/components/ui/Card";
import { getPreferredLang } from "@src/utils/language";
import { useEffect, useState } from "react";

import PROJECT_DATA, { PROJECT_CTA_LABEL, PROJECT_SECTION_TITLE } from "@src/mock/project.mock";
import HorizontalScrollContainer from "@src/shared/components/HorizontalScrollContainer";
import ProjectCard from "./ProjectCard";

export default function PortfolioPage() {
  return (
     <Card cardProps={{ nameSeccion: "portfolio"}}>
        <div className="p-2 md:p-10">
          <HorizontalScrollContainer title={projectTitle}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} roleLabel={projectRoleLabel} ctaLabel={projectCtaLabel} />
            ))}
          </HorizontalScrollContainer>
        </div>
     </Card>
  );
}


