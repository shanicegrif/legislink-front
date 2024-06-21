import React, { useEffect, useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import SideNav from './SideNav';
import HomeNav from './HomeNav';
import Loading from '../components/messages/Loading';

const DynamicNav = () => {
    const auth = useAuth();
    const [authResolved, setAuthResolved] = useState(false);

    useEffect(() => {
        if (auth !== null) {
            setAuthResolved(true);
        }
    }, [auth]);

    // Render loading indicator until auth state is resolved
    if (!authResolved) {
        return <Loading />;
    }

    // Once auth state is resolved, render appropriate nav
    return (
        <>
            {!auth ? (<HomeNav />) : (<SideNav />)}
        </>
    );
}

export default DynamicNav;