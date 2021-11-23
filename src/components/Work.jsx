import { ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin-right: 10px;
    margin-bottom: 20px;
    border: 1px solid #000000;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    min-height: 150px;
    background-image: ${props => props.bg};
    width: 100%;

`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h2`
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #ffffff;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`
const Anchor = styled.a`
    text-decoration: none;
    color: #ffffff;
    border: 1px solid teal;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: teal;
    }
`

const Work = ({ item }) => {
    return (
        <Container bg={item.bg}>
            <Wrapper>
                <Title>{item.title}</Title>
                <Anchor href={item.url} target="_blank">View Site <ArrowForwardIos /> </Anchor>
            </Wrapper>
        </Container>
    )
}

export default Work
