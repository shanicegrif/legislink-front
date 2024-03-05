import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { signInWithGoogle, logOut } from "../serivces/firebase";
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
    console.log(auth)
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