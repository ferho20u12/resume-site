type CardProps = {
  nameSeccion: string;
  mode?: "full" | "auto";
};

export default function Card({ 
  children ,
  cardProps: { nameSeccion, mode = "auto"}
}: {cardProps : CardProps ,children: React.ReactNode}) {

  const sizingClass =
    mode === "full"
      ? "h-full w-full"
      : "w-full h-auto";

  return (
    <section
      id={nameSeccion}
      className={`
        relative
        glass
        bg-(--color-bg) bg-opacity-30
        backdrop-blur-md
        shadow-lg shadow-[rgba(0,0,0,0.25)]
        ${sizingClass}
      `}
    >
      {children}
    </section>
  );
}
