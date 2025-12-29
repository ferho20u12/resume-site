export default function VideoBackground() {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="/background-light.webp"
    >
      <source src="/background-light.mp4" type="video/mp4" />
    </video>
  );
}
