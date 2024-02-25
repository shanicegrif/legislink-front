import { roomListInterface, userinfoInterface } from "../interfaces/interface";
import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

/**
 * postAuth()
 * =============================================
 * POST the back-end server for authentication using w/ axios.
 * The param "body" is an object that we want to send to the back-end as a parameter (does not require for header.)
 * 
 * @param {Object} body 
 * @returns 
 */
export async function postAuth(body){
    console.log(body)
    return await axios.post(`${serverURL}/user/login`, body);
}