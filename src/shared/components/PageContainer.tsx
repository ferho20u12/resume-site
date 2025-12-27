export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-green-200 rounded-3xl p-6 grow overflow-y-auto">
      {children}
    </main>
  );
}
