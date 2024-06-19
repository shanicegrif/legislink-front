import React from 'react';
import { useAuth } from "../hooks/useAuth";
import SideNav from './SideNav';
import HomeNav from './HomeNav';

const DynamicNav = () => {
    const auth = useAuth();

    return (
        <>
            {!auth ? (<HomeNav />) : null}
            {auth ? (<SideNav />) : null}
        </>
    );
}

export default DynamicNav;
