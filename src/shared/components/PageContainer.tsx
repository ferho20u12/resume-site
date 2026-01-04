
export default function PageContainer({ children}: { children: React.ReactNode}) {
  return (
    <main className="h-[73vh] overflow-y-auto rounded-2xl p-4 md:pt-10 md:mt-4">
      {children}
    </main>


  );
}
