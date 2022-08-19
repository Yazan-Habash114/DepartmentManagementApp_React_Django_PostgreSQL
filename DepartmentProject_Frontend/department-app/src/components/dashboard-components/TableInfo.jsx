import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 2rem;
    margin: 0 2rem 2rem 2rem;
    background-color: #eee;
`

const Title = styled.h2``

const Table = styled.table`
    margin-top: 1.4rem;
`

const TableHeader = styled.thead``

const Header = styled.th`
    padding: 0 5rem;
    &:first-child {
        padding: 0;
    }
`

const TableBody = styled.tbody``

const Row = styled.tr``

// const Cell = styled.td`
//     padding: 0 5rem;
//     &:first-child {
//         padding: 0;
//     }
// `

const TableInfo = ({ title, tableHeaders }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Table>
                {/* Table Header */}
                <TableHeader>
                    <Row>
                        {
                            tableHeaders.map(header => {
                                return <Header>{header}</Header>
                            })
                        }
                    </Row>
                </TableHeader>

                {/* Table Data */}
                <TableBody></TableBody>
            </Table>
        </Container>
    )
}

export default TableInfo