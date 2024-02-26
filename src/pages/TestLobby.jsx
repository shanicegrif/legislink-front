import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/utils/Auth"
import { useEffect } from "react";

export default function TestLobby(){
    const auth = useAuth();
    const nav = useNavigate();

    useEffect(() => {
        if(!auth.authenticated){
            nav('/');
        }
    },[]);
    
    return(
        <div>
            HELLO WORLD!
        </div>
    )
}