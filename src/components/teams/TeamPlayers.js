import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./teamPlayers.css";

const URL = "http://127.0.0.1:9393/";
function TeamPlayers() {
  const [players, setplayers] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`${URL}/teams/${params.id}`)
      .then((res) => res.json())
      .then((data) => setplayers(data));
  }, [params.id]);

  const populatePlayers = players.map((card) => {
    return (
      <>
        <div className="grids">
          {/* data-aos={idx>9?"fade-up":null} */}
          <div className="cardstyle">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={card.image_url ? card.image_url : null}
                  className="card-img-top"
                  alt="..."
                />
                <h5 className="card-title">{card.name}</h5>
              </div>
              <div className="flip-card-back">
                <div className="card-body">
                  <p className="card-text">{card.skill}</p>
                  <p className="card-text">Age: {card.age}</p>
                  <div className="btnbox">
                    <Link to={`/players/${card.id}`}>
                      <button className="btn btn-primary">More details</button>
                    </Link>
                    {/* <button onClick={onClickofEdit} className="btn btn-info">
                  Edit
                </button>
                <button onClick={onClickOfDelete} className="btn btn-warning">
                  Delete
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <EditPlayer
        isOpen={isOpen}
        key={card.id}
        card={card}
        setIsOpen={setIsOpen}
        updateData={updateData}
        setUpdateData={setUpdateData}
        updatePlayer={updatePlayer}
      /> */}
        </div>
      </>
    );
  });

  return populatePlayers;
}

export default TeamPlayers;
