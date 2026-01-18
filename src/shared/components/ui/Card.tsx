type CardProps = {
  nameSeccion: string;
};

export default function Card({ 
  children,
  cardProps: { nameSeccion}
}: { cardProps: CardProps; children: React.ReactNode }) {

  return (
    <section
      id={nameSeccion}
      className={`
        relative
        glass
        bg-(--color-bg) bg-opacity-30
        backdrop-blur-md
        shadow-lg shadow-[rgba(0,0,0,0.25)]
        flex flex-col
        min-h-0
        h-full
      `}
    >
      <div className="flex-1 min-h-0 overflow-y-auto">
        {children}
      </div>
    </section>
  );
}

