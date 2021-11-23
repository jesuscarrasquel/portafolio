import React from 'react'
import styled from 'styled-components'
import LogoPortafolio from '../assets/img/logo-portafolio.png'
import CV from '../assets/documents/jesuscarrasquel-dev.pdf'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Img = styled.img`
    @media (max-width: 600px) {
        height: 100px;
    }
`

const Right = styled.div``
const Anchor = styled.a`
    border: none;
    padding: 10px;
    border: 1px solid teal;
    border-radius: 20px;
    text-decoration: none;
    color: teal;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Img src={LogoPortafolio}/>
                </Left>
                <Right>
                    <Anchor href={CV} target="_blank">Hoja de vida</Anchor>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
