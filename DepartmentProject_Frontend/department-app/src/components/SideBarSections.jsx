import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import DashboardSection from './dashboard-components/DashboardSection'

const Container = styled.div`
    flex: 1;
`

const SideBarSections = () => {
    return (
        <Container>
            <Routes>
                <Route path="/dashboard" element={<DashboardSection />} />
            </Routes>
        </Container>
    )
}

export default SideBarSections