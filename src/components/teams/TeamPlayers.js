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
    return<div className="cardstyle">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{card.name}</h4>
        <p className="card-text">{card.skill}</p>
        <p className="card-text">Age: {card.age}</p>
        <Link to={`/players/${card.id}`}>
    <button className="btn btn-primary">More details</button>
    </Link>
      </div>
    </div>;
  });

  return populatePlayers;
}

export default TeamPlayers;
