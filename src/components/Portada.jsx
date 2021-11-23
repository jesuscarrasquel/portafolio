import React from 'react'
import styled from 'styled-components'
import Avatar from '../assets/img/avatar.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin-bottom: 0px;
    @media (max-width: 600px) {
        font-size: 30px;
    }
`

const SubTitle = styled.p`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin-top: 0px;
    @media (max-width: 600px) {
        font-size: 11px;
    }
`
const ImageContainer = styled.div`
`

const Image = styled.img`
    border-radius: 50%;
    @media (max-width: 600px) {
        margin-top: 10px;
        height: 100px;;
    }
`

const Portada = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Software Developer</Title>
                <SubTitle>I code beautifully simple things, and I love what I do.</SubTitle>
                <ImageContainer>
                    <Image src={Avatar} />   
                </ImageContainer>
            </Wrapper>
        </Container>
    )
}

export default Portada
