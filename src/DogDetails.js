import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({doggo}) {

  if (!doggo) return <Redirect to="/doggos"/>

  return (
    <div className="row DogDetails">
      <div className="col d-flex flex-column align-items-center">
        <img src={doggo.src} alt={doggo.name} />
        <h2>{doggo.name}</h2>
        <h3>{doggo.age} years old</h3>
        <ul>
          {doggo.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/doggos">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;