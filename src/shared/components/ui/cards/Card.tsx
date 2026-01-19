type CardProps = {
  nameSeccion: string;
};

export default function Card({ children, cardProps: { nameSeccion } }: { cardProps: CardProps; children: React.ReactNode }) {
  return (
    <section id={nameSeccion} className="relative flex flex-col h-full min-h-0 rounded-(--radius) bg-(--surface) border border-(--surface-border) shadow-(--shadow-glass) backdrop-blur-md p-0.5">
      <div className="flex-1 min-h-0 overflow-y-auto rounded-[calc(var(--radius)-2px)]">
        {children}
      </div>
    </section>
  );
}
