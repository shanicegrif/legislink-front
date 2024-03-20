import { useLayoutEffect, useState } from "react";
import { fetchForBills } from "../api/axios";
import BillsCard from "../components/bills/billscard";
import { useLocation } from "react-router-dom";


export default function Bills() {
    const [bills, setBills] = useState([]);
    const [keyword, setKeyword] = useState('');
    let location = useLocation();


    const fetchBillsByKeyword = async () => {
        try {
            const res = await fetchForBills(keyword);
            setBills(res.data.results[0].bills);

        } catch (error) {
            console.error('Error fetching bills:', error);
        }
    };

    useLayoutEffect(() => {
        fetchBillsByKeyword();
    }, [keyword, location]);

    // useLayoutEffect(() => {
    //     fetchForBills().then((res) => {
    //         setBills(res.data.results[0].bills)
    //     }).catch(function (error) {
    //         if (error.response) {
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //             console.log(error.request);
    //         } else {
    //             console.log('Error', error.message);
    //         }
    //     });
    // }, [location]);
    return (
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter keyword for filtering" />
            <button>Search</button>
            <h1>
                {bills.map((elem, index) => ( 
                <BillsCard key={index} bill={elem} />
                ))}

            </h1>
        </div>
        );
}