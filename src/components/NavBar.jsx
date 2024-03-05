import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { signInWithGoogle, logOut } from "../serivces/firebase";

import './NavBar.css';

export default function NavBar(){
    const nav = useNavigate();
    const auth = useAuth();

    return(
        <Navbar expand="lg" className="justify-content-between navbar">
            <Container>
                <Link to="/">
                    <img
                        src="https://react-bootstrap.netlify.app/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand style={{color:'white'}}>LegisLink</Navbar.Brand>
                </Link>
                {auth ? auth.displayName : null}
                {!auth ? (<button onClick={signInWithGoogle}>Login</button>) : null}
                {auth ? (<button onClick={logOut}>Logout</button>) : null}
                
            </Container>
        </Navbar>
    )
}
