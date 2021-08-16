import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./teamPlayers.css";
import TeamPlayer from "./TeamPlayer"

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
    return <TeamPlayer card={card} key={card.id}/>
  });

  return populatePlayers;
}

export default TeamPlayers;
