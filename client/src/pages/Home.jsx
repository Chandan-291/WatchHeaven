import useProducts from "../hooks/useProducts";
import Card from "../components/Card";

export default function Home() {
  const products = useProducts();
  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {products.map(p => (
        <Card key={p._id} product={p} />
      ))}
    </div>
  );
}
