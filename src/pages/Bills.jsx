import { useState } from "react";
import { fetchForBills } from "../api/axios";
import BillsCard from "../components/bills/billscard";


export default function Bills() {
    const [bills, setBills] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [activeTab, setActiveTab] = useState('introduced_date');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBillsByKeyword = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchForBills(keyword);
            if(res.data && res.data.results && res.data.results.length > 0) {
                setBills(res.data.results[0].bills);
                console.log(bills)
            } else {
                setBills([]);
            }
            console.log(res)

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
                {bills.map((elem, index) => (
                    elem[activeTab] && <BillsCard key={elem.id} bill={elem} />
                ))}
            </div>
        </div>
    );
}