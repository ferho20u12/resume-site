

// export default async function RootLayout({ children }: { children: React.ReactNode }) {
//   const cookieStore = await cookies();

//   const lang = LANGUAGES.find(l => l.code === (cookieStore.get("lang")?.value ?? ""))?.code ?? "en";
//   const theme = THEMES[lang].find(t => t.code === (cookieStore.get("theme")?.value ?? ""))?.code ?? "system";

//   const pageParams: PageParams = { lang, theme };

//   return (
//     <html lang={lang} data-theme={theme}>
//       <body
//         className="min-h-screen"
//         style={{
//           color: "var(--text)",
//           backgroundImage: "var(--bg-page)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="flex flex-col">
//           <div className="mx-[2%] md:mx-[15%]">
//             <PageContainer pageParams={pageParams}>
//             {children}
//             </PageContainer>
//             <FooterLinks pageParams={pageParams} />
//           </div>
//           <Navbar pageParams={pageParams} />
//         </div>
//       </body>
//     </html>
//   );
// }
import './globals.css';
import PageContainer from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";
import { cookies } from "next/headers";
import { LANGUAGES } from '@src/configuration/languages.config';
import { THEMES } from '@src/configuration/themes.config';
import { PageParams } from '@src/types/page.types';
import { ThemeInitializer } from "@src/shared/components/ThemeInitializer";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const lang = LANGUAGES.find(l => l.code === (cookieStore.get("lang")?.value ?? ""))?.code ?? "en";
  const cookieTheme = cookieStore.get("theme")?.value ?? "system";
  const initialTheme = THEMES[lang].find(t => t.code === (cookieTheme)) ? cookieTheme : "system";
  const pageParams: PageParams = { lang, theme: cookieTheme };

  return (
    <html lang={lang}>
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
        <ThemeInitializer initialTheme={initialTheme} />
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
