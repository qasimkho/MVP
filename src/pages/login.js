import { signIn } from "next-auth/react";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signIn("credentials", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div>
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
