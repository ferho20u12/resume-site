'use client';

import './globals.css';
import PageContainer from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";
import { ThemeInitializer } from "@src/shared/components/ThemeInitializer";
import { PageParams } from '@src/types/page.types';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Valores por defecto para export estático
  const defaultLang = "en";
  const defaultTheme = "system"; // se corrige en cliente

  const pageParams: PageParams = { lang: defaultLang, theme: defaultTheme };

  return (
    <html lang={defaultLang}>
      <body
        className="min-h-screen"
        style={{
          color: "var(--text)",
          backgroundImage: "var(--bg-page)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Ajusta theme en cliente */}
        <ThemeInitializer initialTheme={defaultTheme} />

        <div className="flex flex-col">
          <div className="mx-[2%] md:mx-[15%]">
            <PageContainer pageParams={pageParams}>{children}</PageContainer>
            <FooterLinks pageParams={pageParams} />
          </div>
          <Navbar pageParams={pageParams} />
        </div>
      </body>
    </html>
  );
}
