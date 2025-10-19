import { useEffect, useState } from "react"
import { useTheme } from "../ThemeContext"
import { Header } from "../components/Header"
import { useParams, Link } from "react-router-dom"

function Detail({ countries }) {
  const { darkMode } = useTheme()
  const { code } = useParams()

  const [country, setCountry] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code || ""}`)
        const data = await response.json()
        setCountry(data?.[0])
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    getData()
  }, [code])

  return (
    <>
      <Header />
      <nav>
        <Link to="/">
          <button className={darkMode ? "dark-theme" : "light-theme"} type="button">
            <span>←</span> Back
          </button>
        </Link>
      </nav>

      <main>
        {country && (
          <>
            <img src={country?.flags?.svg} alt={`${country?.name?.common} flag`} />
            <div className={darkMode ? "dark-theme" : "light-theme"} style={{ backgroundColor: "transparent" }}>
              <h2>{country?.name?.common}</h2>
              <div>
                <p>
                  <strong>Native Name: </strong>
                  {Object.values(country?.name?.nativeName || {})
                    .map((nativeName) => nativeName?.common)
                    .join(", ")}{" "}
                  <br />
                  <strong>Population: </strong> {country?.population?.toLocaleString()} <br />
                  <strong>Region: </strong> {country?.region} <br />
                  <strong>Sub Region: </strong> {country?.subregion} <br />
                  <strong>Capital: </strong> {country?.capital}
                </p>
                <p>
                  <strong>Top Level Domain: </strong>
                  {(country?.tld || []).join(", ")} <br />
                  <strong>Currencies: </strong>
                  {Object.keys(country?.currencies || {}).join(", ")} <br />
                  <strong>Languages: </strong>
                  {Object.values(country?.languages || {}).join(", ")}
                </p>
              </div>
              <p>
                <strong>Border Countries: </strong>

                {country?.borders?.map((border, index) => (
                  <span key={index}>{countries.find((country) => country.cca3 === border).name.common}</span>
                ))}
              </p>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export { Detail }
