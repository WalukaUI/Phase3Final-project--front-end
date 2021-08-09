import React, { useEffect, useState } from "react";
import "./teams.css";
import { Link } from "react-router-dom";

const URL = "http://127.0.0.1:9393/";
function Teams() {
  const [teams, setTeams] = useState([]);
  const [addaTeamForm,setaddaTeamForm]=useState(false)
  const [addTeam,setAddTeam]=useState([])

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
    const newTeamsList = teams.filter((team) => team.id !== id);
    setTeams(newTeamsList);
  }

  //-----------------supportive functions--------------------------

  function handleDeleteTeam(id){
    deleteTeam(id);
    
  }

  function createNewTeam(e){
    e.preventDefault();
    setaddaTeamForm(!addaTeamForm);
    createTeam(addTeam);
  }

  function handleAddATeam(e){
    e.preventDefault()
    let newTeam = { ...addTeam, [e.target.name]: e.target.value }
    setAddTeam(newTeam)
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

  return <div>
    <button class="btn btn-outline-light" onClick={handleAddATeam}>Add a Team</button>

    <div className={addaTeamForm ? "display" : "hidden"}>
        <form onSubmit={createNewPlayer}>
          <label>
            Name
            <input
              className="form-control form-control-sm"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleAddPlayer}
            />
          </label>
          <label>
            Age
            <input
              className="form-control form-control-sm"
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleAddPlayer}
            />
          </label>
          <label>
            Skill
            <select className="form-select" name="skill" onChange={handleAddPlayer}>
              <option value="select">Select</option>
              <option value="Allrounder">Allrounder</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
            </select>
          </label>
          <label>
            Team
            <select className="form-select" name="team_id" onChange={handleAddPlayer}>
              <option value="select">Select</option>
              <option value="1">SL</option>
              <option value="2">IND</option>
              <option value="3">AUS</option>
              <option value="4">PAK</option>
            </select>
          </label>
          <label>
            Selected Tournament
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
      

    {allTeams}
    </div>
}

export default Teams;
