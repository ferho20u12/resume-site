type CardProps = {
  nameSeccion: string;
  mode?: "full" | "auto";
};

export default function Card({ 
  children,
  cardProps: { nameSeccion, mode = "auto" }
}: { cardProps: CardProps; children: React.ReactNode }) {

  // Para "auto", limitamos altura máxima a la pantalla para scroll
  const sizingClass =
    mode === "full"
      ? "h-full w-full"
      : "w-full max-h-[80vh]"; // tailwind max-height: 80% de viewport

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
        ${sizingClass}
      `}
    >
      <div className="flex-1 min-h-0 overflow-y-auto">
        {children}
      </div>
    </section>
  );
}

