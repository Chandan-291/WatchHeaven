import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { total, completeOrder } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Payment</h2>

        <input className="w-full p-3 mb-3" placeholder="Card Number" />
        <input className="w-full p-3 mb-3" placeholder="Expiry Date" />
        <input className="w-full p-3 mb-3" placeholder="CVV" />

        <button
          onClick={() => {
            completeOrder();
            navigate("/success");
          }}
          className="antique-btn w-full py-3"
        >
          Pay ${total}
        </button>
      </div>
    </>
  );
}
