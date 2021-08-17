import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./mainContainer.css";
import NavBar from "./NavBar/NavBar";
import FrontPage from "./FrontPage/FrontPage";
import Players from "./Players/Players";
import PlayerProfile from "./Players/playerProfile/Player";
import Teams from "./Teams/Teams";
import TeamPlayers from "./Teams/TeamPlayers/TeamPlayers";
import Tournaments from "./Tournements/Tournements";
import Rankings from "./Rankings/Rankings"

function MainContainer() {
  return <>
      <Router>
        <Switch>
           <div>
            <NavBar />
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <Rankings />
              </div>
              <div className="col-md-9 col-sm-12" style={{paddingRight: "15px"}}>
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
