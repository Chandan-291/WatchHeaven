import { useCart } from "../context/CartContext";

export default function Card({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 p-4 rounded">
      <img src={product.image} className="mb-3 rounded" />
      <h3 className="font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-600 px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
