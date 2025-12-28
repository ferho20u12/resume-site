export default function PageContainer({ children }: { children: React.ReactNode}) {
  return (
    <main className="
      h-[80vh] sm:h-[80vh] md:h-[80vh] overflow-y-auto rounded-2xl
      bg-gray-800 bg-opacity-30 backdrop-blur-md
      shadow-lg shadow-gray-900/50 drop-shadow-xl
      p-6 md:pt-10 md:mt-4
    ">
      {children}
    </main>

  );
}
