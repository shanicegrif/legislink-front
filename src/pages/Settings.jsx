import { useAuth } from "../hooks/useAuth";
import { useLayoutEffect, useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddressForm from "../components/AddressForm";
import Loading from "../components/messages/Loading";
import "../components/Settings.css";

import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;

const Settings = () => {
  const user = useAuth();
  const [userInfo, setUserInfo] = useState({
    street: "",
    city: "", 
    state: "",
    zip:""
  });

  /* 
  "Healthcare",
    "Environment",
    "Education",
  */
  const [interests, setInterests] = useState([]);

  const [newInterest, setNewInterest] = useState("");

  useEffect(() => {
    // Ensure user is defined before fetching data
    if (user) {
      axios.get(`${serverURL}/users/${user.uid}`).then(res =>
        setUserInfo({
          street: res.data.data.payload.user_street,
          city: res.data.data.payload.user_city,
          state: res.data.data.payload.user_state,
          zip: res.data.data.payload.user_zip
        })
      );

      axios.get(`${serverURL}/users_interests/${user.uid}`).then(res =>
        res.data.data.payload.forEach(element =>
          setInterests([...interests, element.users_interests_keywords])
        )
      );
    }
  }, [user]); // Include user as dependency to react to changes

  const handleAddInterest = () => {
    if (newInterest.trim() !== "") {
      if (!interests.find(elem => elem.toLowerCase() === newInterest.trim().toLowerCase())) {
        setInterests([...interests, newInterest.trim()]);
        axios.post(`${serverURL}/users_interests/${user.uid}`, { newInterest: newInterest });
      }
      setNewInterest("");
    }
  };

  const handleDelete = (interestToDelete) => {
    axios.delete(`${serverURL}/users_interests/${user.uid}/${interestToDelete}`);
    setInterests(interests.filter(interest => interest !== interestToDelete));
  };

  const handleAddressSubmit = (submittedAddress) => {
    setUserInfo({ ...userInfo, ...submittedAddress });
    axios.put(`${serverURL}/users/${user.uid}`, { ...userInfo });
  };

  // Check if user is not null before accessing properties
  if (!user) {
    return <Loading />;
  }


  return (
    <div className="settings-wrapper">
      <div className="settings-container">
        <h2 className="settings-heading"> Welcome to your Account</h2>
        <div className="account-info">
          {user.displayName && (
            <p>
              <strong>Name:</strong> {user.displayName}
            </p>
          )}
          {user.email && (
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          )}
          <p>
            <strong>Home Address:</strong> {`${userInfo.street}, ${userInfo.city}, ${userInfo.state}, ${userInfo.zip}`}
          </p>
        </div>
        <h2 className="settings-heading">My Areas of Interest</h2>
        <div className="interests-container">
          <div className="add-interest-container">
            <TextField
              label="Add New Interest"
              variant="outlined"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              sx={{
                width: "200px", // Adjust the width as needed
                marginBottom: "20px",
                marginRight: "10px",
                "& input": {
                  padding: "14px", // Adjust the padding to make it smaller
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddInterest}
              sx={{
                width: "50px", // Adjust the width as needed
                marginTop: "5px", // Adjust the top margin as needed
                marginLeft: "5px", // Adjust the left margin as needed
              }}
            >
              Add
            </Button>
          </div>
          <div className="interests">
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap", // Ensure items wrap when needed
                justifyContent: "center", // Center items horizontally
              }}
            >
              {interests.map((interest, index) => (
                <Chip
                  key={index}
                  label={interest}
                  variant="outlined"
                  onDelete={() => handleDelete(interest)}
                  style={{margin: "5px"}}
                />
              ))}
            </Stack>
          </div>
        </div>
        <AddressForm onSubmit={handleAddressSubmit} />
      </div>
    </div>
  );
};

export default Settings;
