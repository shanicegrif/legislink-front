import React from 'react';
import { useAuth } from "../hooks/useAuth";
import Nav from "./Nav";
import SideNav from './SideNav';

const DynamicNav = () => {
    const auth = useAuth();

    return (
        <>
            {!auth ? (<Nav />) : null}
            {auth ? (<SideNav />) : null}
        </>
    );
}

export default DynamicNav;
