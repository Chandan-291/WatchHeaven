export default function Hero() {
  return (
    <section
      className="h-screen flex items-center px-10 bg-cover"
      style={{ backgroundImage: "url('/watch_image/watch1.webp')" }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">Welcome to Watch Haven</h1>
        <p className="text-2xl mb-6">
          Your destination for luxury watches
        </p>
        <a href="#collection"
           className="bg-primary px-6 py-3 rounded font-bold hover:bg-white hover:text-primary transition">
          Explore Collection
        </a>
      </div>
    </section>
  );
}
