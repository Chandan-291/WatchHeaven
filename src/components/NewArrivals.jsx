import Card from "./product/Card";
import { arrivals } from "../data/watches";

export default function NewArrivals() {
  return (
    <section id="newarrivals" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-10 text-white">New Arrivals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {arrivals.map(item => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}