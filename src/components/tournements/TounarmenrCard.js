import React, { useEffect, useState } from "react";
import "./tournementCard.css"
function TournamentCard({ game }) {
  const URL = "http://127.0.0.1:9393";

  const [tour, setTour] = useState([]);

  useEffect(() => {
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${URL}/tournaments/${game.id}`, getrequestOptions)
      .then((res) => res.json())
      .then((game) => setTour(game));
  },[game.id]);

  const populatePtag = tour.map((a) => <p>{a.name}</p>);

  return <>
    <div className="card mainCard">
      <div className="card-header">
        <h4>{game.name}</h4>
      </div>
      <div className="card-body teamGrids">
        <div className="teamCard">
          <h5 className="card-text">Venue: {game.venue} </h5>
          <img src={game.image_url} alt="Playground"/>
        </div>

        <div className="teamCard">
          <h5>Teams of the Tournament</h5>
          <div>
          <h6>{populatePtag}</h6>
          </div>
          
        </div>
      </div>
    </div>
    </>
}

export default TournamentCard;
