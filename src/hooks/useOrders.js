import { useEffect, useState } from "react";
import { fetchOrders } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function useOrders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (token) fetchOrders(token).then(setOrders);
  }, [token]);

  return orders;
}
