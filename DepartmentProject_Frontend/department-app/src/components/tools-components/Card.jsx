import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: green;
    width: 200px;
    height: 200px;
    margin: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;
    box-shadow: 5px 5px 15px black;
    display: flex;
    overflow: hidden;

    &:hover {
        background-color: #333;
        box-shadow: 0 0 15px black;
    }
`

const Board = styled.div`
    width: 380px;
    height: 100%;
    transition: 500ms;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
`

const Wrapper = styled.div`
    width: 400px;
    display: flex;

    &:hover ${Board} {
        transform: translateX(-100%)
    }
`

const Card = ({ id, name }) => {
    return (
        <Container>
            <Wrapper>
                <Board>{id}</Board>
                <Board>{name}</Board>
                {/* Make first contains info, and the second contains edits */}
            </Wrapper>
        </Container>
    )
}

export default Card