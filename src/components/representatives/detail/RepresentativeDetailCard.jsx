import axios from "axios";
import { useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./RepDetailCard.css"

export default function RepresentativeDetailCard({representative}){
    const { bioguideID } = useParams();    

    return (
        <div className="card">
          <div className="card-content">
            <div className="card-img">
              <img src={`https://www.congress.gov/img/member/${representative.id.toLowerCase()}_200.jpg`} className="card-img-top" />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {representative.short_title} {representative.first_name}{" "}
                {representative.last_name} {representative.suffix}
              </h5>
              <p className="card-text">District: {representative.district}</p>
              <p className="card-text">Homepage: {representative.url}</p>
              <p className="card-text">Phone: {representative.phone}</p>
            </div>
          </div>
        </div>
      );
}
