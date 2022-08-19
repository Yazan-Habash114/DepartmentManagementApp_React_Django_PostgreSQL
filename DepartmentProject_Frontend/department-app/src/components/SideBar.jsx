import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #2f3542;
    width: 280px;
    height: 300px;
    padding: 1rem 2px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const List = styled.ul`
    color: #fff;
`

const ListItem = styled.li`
    list-style-type: none;
    margin: 1.5rem 0;
    background-color: #2ed573;
    cursor: pointer;
    padding: 15px 8px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 115%;
    font-weight: bold;
    transition: 1s;

    &:hover {
        background-color: #7bed9f;
        border-top-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 5px;
        color: #2f3542;
    }
`

const InnerBox = styled.section`
    margin: 0 1rem;
`

const SideBar = () => {
    return (
        <Container>
            <List>
                <ListItem>
                    <InnerBox>
                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                    </InnerBox>
                    <InnerBox>
                        Dashboard
                    </InnerBox>
                </ListItem>
                <ListItem>
                    <InnerBox>
                        <i class="fa fa-building" aria-hidden="true"></i>
                    </InnerBox>
                    <InnerBox>
                        Departments
                    </InnerBox>
                </ListItem>
                <ListItem>
                    <InnerBox>
                        <i class="fa fa-users" aria-hidden="true"></i>
                    </InnerBox>
                    <InnerBox>
                        Employees
                    </InnerBox>
                </ListItem>
            </List>
        </Container>
    )
}

export default SideBar