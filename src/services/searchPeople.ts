import { api } from "./axios";

function isId(item) {
  
  if(item === 'friendly_id') {
    return `auth_users.${item}`
  }

  return item;
}

export default async function SearchPeople(search, item, token) {

  return await api.get(`/auth-users?filterLike[${isId(item)}]=${search}&expand=person`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

}