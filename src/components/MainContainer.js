import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./mainContainer.css";
import NavBar from "./navBar/NavBar";
import Players from "./players/Players";
import PlayerProfile from "./playerProfile/Player";

function MainContainer() {
  const [allPlayes, setAllPlayers] = useState([]);

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

  return (
    <Router>
      <Switch>
        <div>
          <NavBar />
          <div className="row">
            <div className="col-md-2 col-sm-2">{/* <Series /> */}</div>
            <div className="col-md-8 col-sm-10">
              <Route exact path="/">
                <Players allPlayes={allPlayes} />
              </Route>
              <Route path="/players/:id">
                <PlayerProfile />
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
