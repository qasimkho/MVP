import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">You are not logged in.</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}</h1>
      <p>Your email: {session.user.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}
