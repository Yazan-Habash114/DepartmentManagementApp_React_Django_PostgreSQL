import React from 'react'
import styled from 'styled-components'
import TableInfo from './TableInfo'
import WindowHeader from '../window-header/WindowHeader'

const Container = styled.div``


const DashboardSection = () => {
    return (
        <Container>
            <WindowHeader headerText={"View All"} />
            <TableInfo
                title={"List Departments"}
                tableHeaders={[
                    'Department Id',
                    'Department Name'
                ]}
            />
            <TableInfo
                title={"List Employees"}
                tableHeaders={[
                    'Employee Id',
                    'Employee Name',
                    'Date of joining',
                    'Department Name'
                ]}
            />
        </Container>
    )
}

export default DashboardSection