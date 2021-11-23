import React from 'react'
import Work from './Work'
import { projects } from '../data' 
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align:center;
    margin-bottom: 50px;

`
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
`

const Title = styled.h2`
    font-size: 40px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0px;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`
const Subtitle = styled.p`
    font-size: 20px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    margin-top : 0px;
    @media (max-width: 600px) {
        font-size: 13px;
    }
`

const Works = () => {
    return (
        <Container>
            <Title>My Recent Work</Title>
            <Subtitle>Here are a few design projects I've worked on recently.</Subtitle>
            <Wrapper>
                {
                    projects.map(item => (
                        <Work item={item} key={item.id}/>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default Works
