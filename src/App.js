// Imports
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"

// Components
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import Container from "./components/Container"

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => setCountries(response.data))
            .catch(err => console.log(err))
    })

    return (
        <>
            <Navbar />

            <Container>
                <CountriesList countries={countries} />

                <Routes>
                    {countries
                        .sort((a, b) => {
                            if (a.name.common > b.name.common) return 1
                            if (a.name.common < b.name.common) return -1
                            return 0
                        })
                        .map(country => (
                            <Route
                                path={`/${country.alpha3Code.toLowerCase()}`}
                                element={<CountryDetails country={country} />}
                                key={country.name.official}
                            />
                        ))}
                </Routes>
            </Container>
        </>
    )
}

export default App
