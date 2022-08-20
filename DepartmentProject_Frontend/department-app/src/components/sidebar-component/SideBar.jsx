import React from 'react'
import styled from 'styled-components'
import { side_list_items } from '../../iterating-items/side-list-items'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { Tablet } from '../../responsive/responsive'

const Container = styled.div`
    background-color: #2f3542;
    padding: 1rem 2px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 280px;
`

const InnerBox = styled.section`
    &:nth-child(2n) {
        ${Tablet({ display: 'none' })}
    }
    margin: 0 1rem;
`

const SideBar = () => {
    return (
        <Container>
            <ul>
                {
                    side_list_items.map((obj, index) => {
                        return (
                            <NavLink key={index} className={'navlinks'} to={obj.linkto}>
                                <li className='side-list-items' id={obj.tag}>
                                    <InnerBox>
                                        <i className={obj.icon} aria-hidden="true"></i>
                                    </InnerBox>
                                    <InnerBox>
                                        {obj.tag}
                                    </InnerBox>
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </Container >
    )
}

export default SideBar