import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const login = (input) => {
        axios.post(input)
        .then(((res) => {
            return res;
        })).catch((err)=> {
            console.log(err);
        })
    }

    const logout = () => {
        setAuthenticated(false);
        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");
    }

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated, email, setEmail, password, setPassword, firstname, setFirstname, lastname, setLastname, login, logout}}>
            <div>{props.children}</div>
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}