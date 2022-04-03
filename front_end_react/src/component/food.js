import React, { useState, useEffect } from 'react'
import './Home.css';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Button, Card, Row, Col, Container, Navbar, Nav } from 'react-bootstrap'


export default function Food() {

    const [food, setFood] = useState([])

    useEffect(() => {
        fetch("/api/food")
            .then(res => res.json())
            .then(
                (result) => {
                    setFood(result)
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{ padding: 20, marginTop: 20, backgroundColor: 'lightgreen' }}>
                <br />
                <h3 style={{ textAlign: 'center' }}> Food </h3>
                <br />
                <Row>
                    {food.map(food => (
                        <Col md={4} key={food.ID}>
                            <br />
                            <Card style={{ padding: 20 }}>
                                <Card.Body>
                                    <Card.Img variant='top' src={food.src} height='280' />
                                    <br />
                                    <Card.Title>{food.menuName}</Card.Title>
                                    <Card.Text>ราคา {food.price} บาท</Card.Text>
                                        <Button variant='warning'> Buy </Button>
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


