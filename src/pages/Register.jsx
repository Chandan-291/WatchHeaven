export default function Register() {
  const submit = async e => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    alert("Registered!");
  };

  return (
    <form onSubmit={submit} className="p-10 space-y-4">
      <input
  name="name"
  autoComplete="name"
  className="p-3 text-black w-full"
/>

<input
  name="email"
  type="email"
  autoComplete="email"
  className="p-3 text-black w-full"
/>

<input
  type="password"
  name="password"
  autoComplete="new-password"
  className="p-3 text-black w-full"
/>

      <button className="bg-red-600 p-3 text-white">Register</button>
    </form>
  );
}
