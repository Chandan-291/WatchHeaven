import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function OrderHistory() {
  const { orders } = useCart();

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl mb-6">Order History</h1>

        {!orders.length && <p>No orders yet</p>}

        {orders.map(order => (
          <div key={order.id} className="antique-card p-4 mb-4 rounded">
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>

            <ul className="mt-2">
              {order.items.map(item => (
                <li key={item.id}>
                  {item.name} × {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
