import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../players/players.css";
import EditPlayer from "./EditPlayer";

function PlayersCards({ card, deletePlayer, updatePlayer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  function onClickOfDelete(e) {
    e.preventDefault();
    deletePlayer(card.id);
  }
  function onClickofEdit(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    setUpdateData(card);
  }
  return (
    <>
      <div className="cardstyle">
        <img src={card.image_url?card.image_url:null} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{card.name}</h4>
          <p className="card-text">{card.skill}</p>
          <p className="card-text">Age: {card.age}</p>
          <div className="btnbox">
            <Link to={`/players/${card.id}`}>
              <button className="btn btn-primary">More details</button>
            </Link>
            <button onClick={onClickofEdit} className="btn btn-info">
              Edit
            </button>
            <button onClick={onClickOfDelete} className="btn btn-warning">
              Delete
            </button>
          </div>
        </div>
      </div>
      <EditPlayer
        isOpen={isOpen}
        key={card.id}
        card={card}
        setIsOpen={setIsOpen}
        updateData={updateData}
        setUpdateData={setUpdateData}
        updatePlayer={updatePlayer}
      />
    </>
  );
}

export default PlayersCards;
