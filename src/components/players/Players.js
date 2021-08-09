import React, { useEffect, useState } from "react";
import "./players.css";
import "./PlayersCards";
import PlayersCards from "./PlayersCards";

const URL = "http://127.0.0.1:9393";

function Players() {
  const [allPlayes, setAllPlayers] = useState([]);

  useEffect(() => {
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${URL}/players`, getrequestOptions)
      .then((res) => res.json())
      .then((player) => setAllPlayers(player));
  }, []);

  function deletePlayer(id){
    fetch(`${URL}/players/${id}`, {method: "DELETE"})
    const newPlayers=allPlayes.filter(person => person.id !== id)
    setAllPlayers(newPlayers)
  }

  const playerstoCard = allPlayes.map((card) => {
    return (
      <PlayersCards
        key={card.id}
        card={card}
        deletePlayer={deletePlayer}
      />
    );
  });
  return <div>{playerstoCard}</div>;
}
export default Players;
