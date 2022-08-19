import React from 'react'
import styled from 'styled-components'
import TableInfo from './TableInfo'

const Container = styled.div``

const Header = styled.nav`
    background-color: #eee;
    padding: 2.5rem 1.5rem;
    margin-bottom: 3rem;
`

const Title = styled.h1`
    font-size: 30px
`

const DashboardSection = () => {
    return (
        <Container>
            <Header>
                <Title>View all</Title>
            </Header>
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
                    'Department Id'
                ]}
            />
        </Container>
    )
}

export default DashboardSection