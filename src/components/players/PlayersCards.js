import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../players/players.css";
import EditPlayer from "./EditPlayer";
import Aos from "aos"
import "aos/dist/aos.css"

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

  useEffect(()=>{
    Aos.init({});
  },[])
  return (
    <>
    {/* data-aos={idx>9?"fade-up":null} */}
      <div  className="cardstyle">
        <div>
        <img src={card.image_url?card.image_url:null} className="card-img-top" alt="..." />
        <h4 className="card-title">{card.name}</h4>
        </div>
        <div>

        </div>
       
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
