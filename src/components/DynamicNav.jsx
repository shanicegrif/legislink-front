import React from 'react';
import { useAuth } from "../hooks/useAuth";
import Nav from "./Nav";
import SideNav from './SideNav';
import SampleNav from './SampleNav';

const DynamicNav = () => {
    const auth = useAuth();

    return (
        <>
            {!auth ? (<SampleNav />) : null}
            {auth ? (<SideNav />) : null}
        </>
    );
}

export default DynamicNav;
