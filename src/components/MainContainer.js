import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./mainContainer.css";
import NavBar from "./navBar/NavBar";
import FrontPage from "./frontPage/FrontPage";
import Players from "./players/Players";
import PlayerProfile from "./players/playerProfile/Player";
import Teams from "./teams/Teams";
import TeamPlayers from "./teams/TeamPlayers";
import Tournaments from "./tournements/Tournements";
import Schedule from "./Schedule/Schedule"

function MainContainer() {
  return <>
      <Router>
        <Switch>
           <div>
            <NavBar />
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <Schedule />
              </div>
              <div className="col-md-9 col-sm-12">
                <Route exact path="/">
                  <FrontPage />
                </Route>
                <Route exact path="/players">
                  <Players />
                </Route>
                <Route path="/players/:id">
                  <PlayerProfile />
                </Route>
                <Route exact path="/teams">
                  <Teams />
                </Route>
                <Route path="/teams/:id">
                  <TeamPlayers />
                </Route>
                <Route path="/tournaments">
                  <Tournaments />
                </Route>
              </div>
            </div>
            </div>
        </Switch>
      </Router>
    </>
}
export default MainContainer;
