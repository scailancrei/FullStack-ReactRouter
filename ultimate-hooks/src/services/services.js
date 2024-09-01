import axios from "axios"
const baseUrl = "http://localhost:3005/"

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async (resource) => {
  const response = await axios.get(resource)
  return response.data
}

const create = async (url, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(url, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, create, update, setToken }
