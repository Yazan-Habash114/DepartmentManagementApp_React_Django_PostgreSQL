import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/sidebar-component/SideBar'
import SideBarSections from '../components/sidebar-sections/SideBarSections'
import { BrowserRouter } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: stretch;
    background-color: #dcdde1;
`

const AppWindow = () => {
    return (
        <Container>
            <BrowserRouter>
                <SideBar />
                <SideBarSections />
            </BrowserRouter>
        </Container>
    )
}

export default AppWindow