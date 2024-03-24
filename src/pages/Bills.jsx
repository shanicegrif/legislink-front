import { useEffect, useState } from "react";
import { fetchForBills } from "../api/axios";

import BillsCard from "../components/bills/billscard";
import { useLocation } from "react-router-dom";


export default function Bills() {
    const [bills, setBills] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [activeTab, setActiveTab] = useState('introduced_date');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

    const fetchBillsByKeyword = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchForBills(keyword);
            //console.log(res)
            if(res.data && res.data.results && res.data.results.length > 0) {
                let fetchedBills = res.data.results[0].bills;
                setBills(fetchedBills);
                console.log(fetchedBills)
                //console.log(bills)
            } else {
                setBills([]);
            }
            //console.log(res)

        } catch (error) {
            console.error('Error fetching bills. Please try again.', error);
        }
        setLoading(false);
    };

    const handleSearch = () => {
        fetchBillsByKeyword();
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetchBillsByKeyword();
    },[activeTab])

    return (
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter keyword for filtering" />
            <button onClick={handleSearch}>Search</button>

            <div>
                <button onClick={() => handleTabChange('introduced_date')} className={activeTab === 'introduced_date' ? 'active' : ''}>Introduced</button>
                <button onClick={() => handleTabChange('updated')} className={activeTab === 'updated' ? 'active' : ''}>Updated</button>
                <button onClick={() => handleTabChange('active')} className={activeTab === 'active' ? 'active' : ''}>Active</button>
                <button onClick={() => handleTabChange('passed')} className={activeTab === 'passed' ? 'active' : ''}>Passed</button>
                <button onClick={() => handleTabChange('enacted')} className={activeTab === 'enacted' ? 'active' : ''}>Enacted</button>
                <button onClick={() => handleTabChange('vetoed')} className={activeTab === 'vetoed' ? 'active' : ''}>Vetoed</button>
            </div>

            {loading && <p>Loading... </p>}
            {error && <p>{error}</p>}

            <div>
                {bills?.map((elem, index) => {
                    console.log(elem)
                    return (
                        <BillsCard key={elem.id} bill={elem} />
                    )})}
            </div>
        </div>
    );
}