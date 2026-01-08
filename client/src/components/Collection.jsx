import Card from "./Card";
import { collection } from "../data/watches";

export default function Collection() {
  return (
    <section id="collection" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Collection</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {collection.map(watch => (
          <Card key={watch.id} {...watch} />
        ))}
      </div>
    </section>
  );
}
