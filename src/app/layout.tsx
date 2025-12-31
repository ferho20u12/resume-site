import './globals.css';
import PageContainer from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";
import ThemeInitializer from "@src/shared/components/ThemeInitializer";
import { DEFAULT_LANGUAGE } from '@src/configuration/languages.config';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LANGUAGE}>
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
        <ThemeInitializer />
        <div className="flex flex-col">
          <div className="mx-[2%] md:mx-[15%]">
            <PageContainer>{children}</PageContainer>
            <FooterLinks />
          </div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
