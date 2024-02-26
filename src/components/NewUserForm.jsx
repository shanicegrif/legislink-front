import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postNewUser } from '../api/axios';
import { Form, Button } from 'react-bootstrap';

/**
 * NewUserForm()
 * ==================================
 * A react component to handle a form to accept & handle an event for new user signup.
 * 
 * @returns {ReactComponentElement}
 */
export default function NewUserForm(){
    const nav = useNavigate();
    const [userInfo, setUserInfo] = useState({    
        user_id: 0,
        user_email: "",
        user_password: "",
        user_zipcode: 0,
        manager: false,
    });
    const [confirmPw, setConfirmPw] = useState("");

    const handleTextChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };

    const handleConfirmPwChange = (event) => {
        setConfirmPw(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(confirmPw === userInfo.user_password){
            postNewUser(userInfo)
                .then(() => {
                    console.log("create success!");
                    nav("/");
                })
                .catch((err) => console.error(err));
        };
    };
    //TODO: need zip
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control id="user_email" value={userInfo.user_email} type="email" placeholder="Enter email" onChange={handleTextChange} maxLength={40} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control className="text-muted" id="user_password" type="password" placeholder="Password" value={userInfo.user_password} onChange={handleTextChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control className="text-muted" id="user_password2" type="password" placeholder="Password" value={confirmPw} onChange={handleConfirmPwChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Zip</Form.Label>
                <Form.Control id="user_zipcode" value={userInfo.user_zipcode} placeholder="zip" onChange={handleTextChange} maxLength={5} required/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Create New Account
            </Button>
        </Form>
    );
}