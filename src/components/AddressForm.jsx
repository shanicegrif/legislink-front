import { useState } from "react";

const AddressForm = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [submittedAddress, setSubmittedAddress] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state based on the input field's name
    switch (name) {
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zip":
        setZip(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Concatenate the address fields to form the complete address
    const fullAddress = `${address}, ${city}, ${state}, ${zip}`;
    setSubmittedAddress(fullAddress);
    // Clear the form fields after submission
    setAddress("");
    setCity("");
    setState("");
    setZip("");
  };

  return (
    <div>
      <h2 className="settings-heading">Add or Update Home Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your street address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your city"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your state"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your ZIP code"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
