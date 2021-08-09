import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../players/players.css"
import EditPlayer from './EditPlayer';

function PlayersCards({name, age, skill, id, deletePlayer}){
  const[isOpen, setIsOpen]=useState(false)

  function onClickOfDelete(e){
    e.preventDefault()
    deletePlayer(id)
  }
  function onClickofEdit(e){
    e.preventDefault()
    setIsOpen(!isOpen)

  }

    return <>
    <div className="cardstyle" >
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">{skill}</p>
    <p className="card-text">Age: {age}</p>
    <Link to={`/players/${id}`}>
       <a href="!#" className="btn btn-primary">More details</a>
    </Link>
    <a href="!#" onClick={onClickofEdit} className="btn btn-primary">Edit</a>
    <a  href="!#" onClick={onClickOfDelete} className="btn btn-primary">Delete</a>
  </div>
</div>
  <EditPlayer isOpen={isOpen}/>
</>
}

export default PlayersCards