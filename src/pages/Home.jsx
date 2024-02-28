import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../components/utils/Auth";
import Introduction from "../components/home/Introduction";
import TopCarousel from "../components/home/TopCarousel";

export default function Home(){
    const nav = useNavigate();
    const auth = useAuth();
    // useEffect(() => {
    //     if(!auth.authenticated){
    //         nav("/login");
    //     }
    //     else{
    //         console.log("Entered to the dashboard");
    //     }
    // },[]);

    return(
        <div>
            <div>
                <TopCarousel />
            {/** top right  */}
            </div>
            {/** bottom */}
            <Introduction />
        </div>
    )
}