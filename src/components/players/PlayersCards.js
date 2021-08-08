import React from 'react';
import { Link } from "react-router-dom";
import "../players/players.css"

function PlayersCards({name, age, skill, id, deletePlayer}){

  function onclickOfDelete(e){
    e.preventDefault()
    deletePlayer(id)
  }

    return <div className="cardstyle">
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">{skill}</p>
    <p className="card-text">Age: {age}</p>
    <Link to={`/players/${id}`}>
       <a href="!#" className="btn btn-primary">More details</a>
    </Link>
    <a href="!#" className="btn btn-primary">Edit</a>
    <a  href="!#" onClick={onclickOfDelete} className="btn btn-primary">Delete</a>
  </div>
</div>
}

export default PlayersCards