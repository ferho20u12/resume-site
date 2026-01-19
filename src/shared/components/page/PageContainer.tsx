import ThemeInitializer from "./ThemeInitializer";
import FooterContainer from "../footer/FooterContainer";
import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <ThemeInitializer />
      <div className="h-screen flex flex-col" style={{ color: "var(--text)", backgroundImage: "var(--bg-page)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <main className="relative flex-[0.8] overflow-hidden">
          <div className="h-full overflow-y-auto flex justify-center relative fade-overlay">
            <div className="w-full px-[1%] md:px-[20%]">
              {children}
            </div>
          </div>
        </main>
        <FooterContainer />
      </div>
    </>
  );
}