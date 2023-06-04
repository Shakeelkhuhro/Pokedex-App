import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'
import '../App.css'

const Header = () => {
    return (
        <div>
            <Navbar
                bg='dark' variant='top' expand='lg' collapseOnSelect
            >
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='bgNav'> React Pokedex App</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
