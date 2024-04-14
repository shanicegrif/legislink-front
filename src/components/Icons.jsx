import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faScaleBalanced, faUserTie } from '@fortawesome/free-solid-svg-icons';
import SchoolIcon from '@mui/icons-material/School';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import StoreIcon from '@mui/icons-material/Store';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import NatureIcon from '@mui/icons-material/Nature';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScienceIcon from '@mui/icons-material/Science';
import SecurityIcon from '@mui/icons-material/Security';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ForestIcon from '@mui/icons-material/Forest';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GavelIcon from '@mui/icons-material/Gavel';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HouseIcon from '@mui/icons-material/House';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RocketIcon from '@mui/icons-material/Rocket';
import MemoryIcon from '@mui/icons-material/Memory';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const iconImage = {
    unknown: <QuestionMarkIcon fontSize="large"/>,
    judiciary: <GavelIcon fontSize="large"/>,
    pension: <SavingsIcon fontSize="large"/>,
    banking: <AccountBalanceIcon fontSize="large"/>,
    housing: <HouseIcon fontSize="large"/>,
    urban: <LocationCityIcon fontSize="large"/>,
    tech: <MemoryIcon fontSize="large"/>,
    agricultural: <AgricultureIcon fontSize="large"/>,
    environment: <ForestIcon fontSize="large"/>,
    health: <LocalHospitalIcon fontSize="large"/>,
    natural: <NatureIcon fontSize="large"/>,
    veterans: <MilitaryTechIcon fontSize="large"/>,
    rules: <FontAwesomeIcon icon={faRuler} size="2x"/>,
    governmental: <FontAwesomeIcon icon={faScaleBalanced} size="2x"/>,
    homeland: <SecurityIcon fontSize="large"/>,
    science: <ScienceIcon fontSize="large"/>,
    finance: <AttachMoneyIcon fontSize="large"/>,
    economic: <WorkOutlineIcon fontSize="large"/>,
    administration: <FontAwesomeIcon icon={faUserTie} size="2x"/>,
    transportation: <DirectionsTransitIcon fontSize="large"/>,
    financial: <CreditScoreIcon fontSize="large"/>,
    armed: <LocalPoliceIcon fontSize="large"/>,
    commerce: <StoreIcon fontSize="large"/>,
    energy: <EnergySavingsLeafIcon fontSize="large"/>,
    education: <SchoolIcon fontSize="large"/>,
    space: <RocketIcon fontSize="large"/>,
}

export default iconImage;
