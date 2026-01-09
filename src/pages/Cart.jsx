import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <>
      <Navbar />
      <div className="p-10">
        {!cart.length && <p>Your cart is empty</p>}

        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-4">
            <p>{item.name}</p>

            <select
              value={item.quantity}
              onChange={e =>
                updateQuantity(item.id, Number(e.target.value))
              }
            >
              {[1,2,3,4,5].map(n => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <p>${item.price * item.quantity}</p>

            <button onClick={() => removeFromCart(item.id)}>❌</button>
          </div>
        ))}

        <p className="text-xl mt-6">Total: ${total}</p>

        <Link to="/checkout" className="antique-btn inline-block mt-4 px-6 py-3 rounded">
          Checkout
        </Link>
      </div>
    </>
  );
}
