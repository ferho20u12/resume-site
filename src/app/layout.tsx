import BottomNavbar from "@src/shared/components/navbar/BottomNavbar";
import FloatingLangButton from "@src/shared/components/FloatingLangButton";
import "@src/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <FloatingLangButton />
        <BottomNavbar />
      </body>
    </html>
  );
}
