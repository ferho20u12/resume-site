type HoverCardProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function HoverCard({ id, children, className = "" }: HoverCardProps) {
  return (
    <section
      id={id}
      className={`group relative flex flex-col h-full min-h-0 rounded-(--radius) border border-(--surface-border) bg-(--surface) shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-0.5 ${className}`}
    >
      <div className="flex-1 min-h-0 rounded-[calc(var(--radius)-2px)] transition-transform duration-300 group-hover:scale-[1.01]">
        {children}
      </div>
    </section>
  );
}
