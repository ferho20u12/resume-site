import './globals.css';
import PageContainer  from "@src/shared/components/PageContainer";
import FooterLinks from "@src/shared/components/FooterLinks";
import Navbar from "@src/shared/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col h-screen">
        <div className="mx-[2%] md:mx-[15%] flex flex-col h-[80vh] overflow-hidden">        
          <PageContainer>{children}</PageContainer>
          <FooterLinks />
        </div>
        <Navbar />
      </body>
    </html>
  );
}

