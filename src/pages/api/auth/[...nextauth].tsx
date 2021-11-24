import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => {
        return credentials
      }
    })
  ],
  callbacks: {
    jwt: async (token, data ) => {
      secret: process.env.JWT_TOKEN,
      //  "data" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      data && (token.user = data.user) && (token.person = data.person);
      return Promise.resolve(token)   // ...here
    },
  
    async session(session, token) {      
      return { 
        sessionData: session,
        token: token
      }
    }
  },
})