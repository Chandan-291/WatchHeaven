import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, total } = useCart();

  const placeOrder = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ products: cart, totalAmount: total }),
    });
    alert("Order placed");
  };

  return (
    <button onClick={placeOrder} className="bg-red-600 p-4">
      Place Order (${total})
    </button>
  );
}
