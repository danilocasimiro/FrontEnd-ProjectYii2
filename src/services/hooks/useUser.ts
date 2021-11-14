import axios from "axios";
import { useQuery } from "react-query";
import { api } from "..";

type User = {
  id: string,
  email: string,
  photo: string,
  created_at: string,
}

export async function getUser(id): Promise<User[]> {
  console.log('dddss')
  try {
    const { data } = await api.get("/auth-users/profile").catch(e => console.log(e))

    
  } catch (err) {
 
  }
  const users = {
    id: "1",
    nome: 'dajose'
  }
  return users;
}

export function useUser(id) {
  return useQuery('auth-users', getUser(id), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}