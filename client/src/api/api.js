export const BASE_URL = 'http://localhost:3000'

const headers = (token) => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: `Bearer ${token}` } : {})
})

// ---------- Auth ----------
export const signinRequest = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(credentials)
  })
  return res.json()
}

export const signoutRequest = async () => {
  const res = await fetch(`${BASE_URL}/auth/signout`)
  return res.json()
}

export const signupRequest = async (user) => {
  const res = await fetch(`${BASE_URL}/api/users`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(user)
  })
  return res.json()
}

// ---------- Generic CRUD ----------
// resource = 'contacts' | 'projects' | 'qualifications'
export const listItems = async (resource, token) => {
  const res = await fetch(`${BASE_URL}/api/${resource}`, { headers: headers(token) })
  return res.json()
}

export const createItem = async (resource, data, token) => {
  const res = await fetch(`${BASE_URL}/api/${resource}`, {
    method: 'POST',
    headers: headers(token),
    body: JSON.stringify(data)
  })
  return res.json()
}

export const updateItem = async (resource, id, data, token) => {
  const res = await fetch(`${BASE_URL}/api/${resource}/${id}`, {
    method: 'PUT',
    headers: headers(token),
    body: JSON.stringify(data)
  })
  return res.json()
}

export const deleteItem = async (resource, id, token) => {
  const res = await fetch(`${BASE_URL}/api/${resource}/${id}`, {
    method: 'DELETE',
    headers: headers(token)
  })
  return res.json()
}