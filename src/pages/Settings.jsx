import { useAuth } from "../hooks/useAuth";
import AddressForm from "../Components/AddressForm";
import "../Components/Settings.css";

const Settings = () => {
  const user = useAuth();
  const userInfo = {
    address: "123 Main St, City, State, Zip",
    interests: ["Healthcare", "Environment", "Education"],
  };

  // Check if user is not null before accessing properties
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
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
      <ul className="interests-list">
        {userInfo.interests.map((interest, index) => (
          <li key={index} className="interest-item">
            {interest}
          </li>
        ))}
      </ul>
      <AddressForm />
    </div>
  );
};

export default Settings;
