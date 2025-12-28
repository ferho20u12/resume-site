import './globals.css';
import PageContainer from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";
import { cookies } from "next/headers";
import { LANGUAGES } from '@src/configuration/languages.config';

export default async function RootLayout({ children }: {children : React.ReactNode}) {
  const cookieStore = await  cookies();
  const cookieLang = cookieStore.get("lang")?.value ?? "";
  const langObj = LANGUAGES.find(lang => lang.code === cookieLang);
  const lang = langObj ? langObj.code : "en";
  return (
    <html lang={lang}> 
      <body>
        <div className='flex flex-col'>
          <div className="mx-[2%] md:mx-[15%]">
            <PageContainer>{children}</PageContainer>
            <FooterLinks lang={lang} />
          </div>
          <Navbar lang={lang} />
        </div>
      </body>
    </html>
  );
}
