import React, { useEffect, useState } from "react";
import "./teams.css";
import { Link } from "react-router-dom";
import EditTeam from "./EditTeam"

const URL = "http://127.0.0.1:9393/";
function Teams() {
  const [teams, setTeams] = useState([]);
  //---toCreateATeam--

  const [addaTeamForm,setaddaTeamForm]=useState(false)
  const [addTeam,setAddTeam]=useState([])

  //---toUpdateTeam---
  const[isOpen, setIsOpen]=useState(false)
  const [updateData, setUpdateData] = useState(null)

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
  //POST TEAM

  function createTeam(teamObject){
    fetch(`${URL}/teams`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamObject),
    })
      .then((res) => res.json())
      .then((team) => setTeams([...teams, team]))
  }

  //-----------------supportive functions--------------------------
  function updateTeam(id){
   
  }

  function showEditTeamForm(e){
    e.preventDefault();
    setIsOpen(!isOpen)
  }
  function handleDeleteTeam(id){
    deleteTeam(id);
  }

  function toggleForm(e){
    e.preventDefault();
    setaddaTeamForm(!addaTeamForm);
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
          <Link to={`/teams/${id}`}>
            <a href="!#" className="btn btn-primary">
              All the Players of {team.name}
            </a>
          </Link>
          <button className="btn btn-info" onClick={showEditTeamForm}>Edit Team</button>
          <button className="btn btn-warning" onClick={()=>handleDeleteTeam(team.id)}>Delete Team</button>
        </div>
      </div>
      <EditTeam isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              updateData={updateData} 
              setUpdateData={setUpdateData}
              updateTeam={updateTeam}
              />
      </>
  });

  return <div>
          <button
          className={`btn btn-outline-${addaTeamForm ? "danger" : "info"}`}
          onClick={toggleForm}
        >
          {addaTeamForm ? "Cancel" : "Add a new Team"}
        </button>

    <div className={addaTeamForm ? "display" : "hidden"}>
        <form onSubmit={createNewTeam}>
          <label className="text-white">
            Name
            <input
              className="form-control form-control-sm"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleAddATeam}
            />
          </label>
          <label className="text-white">
            Logo URL
            <input
              className="form-control form-control-sm"
              name="logo_url"
              placeholder="Logo URL"
              onChange={handleAddATeam}
            />
          </label>
          <div className="col-sm">
            <button className=" btn btn-success" type="submit">
              Create Team
            </button>
          </div>
        </form>
      </div>
      

    {allTeams}
    </div>
}

export default Teams;
