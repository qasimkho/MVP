export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password"
        ) {
          return { id: 1, name: "Test User", email: "test@example.com" };
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to login on error
  },
  secret: process.env.NEXTAUTH_SECRET || "mysecret", // Ensure a secret is set
});
