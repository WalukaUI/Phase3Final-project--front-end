import React, { useEffect, useState } from "react";
import "./players.css";
import "./PlayersCards";
import PlayersCards from "./PlayersCards";

const URL = "http://127.0.0.1:9393";

function Players() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [addplayerForm, setAddPlayerForm] = useState(false);
  const [addPlayer, setAddPlayer] = useState({});

//GET PLAYERS

  useEffect(() => {
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${URL}/players`, getrequestOptions)
      .then((res) => res.json())
      .then((player) => setAllPlayers(player));
  }, []);

//DELETE PlAYER

  function deletePlayer(id) {
    fetch(`${URL}/players/${id}`, { method: "DELETE" });
    const newPlayers = allPlayers.filter((person) => person.id !== id);
    setAllPlayers(newPlayers);
  }

//UPDATE PLAYER

  function updatePlayer(playerObject) {
    fetch(`${URL}/players/${playerObject.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObject),
    })
      .then((res) => res.json())
      .then((player) => {
        const newPlayers = allPlayers.filter(
          (person) => person.id !== playerObject.id
        );
        setAllPlayers([...newPlayers, player]);
      });
  }

//CREATE PLAYER

function createPlayer(newPlayerObject) {
  fetch(`${URL}/players`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlayerObject),
  })
    .then((res) => res.json())
    .then((player) => setAllPlayers([...allPlayers, player]))
      
}

  //-----------------supportive functions--------------------------

  function toggleForm(e) {
    e.preventDefault();
    setAddPlayerForm(!addplayerForm);
  }
  function createNewPlayer(e){
    e.preventDefault();
    setAddPlayerForm(!addplayerForm);
    createPlayer(addPlayer);
  }
  function handleAddPlayer(e){
    e.preventDefault();
    let newPlayer = { ...addPlayer, [e.target.name]: e.target.value }
    setAddPlayer(newPlayer)

  }

  const playerstoCard = allPlayers.map((card) => {
    return (
      <PlayersCards
        key={card.id}
        card={card}
        deletePlayer={deletePlayer}
        updatePlayer={updatePlayer}
      />
    );
  });
  return (
    <div>
      <div>
        <button
          className={`btn btn-outline-${addplayerForm ? "danger" : "info"}`}
          onClick={toggleForm}
        >
          {addplayerForm ? "Cancel" : "Add a new Player"}
        </button>
      </div>
      <div className={addplayerForm ? "display" : "hidden"}>
        <form onSubmit={createNewPlayer}>
          <label className="text-white">
            Name
            <input
              className="form-control form-control-sm"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleAddPlayer}
            />
          </label>
          <label className="text-white">
            Age
            <input
              className="form-control form-control-sm"
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleAddPlayer}
            />
          </label>
          <label className="text-white">
            Skill
            <select className="form-select" name="skill" onChange={handleAddPlayer}>
              <option value="select">Select</option>
              <option value="Allrounder">Allrounder</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
            </select>
          </label>
          <label className="text-white">
            Team
            <select className="form-select" name="team_id" onChange={handleAddPlayer}>
              <option value="select">Select</option>
              <option value="1">SL</option>
              <option value="2">IND</option>
              <option value="3">AUS</option>
              <option value="4">PAK</option>
            </select>
          </label>
          <label className="text-white">
            Select a Tournament
            <select
              className="form-select"
              name="tournament_id"
              aria-label="Default select example"
              onChange={handleAddPlayer}
            >
              <option value="select">Select</option>
              <option value="1">T20</option>
              <option value="2">ODI</option>
              <option value="3">TEST</option>
            </select>
          </label>
          <div className="col-sm">
            <button className=" btn btn-success" type="submit">
              Create Player
            </button>
          </div>
        </form>
      </div>

      {playerstoCard}
    </div>
  );
}
export default Players;
