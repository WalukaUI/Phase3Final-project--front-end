import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./mainContainer.css";
import NavBar from "./navBar/NavBar";
import Players from "./players/Players";
import PlayerProfile from "./players/playerProfile/Player";
import Teams from "./teams/Teams"
import TeamPlayers from "./teams/TeamPlayers"

function MainContainer() {
  const [allPlayes, setAllPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  const URL = "http://127.0.0.1:9393/";
  useEffect(() => {
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${URL}/players`, getrequestOptions)
      .then((res) => res.json())
      .then((player) => setAllPlayers(player));
  }, []);

  useEffect(() => {
    let getrequestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${URL}/teams`, getrequestOptions)
      .then((res) => res.json())
      .then((team) => setTeams(team));
  }, []);

  return (
    <Router>
      <Switch>
        <div>
          <NavBar />
          <div className="row">
            <div className="col-md-2 col-sm-2">{/* <Series /> */}</div>
            <div className="col-md-8 col-sm-10">
               <Route exact path="/">
               <div>
                 <h2>home</h2>
               </div>
              </Route>
              <Route exact path="/players">
                <Players allPlayes={allPlayes} />
              </Route>
              <Route path="/players/:id">
                <PlayerProfile />
              </Route>
              <Route exact path="/teams">
                <Teams teams={teams} />
              </Route>
              <Route exact path="/teams/:id">
                <TeamPlayers />
              </Route>
            </div>
            <div className="col-md-2 col-sm-12">{/* <NewsBar /> */}</div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}
export default MainContainer;
