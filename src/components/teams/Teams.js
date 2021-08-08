import React from "react"
import "./teams.css"

function Teams({teams}){
    
 const allTeams=teams.map((team)=>{
    return <div className="card text-center">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
             <a className="nav-link active" href="#">{team.name}</a>
           </li>
      </ul>
    </div>
    <div className="card-body">
      <h5 className="card-title">Team Performance</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      
      <a href="#" className="btn btn-primary">All the Players of {team.name}</a>
    </div>
   </div>
 })

 return allTeams
}

export default Teams