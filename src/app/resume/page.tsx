"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Card from "@src/shared/components/ui/cards/Card";
import HorizontalScrollContainer from "@src/shared/components/HorizontalScrollContainer";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getPreferredLang } from "@src/utils/language";
import {
  RESUME_PDF_BY_LANGUAGE,
  RESUME_PREVIEW_TITLE,
  RESUME_DOWNLOAD_BUTTON_LABEL,
  RESUME_PREVIEW_BUTTON_LABEL,
  RESUME_MOBILE_FALLBACK_TEXT,
  RESUME_FILENAME,
} from "@src/mock/resume.mock";

export default function ResumePage() {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setLang(getPreferredLang());
  }, []);

  if (!isMounted) return null;

  const pdfUrl = RESUME_PDF_BY_LANGUAGE[lang];

  return (
    <Card cardProps={{ nameSeccion: "resume" }}>
      <HorizontalScrollContainer title={RESUME_PREVIEW_TITLE[lang]}>
        <div className="flex flex-col gap-6 items-center w-full">
          
          <a
            href={pdfUrl}
            download={RESUME_FILENAME[lang]}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-(--surface-border) bg-(--surface) text-sm font-medium hover:bg-(--surface-hover) transition"
          >
            <Icon icon="mdi:download" className="text-lg" />
            {RESUME_DOWNLOAD_BUTTON_LABEL[lang]}
          </a>

          <div className="hidden md:block w-full max-w-5xl h-[75vh] rounded-xl overflow-hidden border border-(--surface-border) shadow-sm bg-(--surface-muted)">
            <iframe src={pdfUrl} title="Resume PDF" className="w-full h-full" />
          </div>

          <div className="md:hidden flex flex-col items-center gap-3 text-center">
            <Icon icon="mdi:file-pdf-box" className="text-6xl opacity-70" />
            <p className="text-sm text-(--text-soft) max-w-xs">
              {RESUME_MOBILE_FALLBACK_TEXT[lang]}
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 underline text-sm font-medium"
            >
              <Icon icon="mdi:open-in-new" />
              {RESUME_PREVIEW_BUTTON_LABEL[lang]}
            </a>
          </div>

        </div>
      </HorizontalScrollContainer>
    </Card>
  );
}
