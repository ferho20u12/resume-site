import './globals.css';
import PageContainer from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";
import { cookies } from "next/headers";
import { LANGUAGES } from '@src/configuration/languages.config';
import { THEMES } from '@src/configuration/themes.config';
import { PageParams } from '@src/types/page.types';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();

  const cookieLang = cookieStore.get("lang")?.value ?? "";
  const lang = LANGUAGES.find(l => l.code === cookieLang)?.code ?? "en";

  const cookieTheme = cookieStore.get("theme")?.value ?? "";
  const theme = THEMES[lang].find(t => t.code === cookieTheme)?.code ?? "default";

  const pageParams: PageParams ={
    lang : lang,
    theme : theme,
  }

  return (
    <html lang={lang}>
      <body>
        <div className="flex flex-col">
          <div className="mx-[2%] md:mx-[15%]">
            <PageContainer pageParams={pageParams}>
              {children}
            </PageContainer>

            <FooterLinks pageParams={pageParams} />
          </div>
          <Navbar pageParams={pageParams} />
        </div>
      </body>
    </html>
  );
}
