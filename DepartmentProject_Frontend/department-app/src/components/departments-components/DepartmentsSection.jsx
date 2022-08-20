import React from 'react'
import styled from 'styled-components'
import Card from '../tools-components/Card'
import SearchBox from '../tools-components/SearchBox'
import WindowHeader from '../window-header/WindowHeader'
import { departments } from '../../iterating-items/departments'

const Container = styled.div``

const Content = styled.section`
    background-color: #fff;
    border-radius: 4px;
    padding: 2rem;
    margin: 0 3rem;
`

const GroupCards = styled.div`
    margin-top: 2rem;
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
`

const DepartmentsSection = () => {
    return (
        <Container>
            <WindowHeader headerText={"Manage Departments"} />
            <Content>
                <SearchBox placeholder={"Search for department"} />
                <GroupCards>
                    {
                        departments.map(obj => {
                            return (
                                <Card id={obj.departmentId} name={obj.departmentName} />
                            )
                        })
                    }
                </GroupCards>
            </Content>
        </Container>
    )
}

export default DepartmentsSection