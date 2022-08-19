import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import SideBarSections from '../components/SideBarSections'

const Container = styled.div`
    display: flex;
    align-items: stretch;
    background-color: #dcdde1;
`

const AppWindow = () => {
    return (
        <Container>
            <SideBar />
            <SideBarSections />
        </Container>
    )
}

export default AppWindow