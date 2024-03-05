import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { signInWithGoogle, logOut } from "../serivces/firebase";
import NavBar from './Navbar';

import './NavBar.css';
import SidePanel from './SidePanel';

export default function DynamicNav(){
    const nav = useNavigate();
    const auth = useAuth();

    return(
        <>
            {!auth ? (<NavBar />) : null}
            {auth ? (<SidePanel />) : null}
        </>
    )
}
