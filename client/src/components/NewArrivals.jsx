import Card from "./Card";
import { arrivals } from "../data/watches";

export default function NewArrivals() {
  return (
    <section id="newarrivals" className="py-20">
      <h2 className="text-4xl text-center font-bold mb-10">New Arrivals</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {arrivals.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
