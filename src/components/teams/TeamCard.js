import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../players/players.css"
import EditTeam from "./EditTeam"

function TeamCard({team,deleteTeam, updateTeam}){
  const[isOpen, setIsOpen]=useState(false)
  const [updateData, setUpdateData] = useState(null)

  function handleDeleteTeam(e){
    e.preventDefault()
    deleteTeam(team.id)
  }
  function showEditTeamForm(e){
    e.preventDefault()
    setIsOpen(!isOpen)
    setUpdateData(team)

  }

    return <>
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
          <Link to={`/teams/${team.id}`}>
            <a href="!#" className="btn btn-primary">
              All the Players of {team.name}
            </a>
          </Link>
          <button className="btn btn-info" onClick={showEditTeamForm}>Edit Team</button>
          <button className="btn btn-warning" onClick={handleDeleteTeam}>Delete Team</button>
        </div>
      </div>
      <EditTeam isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              updateData={updateData} 
              setUpdateData={setUpdateData}
              updateTeam={updateTeam}
              />
</>
}

export default TeamCard