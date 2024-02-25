import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zip, setZip] = useState(0);
    
    const login = (input) => {
        axios.post(input)
        .then(((res) => {
            return res;
        })).catch((err)=> {
            console.log(err);
        })
    };

    const logout = () => {
        setAuthenticated(false);
        setEmail("");
        setPassword("");
        setZip(0);
    };

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated, email, setEmail, password, setPassword, zip, setZip, login, logout}}>
            <div>{props.children}</div>
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}