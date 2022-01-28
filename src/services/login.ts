import { signIn } from "next-auth/react";
import { api } from "./axios";

interface User  {
  id: string,
  name: string,
  email: string,
  photo: string,
  type: string,
  token: string,
  friendly_id: string
}

export default async function Login(email, password) {

  await api.post('/authenticate/login',
    {
      email,
      password
    },
  )
  .then((response) => { 

    const user: User = {
      id: response.data.user.id,
      name: response.data.person?.name ?? response.data.company.name,
      email: response.data.user.email,
      friendly_id: response.data.user.friendly_id,
      photo: response.data.user.photo,
      type: response.data.user.type,
      token: response.data.token
    }

    signIn("credentials", user )

    return response
  })

}