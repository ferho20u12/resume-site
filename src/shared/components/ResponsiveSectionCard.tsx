"use client";

import HorizontalScrollContainer from "@src/shared/components/HorizontalScrollContainer";
import Card from "@src/shared/components/ui/Card";
import React from "react";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface ResponsiveSectionCardProps {
  mobileSections: Section[];
  desktopCard: {
    title: string;
    sections: Section[];
  };
}

export default function ResponsiveSectionCard({
  mobileSections,
  desktopCard,
}: ResponsiveSectionCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* ---------------- Mobile ---------------- */}
      <div className="flex flex-col gap-4 md:hidden">
        {mobileSections.map((section, idx) => (
          <Card key={idx} cardProps={{ nameSeccion: section.title}}>
            <HorizontalScrollContainer
              title={section.title}
              className="py-2 px-4"
            >
              {section.content}
            </HorizontalScrollContainer>
          </Card>
        ))}
      </div>

      {/* ---------------- Desktop / Tablet ---------------- */}
      <div className="hidden md:block">
        <Card cardProps={{ nameSeccion: desktopCard.title}}>
          <div className="flex flex-col gap-6">
            {desktopCard.sections.map((section, idx) => (
              <HorizontalScrollContainer
                key={idx}
                title={section.title}
                className="py-2 px-4"
              >
                {section.content}
              </HorizontalScrollContainer>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
