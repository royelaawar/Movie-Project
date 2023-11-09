// import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './newLogo.png'

function NavBar() {
    return (
        <Navbar bg="black" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="Movie Mania" style={{width: "10rem"}}/></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movies">Movies</Nav.Link>
                    <Nav.Link href="/add_movie">Add Movie</Nav.Link>
                </Nav>
                <Navbar.Brand href="/"><img src="https://64.media.tumblr.com/ef66c2d5190e5faccdd98c177bbd166d/tumblr_n2jpvrMka81sqtzdpo1_1280.gifv" alt="Movie Mania" style={{width: "15rem"}}/></Navbar.Brand>
            </Container>
        </Navbar>
    )

    // return <nav>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/movies">Movies</NavLink>
    //     <NavLink to="/add_movie">Add Movie</NavLink>
    // </nav>
}

export default NavBar

