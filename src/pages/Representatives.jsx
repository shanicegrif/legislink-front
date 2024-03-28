import axios from "axios"; // Import axios
import { useLayoutEffect, useState } from "react";
import { fetchForHouse } from "../api/axios";
import { useLocation } from "react-router-dom";
import RepresentativeCard from "../components/representatives/RepresentativeCard";
import Loading from "../components/messages/Loading.jsx";
import Error from "../components/messages/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const serverURL = import.meta.env.VITE_BASE_URL;

export default function Representatives() {
  const [representativesNY, setRepresentativesNY] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let location = useLocation();

  useLayoutEffect(() => {
    setLoading(true); // Set loading state to true when starting data fetching
    fetchForHouse()
      .then((res) => {
        if (res.status !== 200) {
          axios.get(`${serverURL}/representatives`).then((res) => {
            setRepresentativesNY(res.data.data.payload);
            setLoading(false); // Update loading state after data fetching is complete
          }).catch((error) => {
            setError(error);
            setLoading(false); // Update loading state even if there's an error
          });
        } else {
          console.log(
            res.data.results[0].members.filter(
              (member) => member.state === "NY"
            )
          );
          setRepresentativesNY(
            res.data.results[0].members.filter(
              (member) => member.state === "NY"
            )
          );
          setLoading(false); // Update loading state after data fetching is complete
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // Update loading state even if there's an error
      });
  }, [location]);
  

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
      {representativesNY.map((representative) => (
          <RepresentativeCard key={representative.id} representative={representative} />
        ))}
      </div>
    </div>
  );
}
