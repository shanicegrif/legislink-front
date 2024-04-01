import React from 'react';
import { Typography } from '@mui/material'; // Import Material-UI component

const Poll = ({ poll }) => {
    return (
        <div className="poll">
            <Typography variant="h3" gutterBottom>{poll.title}</Typography>
            <Typography variant="body1">{poll.description}</Typography>
            {/* Additional poll details */}
        </div>
    );
}

export default Poll;

