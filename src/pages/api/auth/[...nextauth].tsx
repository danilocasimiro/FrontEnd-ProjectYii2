import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

interface User {
  id: string
  email: string,
  name: string,
  type: string,
  token: string,
  friendly_id: string
}

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials: User) => {
        const user = { 
          email: credentials.email, 
          name: credentials.name, 
          type: credentials.type, 
          token: credentials.token, 
          id: credentials.id,
          friendly_id: credentials.friendly_id
        }

        if(user) {
          return user
        } 
    

        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = user.token
        token.type = user.type
        token.id = user.id
        token.friendly_id = user.friendly_id
      }
   
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.token = token.accessToken
      session.user.type = token.type
      session.user.id = token.id
      session.user.friendly_id = token.friendly_id
      return session
    }
  },
  secret: "test",
 
  pages: {
    signIn: "auth/sigin",
  },
});