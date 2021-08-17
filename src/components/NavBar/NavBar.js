import React from "react";
import { Link } from "react-router-dom";
import './navBar.css'

function NavBar() {

  let imgstyle={
    width: "50px",
    flote: "right"
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="!#">
        CrickUSA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={`/`}>
                Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/players`}>
                All Players
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to={`/teams`}>
                Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/tournaments`}>
                Tournaments
            </Link>
          </li>
        </ul>
        
      </div>
      <img style={imgstyle} src="https://c.tenor.com/DBYx-E6apBwAAAAM/ball-on-fire-spinning.gif" alt="logo"/>
    </nav>
  );
}

export default NavBar;
