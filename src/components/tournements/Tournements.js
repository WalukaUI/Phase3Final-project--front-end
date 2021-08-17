import React, { useEffect, useState } from "react";
import { URL } from "../../constraints/URL"
import TournamentCard from "./TounarmenrCard"
import "./tournements.css"

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
      },[]);


    
    const populateTournements=tournement.map((game)=>{
        return <TournamentCard game={game}  key={game.id}/>
    })

    return populateTournements
}

export default Tournaments