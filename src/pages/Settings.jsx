import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddressForm from "../Components/AddressForm";
import Loading from "../components/messages/Loading";
import "../components/Settings.css";

const Settings = () => {
  const user = useAuth();
  const [userInfo, setUserInfo] = useState({
    address: "123 Main St, City, State, Zip",
  });

  const [interests, setInterests] = useState([
    "Healthcare",
    "Environment",
    "Education",
  ]);

  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    if (newInterest.trim() !== "") {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const handleDelete = (interestToDelete) => {
    setInterests(interests.filter((interest) => interest !== interestToDelete));
  };

  const handleAddressSubmit = (submittedAddress) => {
    setUserInfo({ ...userInfo, address: submittedAddress });
  };

  // Check if user is not null before accessing properties
  if (!user) {
    return <Loading />;
  }

  return (
    <div className="settings-wrapper">
      <div className="settings-container">
        <h2 className="settings-heading">Account Information</h2>
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
            <strong>Home Address:</strong> {userInfo.address}
          </p>
        </div>
        <h2 className="settings-heading">Areas of Interest for Bills</h2>
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
          <Stack direction="row" spacing={1}>
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                variant="outlined"
                onDelete={() => handleDelete(interest)}
              />
            ))}
          </Stack>
        </div>
        <AddressForm onSubmit={handleAddressSubmit} />
      </div>
    </div>
  );
};

export default Settings;
