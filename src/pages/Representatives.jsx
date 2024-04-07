import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { fetchForHouse, fetchForSenate } from "../api/axios";
import { useLocation } from "react-router-dom";
import RepresentativeCard from "../components/representatives/RepresentativeCard";
import SenateCard from "../components/representatives/SenateCard.jsx";
import Loading from "../components/messages/Loading.jsx";
import Error from "../components/messages/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/representatives/RepSenCard.css"

const serverURL = import.meta.env.VITE_BASE_URL;

function useFetchData(fetchFunction, setError) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    setLoading(true);
    fetchFunction()
      .then((res) => {
        if (res.status !== 200) {
          axios.get(`${serverURL}/${fetchFunction === fetchForHouse ? 'representatives' : 'senates'}`)
            .then((res) => {
              setData(res.data.data.payload);
              setLoading(false);
            })
            .catch((error) => {
              setError(error);
              setLoading(false);
            });
        } else {
          setData(res.data.results[0].members.filter((member) => member.state === "NY"));
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [fetchFunction]);

  return { loading, data };
}

export default function Representatives() {
  const [error, setError] = useState(null);
  const { loading: loadingHouse, data: houseMembers } = useFetchData(fetchForHouse, setError);
  const { loading: loadingSenate, data: senatesNY } = useFetchData(fetchForSenate, setError);
  const location = useLocation();

  if (loadingHouse || loadingSenate) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="representatives-container">
      <h2>New York Senate</h2>
      <div className="rep-container">
        {senatesNY.map((representative) => (
          <SenateCard key={representative.id} representative={representative} />
        ))}
      </div>
      <h2>New York House of Representatives</h2>
      <div className="rep-container" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 150px)', paddingTop: '8px', paddingBottom: '8px' }}>
        {houseMembers.map((representative) => (
          <RepresentativeCard key={representative.id} representative={representative} />
        ))}
      </div>
    </div>
  );
}
