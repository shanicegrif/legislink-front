import React from "react";
import "../RepCard.css";

export default function RepresentativeCard({ representative }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: "#81b29a" }}
    >
      <img src={`https://www.congress.gov/img/member/${representative.id.toLowerCase()}_200.jpg`} class="card-img-top" />
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
  );
}
