import React, { useEffect, useState } from "react";
import { URL } from "../../constraints/URL"
import "./teams.css";
import "./EditTeam/EditTeam.css";
import TeamCard from "./TeamCard";


function Teams() {
  const [teams, setTeams] = useState([]);
  //---toCreateATeam--

  const [addaTeamForm, setaddaTeamForm] = useState(false);
  const [addTeam, setAddTeam] = useState([]);

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

  function createTeam(teamObject) {
    fetch(`${URL}/teams`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamObject),
    })
      .then((res) => res.json())
      .then((team) => setTeams([...teams, team]));
  }
  //PATCH TEAMS

  function updateTeam(teamObject) {
    fetch(`${URL}/teams/${teamObject.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamObject),
    })
      .then((res) => res.json())
      .then((team) => {
        const newTeams = teams.filter((t) => t.id !== teamObject.id);
        setTeams([...newTeams, team]);
      });
  }

  //-----------------supportive functions--------------------------
  
  function toggleForm(e) {
    e.preventDefault();
    setaddaTeamForm(!addaTeamForm);
  }

  function createNewTeam(e) {
    e.preventDefault();
    setaddaTeamForm(!addaTeamForm);
    createTeam(addTeam);
  }

  function handleAddATeam(e) {
    e.preventDefault();
    let newTeam = { ...addTeam, [e.target.name]: e.target.value };
    setAddTeam(newTeam);
  }

  const allTeams = teams.map((team) => {
    return (
      <TeamCard
        key={team.id}
        team={team}
        deleteTeam={deleteTeam}
        updateTeam={updateTeam}
      />
    );
  });

  return <>
    <div>
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

  </>
}

export default Teams;
