import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faScaleBalanced, faUserTie, faTruckFast, faBuildingFlag, faHandshake } from '@fortawesome/free-solid-svg-icons';
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
import AodIcon from '@mui/icons-material/Aod';


const iconImage = {
    unknown: <QuestionMarkIcon fontSize="large"/>,
    judiciary: <GavelIcon fontSize="large"/>,
    pension: <SavingsIcon fontSize="large"/>,
    banking: <AccountBalanceIcon fontSize="large"/>,
    housing: <HouseIcon fontSize="large"/>,
    urban: <LocationCityIcon fontSize="large"/>,
    tech: <MemoryIcon fontSize="large"/>,
    agriculture: <AgricultureIcon fontSize="large"/>,
    environment: <ForestIcon fontSize="large"/>,
    health: <LocalHospitalIcon fontSize="large"/>,
    natural: <NatureIcon fontSize="large"/>,
    veterans: <MilitaryTechIcon fontSize="large"/>,
    rules: <FontAwesomeIcon icon={faRuler} fontSize="30px"/>,
    governmental: <FontAwesomeIcon icon={faScaleBalanced} fontSize="30px"/>,
    homeland: <SecurityIcon fontSize="large"/>,
    science: <ScienceIcon fontSize="large"/>,
    finance: <AttachMoneyIcon fontSize="large"/>,
    economic: <WorkOutlineIcon fontSize="large"/>,
    administration: <FontAwesomeIcon icon={faUserTie} fontSize="30px"/>,
    transportation: <DirectionsTransitIcon fontSize="large"/>,
    financial: <CreditScoreIcon fontSize="large"/>,
    armed: <LocalPoliceIcon fontSize="large"/>,
    commerce: <StoreIcon fontSize="large"/>,
    energy: <EnergySavingsLeafIcon fontSize="large"/>,
    education: <SchoolIcon fontSize="large"/>,
    space: <RocketIcon fontSize="large"/>,
    oversight: <FontAwesomeIcon icon={faTruckFast} fontSize="30px"/>,
    relations: <FontAwesomeIcon icon={faBuildingFlag} fontSize="30px"/>,
    affairs: <FontAwesomeIcon icon={faHandshake} fontSize="30px"/>,
    ways: <AodIcon fontSize="large"/>,
}

export default iconImage;
