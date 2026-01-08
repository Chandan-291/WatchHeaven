import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const submit = async e => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    login(await res.json());
  };

  return (
    <form onSubmit={submit} className="p-10 space-y-4">
      <input name="email" className="p-3 w-full text-black" />
      <input name="password" type="password" className="p-3 w-full text-black" />
      <button className="bg-red-600 p-3">Login</button>
    </form>
  );
}
