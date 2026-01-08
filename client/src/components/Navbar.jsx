export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-5">
      <img src="/watch_image/watchlogo.png" className="h-14" />
      <nav className="space-x-6 font-bold">
        {["Home", "About", "Collection", "New Arrivals", "Contact"].map(item => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`}
             className="hover:text-primary transition">
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
