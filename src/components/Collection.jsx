import Card from "../components/Card";
import { collection } from "../data/products";

export default function Collection() {
  return (
    <section id="collection" className="py-20 text-center bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-white">Our Collection</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collection.map(watch => (
            <Card key={watch.id} product={watch} />
          ))}
        </div>
      </div>


    </section>
  );
}
