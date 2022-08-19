import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import SideWindow from '../components/SideWindow'

const Container = styled.div`
    border: 1px solid green;
    display: flex;
    align-items: flex-start;
    background-color: #dcdde1;
`

const MainWindow = () => {
    return (
        <Container>
            <SideBar />
            <SideWindow />
        </Container>
    )
}

export default MainWindow