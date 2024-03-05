import { useNavigate } from "react-router-dom";

import { useLayoutEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export default function TestLobby(){
    const auth = useAuth();
    const nav = useNavigate();

    useLayoutEffect(() => {
        if(!auth){
            nav('/');
        } else{
            console.log('entered to the lobby');
        }
    },[]);
    
    return(
        <div style={{backgroundColor:"black"}}>
            <h1>HELLO WORLD</h1>'
        </div>
    )
}