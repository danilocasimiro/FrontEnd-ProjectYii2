import { useQuery } from "react-query";
import { api } from "..";

type User = {
  id: string,
  email: string,
  photo: string,
  created_at: string,
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('/users')

  const users = data.map(user => {
    return {
      id: user.id,
      password: user.password,
      photo: user.photo,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: "numeric"
      })
    };
  });

  return users;
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}