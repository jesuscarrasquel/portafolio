import Navbar from '../components/Navbar'
import Portada from '../components/Portada'
import Biography from '../components/Biography'
import Works from '../components/Works'

import styled from 'styled-components'
import Footer from '../components/Footer'

const Container = styled.div`
    padding: 0;
    margin: 0;
`
const Home = () => {
    return (
        <Container>
            <Navbar />
            <Portada />
            <Biography />
            <Works />
            {/* <Footer /> */}
        </Container>
    )
}

export default Home
