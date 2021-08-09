import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../players/players.css"
import EditPlayer from './EditPlayer';

function PlayersCards({card ,deletePlayer, updatePlayer}){
  const[isOpen, setIsOpen]=useState(false)
  const [updateData, setUpdateData] = useState(null)

  function onClickOfDelete(e){
    e.preventDefault()
    deletePlayer(card.id)
  }
  function onClickofEdit(e){
    e.preventDefault()
    setIsOpen(!isOpen)
    setUpdateData(card)

  }
    return <>
    <div className="cardstyle" >
    <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{card.name}</h4>
    <p className="card-text">{card.skill}</p>
    <p className="card-text">Age: {card.age}</p>
    <Link to={`/players/${card.id}`}>
       <a href="!#" className="btn btn-primary">More details</a>
    </Link>
    <a href="!#" onClick={onClickofEdit} className="btn btn-primary">Edit</a>
    <a  href="!#" onClick={onClickOfDelete} className="btn btn-primary">Delete</a>
  </div>
</div>
  <EditPlayer isOpen={isOpen} 
              card={card} 
              setIsOpen={setIsOpen} 
              updateData={updateData} 
              setUpdateData={setUpdateData}
              updatePlayer={updatePlayer}
              />
</>
}

export default PlayersCards