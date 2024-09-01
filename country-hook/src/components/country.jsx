const Country = ({ country }) => {
  if (!country) {
    return null
  }
  if (country.status === 404) {
    return <div>not found...</div>
  }

  console.log(country)
  return (
    <div>
      <div>
        <h3>{country.name.common} </h3>
        <div>capital {country.capital} </div>
        <div>population {country.population}</div>
        <img
          src={country.flags.svg}
          height="100"
          alt={`flag of ${country.name}`}
        />
      </div>
    </div>
  )
}

export default Country
