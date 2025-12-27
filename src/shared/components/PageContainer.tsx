export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
      {children}
    </main>
  );
}
