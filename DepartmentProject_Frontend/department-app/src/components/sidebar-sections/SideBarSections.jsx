import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import DashboardSection from '../dashboard-components/DashboardSection'
import DepartmentsSection from '../departments-components/DepartmentsSection'
import EmployeeSection from '../employees-components/EmployeeSection'

const Container = styled.div`
    flex: 1;
`

const SideBarSections = () => {
    return (
        <Container>
            <Routes>
                <Route path="/dashboard" element={<DashboardSection />} />
                <Route path="/departments" element={<DepartmentsSection />} />
                <Route path="/employees" element={<EmployeeSection />} />
            </Routes>
        </Container>
    )
}

export default SideBarSections