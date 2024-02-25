import { useNavigate } from "react-router-dom";
import { useAuth } from "./utils/Auth";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { deleteAccount, getSingleUser, putExistingUser } from "../api/axios";

/**
 * Profile()
 * ==================================
 * still working...........
 * @returns 
 */
export default function Profile(){
    const nav = useNavigate();
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState({    
        user_id: 0,
        user_email: "",
        user_password: "",
        user_zipcode: 0,
        manager: false,
    });

    const handleTextChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
    };

    const handleChangeProfile = (event) => {
        event.preventDefault();
        putExistingUser(String(auth.user_id), userInfo)
        .then((json) => {
            auth.setUserName(json.data.data.payload.user_name);
            nav('/lobby');
        })
    };

    const handleEraseAccount = () => {
        deleteAccount(String(auth.user_id))
        .then(() => {
            auth.logOut();
        })
    };

    useEffect(() => {
        getSingleUser(String(auth.user_id))
        .then((json) => {
            setUserInfo({...json.data.data.payload});
        }).catch((err)=> console.log(err));
    },[])

    return(
        <Form onSubmit={handleChangeProfile}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="user_email" value={userInfo.user_email} type="email" placeholder="Enter email" onChange={handleTextChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="text-muted" id="user_password" type="password" placeholder="Password" value={userInfo.user_password}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Zip code</Form.Label>
                <Form.Control id="user_zipcode" placeholder="ex: 11111" value={userInfo.user_zipcode} onChange={handleTextChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Update
            </Button>
            <Button variant="warning" type="button" onClick={handleEraseAccount}>
                Delete Account
            </Button>
        </Form>
    )
}