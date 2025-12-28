import { PageParams } from "@src/types/page.types";

export default function PageContainer({ children, pageParams }: { children: React.ReactNode, pageParams: PageParams}) {
  return (
    <main className="
      h-[73vh] sm:h-[73vh] md:h-[73vh] overflow-y-auto rounded-2xl
      bg-gray-800 bg-opacity-30 backdrop-blur-md
      shadow-lg shadow-gray-900/50 drop-shadow-xl
      p-6 md:pt-10 md:mt-4
    ">
      {children}
    </main>

  );
}
