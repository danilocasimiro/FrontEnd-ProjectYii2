import { api } from "./axios";

export default async function DeleteAuthUser(id, token) {
  
  return await api.delete(`/auth-users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

}