import { useEffect, useState } from "react";
import { getAllMembers } from "../api/axios.js";
import RepresentativeCard from "../components/representatives/RepresentativeCard.jsx";
import SenateCard from "../components/representatives/SenateCard.jsx";
import Loading from "../components/messages/Loading.jsx";
import Error from "../components/messages/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/representatives/RepSenCard.css";

export default function Representatives() {
  const [houseMembers, setHouseMembers] = useState([]);
  const [senateMembers, setSenateMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getAllMembers()
      .then((members) => {
        console.log(members)
        const nyMembers = members.filter((member) => member.state === "New York");
        const house = nyMembers.filter((member) => member.district).sort((a,b) => a.district - b.district);
        const senate = nyMembers.filter((member) => !member.district);

        setHouseMembers(house);
        setSenateMembers(senate);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="representatives-container">
      <h2>New York Senate</h2>
      <div className="rep-container">
        {senateMembers.map((representative) => (
          <SenateCard key={representative.bioguideId} representative={representative} />
        ))}
      </div>
      <h2>New York House of Representatives</h2>
      <div className="rep-container" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 150px)', paddingTop: '8px', paddingBottom: '8px' }}>
        {houseMembers.map((representative) => (
          <RepresentativeCard key={representative.
            bioguideId} representative={representative} />
        ))}
      </div>
    </div>
  );
}