import { useState, useEffect } from "react"
import { getName } from "../services/services"

export const useField = (type) => {
  const [value, setValue] = useState("")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if (name) {
      getName(name)
        .then((response) => {
          if (response) {
            console.log("La respuesta es: ", response)
            setCountry(response)
          }
        })
        .catch((error) => {
          console.log("El error es: ", error)
          setCountry(error)
        })
    }
    console.log(country)
  }, [name])

  return country
}
