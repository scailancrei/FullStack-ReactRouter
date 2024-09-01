import { useState, useEffect } from "react"
import services from "../services/services"
const useField = (type) => {
  const [value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onReset = () => {
    setValue("")
  }

  return {
    type,
    value,
    onChange,
    onReset,
  }
}

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  // ...
  useEffect(() => {
    getAll(baseUrl)
      .then((response) => setResources(response))
      .catch((error) => console.log(error))
  }, [])

  const create = async (resource) => {
    return await services
      .create(baseUrl, resource)
      .then((response) => setResources([...resources, response]))
      .catch((error) => console.log(error))
  }

  const getAll = async (baseUrl) => {
    return await services.getAll(baseUrl)
  }

  const service = {
    create,
    getAll,
  }

  return [resources, service]
}

export { useField, useResource }
