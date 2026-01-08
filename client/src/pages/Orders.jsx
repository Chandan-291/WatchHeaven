import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/orders/my-orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(setOrders);
  }, []);

  return (
    <div className="p-10">
      {orders.map(o => (
        <div key={o._id} className="bg-gray-800 p-4 mb-4">
          <p>Total: ${o.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}
