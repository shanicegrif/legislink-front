import { useLocation } from "react-router-dom";
import RepresntativeBill from "../components/representatives/detail/RepresentativeBill";
import RepresentativeDetailCard from "../components/representatives/detail/RepresentativeDetailCard";

export default function RepresentativeDetail({location}){
    const { state } = useLocation();
    const { representative } = state;
    
    return(
        <div>
            <RepresentativeDetailCard representative={representative}/>
            <RepresntativeBill />
        </div>
    )
}