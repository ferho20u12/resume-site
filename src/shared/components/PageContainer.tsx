
export default function PageContainer({ children}: { children: React.ReactNode}) {
  return (
    <main
      className="
        glass
        h-[73vh] overflow-y-auto rounded-2xl
        bg-(--color-bg) bg-opacity-30 
        backdrop-blur-md
        shadow-lg shadow-[rgba(0,0,0,0.25)] 
        p-6 md:pt-10 md:mt-4
      "
    >
      {children}
    </main>


  );
}
