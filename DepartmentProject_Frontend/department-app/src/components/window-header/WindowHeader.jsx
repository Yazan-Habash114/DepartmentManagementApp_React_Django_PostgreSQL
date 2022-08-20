import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
    background-color: #eee;
    padding: 2.5rem 1.5rem;
    margin-bottom: 3rem;
`

const Title = styled.h1`
    font-size: 30px
`

const WindowHeader = ({ headerText }) => {
    return (
        <Container>
            <Title>{headerText}</Title>
        </Container>
    )
}

export default WindowHeader