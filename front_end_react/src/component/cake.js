import React, { useState, useEffect } from 'react'
import './Home.css';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Button, Card, Row, Col, Container, Navbar, Nav } from 'react-bootstrap'


export default function Cake() {

    const [cake, setCake] = useState([])

    useEffect(() => {
        fetch("/api/cake")
            .then(res => res.json())
            .then(
                (result) => {
                    setCake(result)
                }
            )
    }, [])

    return (
        <div>
            <Navbar className='justify-contain-between' bg='light' explan='bg'>
                <Container>
                    <Navbar.Brand>
                        <img src='./CoePSU.jpg' height='32' alt='' />
                    </Navbar.Brand>
                    <Navbar.Brand href="/">
                        DCW cafe
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <div className='me-auto'></div>
                        <Nav >
                            <Nav.Link href='/' target='_blank'> Home </Nav.Link>
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
            <Container style={{ padding: 20, marginTop: 20, backgroundColor: 'lightpink' }}>
                <br />
                <h3 style={{ textAlign: 'center' }}> Cake </h3>
                <br />
                
                <Row>
                    {cake.map(cake => (
                        <Col md={4} key={cake.ID}>
                            <br />
                            <Card style={{ padding: 20 }}>
                                <Card.Body>
                                    <Card.Img variant='top' src={cake.src} height='280' />
                                    <br />
                                    <Card.Title>{cake.menuName}</Card.Title>
                                    <Card.Text>ราคา {cake.price} บาท</Card.Text>
                                    <Button variant='warning'>Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
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


