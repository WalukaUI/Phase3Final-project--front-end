import React from 'react';
import { Link } from "react-router-dom";

function PlayerCard({name, age, skill, id}){

    return <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">{skill}</p>
    <p className="card-text">Age: {age}</p>
    <Link to={`/players/${id}`}>
    <a href="#" className="btn btn-primary">More details</a>
    </Link>
  </div>
</div>
}

export default PlayerCard