import { useState } from "react"
import { Header } from "../components/Header"
import { SearchBox, Filter } from "../components/Search"
import { CountryList } from "../components/CountryList"

function Home(props) {
  const [region, setRegion] = useState("")
  const [search, setSearch] = useState("")

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const handleRegionChange = (event) => {
    console.log(event.target.value)
    setRegion(event.target.value)
  }

  return (
    <>
      <Header />
      <nav>
        <SearchBox onSearchChange={handleSearchChange} />
        <Filter onRegionChange={handleRegionChange} />
      </nav>
      <CountryList countries={props.countries} region={region} search={search} />
    </>
  )
}

export { Home }
