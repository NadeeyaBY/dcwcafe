import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Container, Navbar, Nav } from 'react-bootstrap'
import '../component/Home.css'

export default class Home extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log("clicked");

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div>
                    <Navbar className='justify-contain-between' bg='light' explan='bg' >
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
                    <br />

                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name} to DCW cafe</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <footer style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 240)', padding: 10 }}>
                        Create by
                        <a href='6010110360@psu.ac.th' target='_blank' style={{ marginLeft: 4 }}> 6010110360 </a>
                        <a href='5910110167@psu.ac.th' target='_blank' style={{ marginLeft: 4 }}> 5910110167 </a>
                    </footer>
                </div>

            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="1376267652794479"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            );
        }

        return <div>{fbContent}</div>;
    }
}