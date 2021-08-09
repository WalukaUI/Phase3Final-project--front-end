import React, { useEffect, useState } from "react";
import "./teams.css";
import { Link } from "react-router-dom";

const URL = "http://127.0.0.1:9393/";
function Teams() {
  const [teams, setTeams] = useState([]);

  //GET TEAMS

  useEffect(() => {
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${URL}/teams`, getrequestOptions)
      .then((res) => res.json())
      .then((team) => setTeams(team));
  }, []);

  //DElETE TEAMS

  function deleteTeam(id) {
    fetch(`${URL}/teams/${id}`, { method: "DELETE" });
    const newTeamList = teams.filter((team) => team.id !== id);
    setTeams(newTeamList);
  }

  //-----------------supportive functions--------------------------
  
  function handleDeleteTeam(id){
    deleteTeam(id);
    
  }

  const allTeams = teams.map((team) => {
    const id = team.id;
    return (
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="!#">
                {team.name}
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Team Performance</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to={`/teams/${id}`}>
            <a href="!#" className="btn btn-primary">
              All the Players of {team.name}
            </a>
          </Link>
          <button className="btn btn-warning" onClick={()=>handleDeleteTeam(team.id)}>Delete Team</button>
        </div>
      </div>
    );
  });

  return allTeams;
}

export default Teams;
