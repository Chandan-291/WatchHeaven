export default function Contact() {
  return (
    <section id="contact" className="bg-card py-20 text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full p-3 rounded text-black" placeholder="Name" />
        <input className="w-full p-3 rounded text-black" placeholder="Email" />
        <textarea className="w-full p-3 rounded text-black" rows="4" placeholder="Message" />
        <button className="bg-primary px-6 py-3 rounded font-bold hover:bg-white hover:text-primary transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
