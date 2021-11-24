import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const Logo = styled.h1`
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    @media(max-width: 600px) {
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
    border-radius: 50%; 
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media(max-width: 600px) {
        padding: 10px;
    }
    `
const Center = styled.div`
    flex:1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`

// const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
// `

// const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
// `

const Right = styled.div`
    flex:1;
    padding: 20px;
    @media(max-width: 600px) {
        padding: 10px;
    }
`
const ContactItem = styled.div``

const Subtitle = styled.p`
    @media(max-width: 600px) {
        font-size: 11px;
    }
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Jesús Carrasquel.</Logo>
                <Desc></Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            {/* <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                </List>
            </Center> */}
            <Right>

                <Title>Contact</Title>
                <ContactItem>
                    <Room /> <Subtitle>Madrid, Spain </Subtitle>
                </ContactItem>
                <ContactItem>
                    <Phone /> <Subtitle>+34 624 41 91 42</Subtitle>
                </ContactItem>
                <ContactItem>
                    <MailOutline /><Subtitle>jesusmcc1106@gmail.com </Subtitle>
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer

