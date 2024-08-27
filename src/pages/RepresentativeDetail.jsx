import { useLocation } from "react-router-dom";
import RepresentativeBill from "../components/representatives/detail/RepresentativeBill";
import RepresentativeDetailCard from "../components/representatives/detail/RepresentativeDetailCard";

export default function RepresentativeDetail() {
    const { state } = useLocation();
    const { representative } = state || {};  // Added safeguard
    console.log("state", state);
    console.log("rep", representative?.bioguideId);

  return (
    <div className="rep-detail-container">
      <RepresentativeDetailCard representative={representative} />
      <RepresentativeBill bioguideID={representative?.bioguideId} />
    </div>
  );
}