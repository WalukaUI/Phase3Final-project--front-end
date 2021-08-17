import React from "react";
import { Link } from "react-router-dom";
import "./frontpage.css";

function FrontPage() {
  return (
    <>
      <div>
        <a href="!#" className="myButton">
          Welcome to CrickUSA cricket Tournament Series
        </a>
        <div className="mainDivfront">
          <Link to={`/teams`}>
            <div className="cards">
              <img
                className="card-img-top"
                src="https://overseasrealty.com/en/referrals/miscellanous-images/team.png/image_preview"
                alt="Card_image_cap"
              />
              <div className="card-body">
                <p className="card-text">
                  View All Teams of the Tournament
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/tournaments`}>
            <div className="cards">
              <img
                className="card-img-top"
                src="https://bradleyjohnsonmemorialfoundation.org/wp-content/uploads/2013/01/icon_tournament.png"
                alt="Card_image_cap"
              />
              <div className="card-body">
                <p className="card-text">
                  View All the Tournaments and Teams of the Tournament
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/players`}>
            <div className="cards">
              <img
                className="card-img-top"
                src="https://image.flaticon.com/icons/png/512/10/10552.png"
                alt="Card_image_cap"
              />

              <div className="card-body">
                <p className="card-text">
                  View and Edit All the Players of the tournament
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
