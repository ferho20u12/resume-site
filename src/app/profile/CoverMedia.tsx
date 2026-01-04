type CoverProfileProps = {
  coverVideos: Record<string, string>;
};

export default function CoverMedia({ coverVideos }: CoverProfileProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-t-2xl mask-b-from-20% mask-b-to-80%">
      {Object.entries(coverVideos).map(([themeKey, src]) => (
        <video
          key={themeKey}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute  w-full h-full object-cover ${themeKey}`}
        />
      ))}
    </div>
  );
}
