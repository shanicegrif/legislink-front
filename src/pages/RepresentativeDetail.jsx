import { useLocation, useParams } from "react-router-dom";
import RepresentativeBill from "../components/representatives/detail/RepresentativeBill";
import RepresentativeDetailCard from "../components/representatives/detail/RepresentativeDetailCard";

export default function RepresentativeDetail() {
    const { state } = useLocation();
    const { representative } = state || {};  // Safeguard for when state is missing
    let { bioguideID } = useParams();  

    return (
      <div className="rep-detail-container">
        <RepresentativeDetailCard representative={representative} />
        <RepresentativeBill bioguideID={bioguideID || representative?.bioguideId} />
      </div>
    );
  }