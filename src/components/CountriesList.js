// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Colors from "./variables/Colors"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    border-right: 1px solid ${Colors.Gray};

    a:not(:last-child) {
        border-bottom: 1px solid ${Colors.Gray};
    }
`

const Card = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    color: ${Colors.Primary};
    text-decoration: none;
    transition: all 0.2s ease;
    text-align: center;
    font-weight: bold;

    img {
        margin-bottom: 8px;
    }

    &:hover {
        color: ${Colors.Primary70};
    }
`

function CountriesList(props) {
    return (
        <Container>
            {props.countries.map(country => (
                <Card to={`/${country.alpha3Code.toLowerCase()}`} key={country.name.official}>
                    <img
                        src={`https://flagcdn.com/28x21/${country.alpha2Code.toLowerCase()}.png`}
                        alt={country.name.official}
                    />
                    {country.name.common}
                </Card>
            ))}
        </Container>
    )
}

export default CountriesList

