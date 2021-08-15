import React, { useEffect, useState } from "react";

function TournamentCard({ game }) {
  const URL = "http://127.0.0.1:9393";

  const [tour, setTour] = useState([]);

  let getrequestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetch(`${URL}/tournaments/${game.id}`, getrequestOptions)
      .then((res) => res.json())
      .then((game) => setTour(game));
  }, []);

  const populatePtag = tour.map((a) => <p>{a.name}</p>);

  return (
    <div className="card">
      <div className="card-header">{game.name}</div>
      <div className="card-body">
        <p className="card-text">Venue</p>
        <h6 className="card-title">{game.venue}</h6>
        {populatePtag}
      </div>
    </div>
  );
}

export default TournamentCard;
