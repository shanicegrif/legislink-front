import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import NavBar from './Navbar';

import './NavBar.css';
import SidePanel from './SidePanel';

export default function DynamicNav(){
    const nav = useNavigate();
    const auth = useAuth();

    return(
        <div>
            {!auth ? (<NavBar />) : null}
            {auth ? (<SidePanel />) : null}
        </div>
    )
}
