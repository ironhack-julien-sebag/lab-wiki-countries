// Packages
import React from "react"
import styled from "styled-components"

import Colors from "./variables/Colors"

import SiteData from "./data/SiteData"

// Styles
const Container = styled.header`
    background-color: ${Colors.Primary};
    color: ${Colors.White};
    padding: 16px 5vw;
`

function Navbar(props) {
    return (
        <Container>
            <h1>{SiteData.siteName}</h1>
        </Container>
    )
}

export default Navbar

