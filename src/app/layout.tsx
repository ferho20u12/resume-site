import './globals.css';
import PageContainer from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";
import { cookies } from "next/headers";

export default async function RootLayout({ children }: {children : React.ReactNode}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "es" ? "es" : "en";


  return (
    <html lang={lang}>
      <body className="flex flex-col h-screen">
        <div className="mx-[2%] md:mx-[15%] flex flex-col h-[80vh] overflow-hidden">
          <PageContainer>{children}</PageContainer>
          <FooterLinks lang={lang} />
        </div>
        <Navbar lang={lang} />
      </body>
    </html>
  );
}
