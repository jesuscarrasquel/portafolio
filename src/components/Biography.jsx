import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (max-width: 320px) {
        width: 80%;
    }
`

const Title = styled.h2`
    font-size: 40px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 320px) {
        font-size: 20px;
    }
`

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 320px) {
        font-size: 13px;
    }

`

const Biography = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Hi, I’m Jesús. Nice to meet you.</Title>
                <SubTitle>
                Since beginning my journey as a developer 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </SubTitle>
            </Wrapper>
        </Container>
    )
}

export default Biography
