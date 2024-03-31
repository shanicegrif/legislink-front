import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../components/Settings.css';

const AddressForm = ({ onSubmit }) => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the corresponding state based on the input field's name
        switch (name) {
            case 'address':
                setAddress(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'zip':
                setZip(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Concatenate the address fields to form the complete address
        //const fullAddress = `${address}, ${city}, ${state}, ${zip}`;
        // Call the onSubmit function passed from the parent component
        onSubmit({
            street: address,
            city: city,
            state: state,
            zip: zip
        });
        // Clear the form fields after submission
        setAddress('');
        setCity('');
        setState('');
        setZip('');
    };

    return (
        <div>
            <h2 className="settings-heading">Add or Update Home Address</h2>
            <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2}>
                    <TextField
                        id="address"
                        name="address"
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={handleChange}
                        placeholder="Enter your street address"
                        fullWidth
                        required
                    />
                    <TextField
                        id="city"
                        name="city"
                        label="City"
                        variant="outlined"
                        value={city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        fullWidth
                        required
                    />
                    <TextField
                        id="state"
                        name="state"
                        label="State"
                        variant="outlined"
                        value={state}
                        onChange={handleChange}
                        placeholder="Enter your state"
                        fullWidth
                        required
                    />
                    <TextField
                        id="zip"
                        name="zip"
                        label="ZIP Code"
                        variant="outlined"
                        value={zip}
                        onChange={handleChange}
                        placeholder="Enter your ZIP code"
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    );
}

export default AddressForm;
