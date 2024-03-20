import { useState } from "react";
import { fetchForBills } from "../api/axios";
import BillsCard from "../components/bills/billscard";


export default function Bills() {
    const [bills, setBills] = useState([]);
    const [keyword, setKeyword] = useState('');

    const fetchBillsByKeyword = async () => {
        try {
            const res = await fetchForBills(keyword);
            setBills(res.data.results[0].bills);

        } catch (error) {
            console.error('Error fetching bills:', error);
        }
    };

    const handleSearch = () => {
        fetchBillsByKeyword();
    }; 

    return (
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter keyword for filtering" />
            <button onClick={handleSearch}>Search</button>
            <h1>
                {bills.map((elem, index) => ( 
                <BillsCard key={index} bill={elem} />
                ))}
            </h1>
        </div>
        );
}