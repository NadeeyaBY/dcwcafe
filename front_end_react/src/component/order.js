import React from 'react'
import './Home.css';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Button, Card, Row, Col, Container, Navbar, Nav } from 'react-bootstrap'


export default function Order() {

    return (
        <div>
            <Navbar className='justify-contain-between' bg='light' explan='bg'>
                <Container>
                    <Navbar.Brand>
                        <img src='./CoePSU.jpg' height='32' alt='' />
                    </Navbar.Brand >
                    <Navbar.Brand href="/" >
                        DCW cafe
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <div className='me-auto'></div>
                        <Nav >
                            <Nav.Link href='/home' target='_blank'> Home </Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href='/water' target='_blank'> Water </Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href='/cake' target='_blank'> Cake </Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href='/food' target='_blank'> Food </Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href='/order' target='_blank'> Order </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{ padding: 20, marginTop: 20 }}>
                <br />
                <h1 className='Home' style={{ textAlign: 'center' }}> BUY </h1>
                <br />
            </Container>
            <br />
            <footer style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 240)', padding: 20 }}>
                Create by
                <a href='6010110360@psu.ac.th' target='_blank' style={{ marginLeft: 4 }}> 6010110360 </a>
                <a href='5910110167@psu.ac.th' target='_blank' style={{ marginLeft: 4 }}> 5910110167 </a>
            </footer>
        </div>
    )

}


