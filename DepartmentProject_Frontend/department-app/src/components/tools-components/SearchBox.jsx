import React from 'react'
import styled from 'styled-components'

const Container = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 2px solid #aaa;
    border-radius: 3px;
    outline: none;
    transition: 500ms;

    &:focus {
        border: 2px solid lightgreen;
    }
`

const SearchBox = ({ placeholder }) => {
    return (
        <Container placeholder={placeholder} />
    )
}

export default SearchBox