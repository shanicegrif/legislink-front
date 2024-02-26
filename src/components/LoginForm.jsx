import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../api/axios";
import { useAuth } from "./utils/Auth";
import { FormControl, FormLabel, Form, Button } from "react-bootstrap";

/**
 * LoginForm()
 * ===============================
 * used react bootstrap. free to change.
 * 
 * @return {ReactComponentElement}
 */
export default function LoginForm(){
    //declare variables & hooks.
    const nav = useNavigate();
    const [userInfo, setUserInfo] = useState({    
        user_id: 0,
        user_email: "",
        user_password: "",
        user_zipcode: 0,
        manager: false,
    });
    //auth is useContext hook to hold authenticate info. (a custom hook)
    const auth = useAuth();

    /**
     * handleTextChange()
     * ==========================
     * handle text fields in the form.
     *
     * @param {HTMLInputElement} event - events from the text fields.
     */
    const handleTextChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };
    
    /**
     * handleSubmit()
     * ===========================
     * handle when a user clicks login
     * 
     * @param {HTMLFormElement} event - occurs when submitting the form.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        postAuth(userInfo)
            .then((json) => {
            console.log("login success!");
            //console.log(json.data.data.payload)
            auth.setAuthenticated(true);
            auth.setEmail(json.data.data.payload.user_email);
            auth.setZip(json.data.data.payload.user_zipcode)
            nav("/lobby");
            })
            .catch((err) => console.error(err));
    };

    /**
     * handleCreateAccount()
     * =====================
     * button to redirect user for signin page.
     */
    const handleCreateAccount = () => {
        nav("/signin");
    }

    return(
        <div className="wrapper">
            <Form onSubmit={handleSubmit}>
                <FormLabel>
                    E-Mail
                    <FormControl type="email" id="user_email" name="user_email" placeholder="email" maxLength={40} onChange={handleTextChange} required />
                </FormLabel>
                <br />
                <FormLabel>
                    Password
                    <FormControl type="text" id="user_password" name="user_password" placeholder="Password" maxLength={40} onChange={handleTextChange} required />
                </FormLabel>
                <br />
                <Button type="submit">Log in</Button>
                <Button onClick={handleCreateAccount}>Create Account</Button>
            </Form>
        </div>
    )
}