import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <Navbar />
      <div className="h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Order Successful</h1>
        <p className="mt-4">Your antique timepiece is on its way.</p>

        <Link to="/" className="antique-btn mt-6 px-6 py-3 rounded">
          Continue Shopping
        </Link>
      </div>
    </>
  );
}
