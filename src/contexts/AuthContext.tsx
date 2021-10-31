import { createContext, ReactNode } from "react";
import Router from 'next/router';
import { api } from "../services";
import { setCookie } from 'nookies';

type SignInCredentials = {
  email: string;
  password: string;
  token: string;
}

type AuthContextData = {
  signIn(creadentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

  async function signOut() {

    localStorage.removeItem('@login:token')
  
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
    
      const response = await api.post('auth-users/login', {
        email,
        password
      })
      
      const { token } = response.data;
      
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 1,
      })

      Router.push('/dashboard')

    } catch ( err ) {

      console.log(err)

    }

  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  )
}