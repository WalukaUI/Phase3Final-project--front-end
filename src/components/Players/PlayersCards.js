import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./players.css";
import EditPlayer from "./EditPlayer/EditPlayer";
import Aos from "aos";
import "aos/dist/aos.css";

function PlayersCards({ card, deletePlayer, updatePlayer, idx }) {
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

  useEffect(() => {
    Aos.init({});
  }, []);
  return <>
    <div className="grids" data-aos={idx>9?"fade-up":null}>
      {/* data-aos={idx>9?"fade-up":null} */}
      <div className="cardstyle">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={card.image_url ? card.image_url : null}
              className="card-img-top"
              alt="..."
            />
            <h5 className="card-title playerName">{card.name}</h5>
          </div>
          <div className="flip-card-back">
            <div className="card-body">
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
      </div>
    </>
}

export default PlayersCards;
