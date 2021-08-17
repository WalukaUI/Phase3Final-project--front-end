import React, { useEffect, useState } from "react";
import TournamentCard from "./TounarmenrCard"
import "./tournements.css"

const URL = "http://127.0.0.1:9393";

function Tournaments(){
    const [tournement, setTournements]=useState([])
     
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    useEffect(() => {
        fetch(`${URL}/tournaments`, getrequestOptions)
          .then((res) => res.json())
          .then((game) => setTournements(game));
      },[]);


    
    const populateTournements=tournement.map((game)=>{
        return <TournamentCard game={game}  key={game.id}/>
    })

    return populateTournements
}

export default Tournaments