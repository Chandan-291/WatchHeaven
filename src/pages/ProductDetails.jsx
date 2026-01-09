import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <Navbar />
      <div className="p-10 grid md:grid-cols-2 gap-10">
        <img src={product.image} />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4">{product.description}</p>
          <p className="mt-4 text-xl">${product.price}</p>

          <div className="mt-4">
            Qty:
            <select
              value={qty}
              onChange={e => setQty(Number(e.target.value))}
              className="ml-3 p-2"
            >
              {[1,2,3,4,5].map(n => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              for (let i = 0; i < qty; i++) addToCart(product);
            }}
            className="antique-btn mt-6 px-6 py-3 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
