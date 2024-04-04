import React from 'react';
import { Container, Typography } from '@mui/material';
import './Education.css';

const Education = () => {
    return (
        <Container className="education-container">
            <Typography variant="h2" className="education-heading" sx={{paddingBottom: "10px"}}>Understanding the United States Congress</Typography>
            <Typography variant="body1" className="education-text">
                The United States Congress is the legislative branch of the federal government
                of the United States. It is a bicameral body, meaning it consists of two separate chambers:
                the Senate and the House of Representatives.
            </Typography>
            <Typography variant="h4" className="education-subheading" sx={{paddingTop: "20px", paddingBottom: "10px"}}>The Senate</Typography>
            <Typography variant="body1" className="education-text">
                The Senate is composed of 100 Senators, two from each state, regardless of the state's population.
                Senators serve staggered six-year terms. The Vice President of the United States serves as the President
                of the Senate but can only vote in the event of a tie. The Senate is responsible for confirming or rejecting
                presidential nominations for federal executive and judicial posts, ratifying treaties, and serving as the
                jury in impeachment trials.
            </Typography>
            <Typography variant="h4" className="education-subheading" sx={{paddingTop: "20px", paddingBottom: "10px"}}>The House of Representatives</Typography>
            <Typography variant="body1" className="education-text">
                The House of Representatives is composed of 435 members, with each member representing a congressional district
                with roughly equal population. Members of the House, known as Representatives or Congressmen/women, serve
                two-year terms. The Speaker of the House, elected by the majority party, presides over the chamber. The House
                is responsible for proposing and passing federal legislation, as well as initiating revenue bills.
            </Typography>
            <Typography variant="h4" className="education-subheading" sx={{paddingTop: "20px", paddingBottom: "5px"}}>How Congress Operates</Typography>
            <Typography variant="body1" className="education-text">
                Congress operates through a process of introducing, debating, amending, and voting on bills. Both chambers must
                pass identical versions of a bill before it can be sent to the President for approval or veto. Committees and
                subcommittees play a crucial role in the legislative process, as they review and amend bills before they are
                presented to the full chamber for consideration.
            </Typography>
        </Container>
    );
}

export default Education;
