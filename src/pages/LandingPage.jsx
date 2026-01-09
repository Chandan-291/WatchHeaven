import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import NewArrivals from "../components/NewArrivals";
import Contact from "../components/Contact";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Collection />
      <NewArrivals />
      <Contact />
    </div>
  );
}