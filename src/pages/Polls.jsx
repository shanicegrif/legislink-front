import React, { useState, useEffect } from 'react';
import Poll from './Poll';
import { Container, Typography } from '@mui/material'; // Import Material-UI components
import { fetchVoterInfo } from '../../api/civicApi';

const Polls = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const address = "1263 Pacific Ave. Kansas City KS";
                const electionId = "2000";
                const apiKey = "YOUR_API_KEY";
                const data = await fetchVoterInfo(address, electionId, apiKey);
                setPolls(data.polls); // Assuming 'polls' is an array in the API response
            } catch (error) {
                console.error('Error fetching polls:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>Polls</Typography>
            {polls.map(poll => (
                <Poll key={poll.id} poll={poll} />
            ))}
        </Container>
    );
}

export default Polls;

