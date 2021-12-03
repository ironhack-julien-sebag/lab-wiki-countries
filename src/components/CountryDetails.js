// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Colors from "./variables/Colors"

import countries from "../countries.json"

// Styles
const Wrapper = styled.div``

const Container = styled.div`
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
`

const Flag = styled.img`
    height: 120px;
    width: 100%;
    object-fit: contain;
`

const Title = styled.h2`
    text-align: center;
`

const Table = styled.table``

const Tbody = styled.tbody`
    text-align: center;

    tr:not(:last-child) {
        border-bottom: 1px solid ${Colors.Gray};
    }

    td {
        padding: 8px;
        width: 50%;
    }
`

const Tr = styled.tr``

const TdTitle = styled.td``

const TdBody = styled.td``

const Exponant = styled.sup`
    vertical-align: super;
    font-size: smaller;
`

const ListBorders = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    li:not(:last-child) {
        margin-bottom: 4px;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: ${Colors.Primary};
        transition: all 0.2s ease;

        &:hover {
            color: ${Colors.Primary70};
        }
    }
`

function CountryDetails(props) {
    return (
        <Wrapper>
            <Container>
                <Flag
                    src={`https://flagcdn.com/${props.country.alpha2Code.toLowerCase()}.svg`}
                    alt={props.country.name.common}
                />

                <Title>{props.country.name.official}</Title>
                {/* Capital, area size, borders */}

                <Table>
                    <Tbody>
                        {props.country.capital.length !== 0 && (
                            <Tr>
                                <TdTitle>Capital</TdTitle>
                                <TdBody>{props.country.capital[0]}</TdBody>
                            </Tr>
                        )}

                        <Tr>
                            <TdTitle>Area</TdTitle>
                            <TdBody>
                                {props.country.area} km<Exponant>2</Exponant>
                            </TdBody>
                        </Tr>

                        {props.country.borders.length !== 0 && (
                            <Tr>
                                <TdTitle>Borders</TdTitle>
                                <TdBody>
                                    <ListBorders>
                                        {props.country.borders.map(border => (
                                            <li>
                                                <Link to={`/${border}`}>
                                                    {
                                                        countries.find(
                                                            e =>
                                                                e.alpha3Code ===
                                                                border
                                                        ).name.common
                                                    }
                                                </Link>
                                            </li>
                                        ))}
                                    </ListBorders>
                                </TdBody>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Container>
        </Wrapper>
    )
}

export default CountryDetails
