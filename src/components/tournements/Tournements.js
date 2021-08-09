import React, { useEffect, useState } from "react";
import "./tournements.css"

const URL = "http://127.0.0.1:9393";

function Tournaments(){
    const [tournement, setTournements]=useState([])
     
    useEffect(() => {
        let getrequestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        fetch(`${URL}/tournaments`, getrequestOptions)
          .then((res) => res.json())
          .then((game) => setTournements(game));
      }, []);
    
    const populateTournements=tournement.map((game)=>{
        return<div className="card">
        <div className="card-header">
          {game.name}
        </div>
        <div className="card-body">
          <p className="card-text">Venue</p>
          <h6 className="card-title">{game.venue}</h6>
          
        </div>
      </div>
    })

    return populateTournements
}

export default Tournaments