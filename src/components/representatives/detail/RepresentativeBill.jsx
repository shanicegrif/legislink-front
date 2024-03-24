import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
const propublicaAPIKey = import.meta.env.VITE_BASE_PROPUBLICA_KEY;

export default function RepresntativeBill(){
    const [ type, setType ] = useState("introduced");
    const [ bills, setBills ] = useState([]);
    const {bioguideID} = useParams();
    useLayoutEffect(()=>{
        axios.get(`https://api.propublica.org/congress/v1/members/${bioguideID}/bills/${type}.json`, {headers: {
            "X-API-Key": `${propublicaAPIKey}`,
        }}).then(res => setBills(res.data.results[0].bills.filter(elem => elem.congress == "118")));
    },[bioguideID, type]);
    function typeOnChangeHandler(event){
        setType(event.target.value);
        console.log(type)
    }
    return(
        <div>
            <select onChange={typeOnChangeHandler} value={type}>
                {/*introduced, updated, active, passed, enacted or vetoed */}
                <option value="introduced">Introduced</option>
                <option value="updated">Updated</option>
                <option value="active">Active</option>
                <option value="passed">Passed</option>
                <option value="enacted">Enacted</option>
                <option value="vetoed">Vetoed</option>
            </select>
            <div>
                {bills.map((bill => (
                    <div>
                        <div>
                            {bill.bill_id}
                        </div>
                        <div>
                            {bill.title}
                        </div>
                        <div>
                            {bill.summary}
                        </div>
                    </div>
                )))}
            </div>
        </div>
    )
}