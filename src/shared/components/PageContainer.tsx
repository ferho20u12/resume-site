
export default function PageContainer({ children}: { children: React.ReactNode}) {
  return (
    <main className="h-[70vh] overflow-y-auto rounded-2xl p-4">
      {children}
    </main>


  );
}
