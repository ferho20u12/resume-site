export default function VideoBackground() {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="/background-light.webp" // depende el theme, lo vemos abajo
    >
      <source src="/background-light.mp4" type="video/mp4" />
    </video>
  );
}
