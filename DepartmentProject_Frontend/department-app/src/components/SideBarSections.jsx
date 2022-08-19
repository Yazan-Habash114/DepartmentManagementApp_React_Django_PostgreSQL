import React from 'react'
import styled from 'styled-components'
import DashboardSection from './dashboard-components/DashboardSection'

// I need to create a react context here

const Container = styled.div`
    flex: 1;
`

const SideBarSections = () => {
    return (
        <Container>
            <DashboardSection />
        </Container>
    )
}

export default SideBarSections