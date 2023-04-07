import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // database: process.env.DB_URI,
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: process.env.SECRET_KEY,
  // },
  // callbacks: {
  //   async jwt(token, user) {
  //     token.id = user.id;
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
});
