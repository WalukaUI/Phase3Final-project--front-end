import React from "react";
import "./frontpage.css";

function FrontPage() {
  return <>
  <div >
              <a href="!#" className="myButton">
          Welcome to CrickUSA cricket Tournament Series
        </a>
      <div className="mainDivfront">
        <div className="cards">
          <img
            className="card-img-top"
            src="https://bradleyjohnsonmemorialfoundation.org/wp-content/uploads/2013/01/icon_tournament.png"
            alt="Card_image_cap"
          />
          <div className="card-body">
            <p className="card-text">View All the Tournaments and Teams of the Tournament</p>
          </div>
        </div>
        <div className="cards">
          <img
            className="card-img-tops"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/top-player-1673228-1420278.png"
            alt="Card_image_cap"
          />
          <div className="card-body">
            <p className="card-text">View and Edit All the Teams of the tournament</p>
          </div>
        </div>
        <div className="cards">
          <img
            className="card-img-top"
            src="https://image.flaticon.com/icons/png/512/10/10552.png"
            alt="Card_image_cap"
          />

          <div className="card-body">
            <p className="card-text">View and Edit All the Players of the tournament</p>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default FrontPage;
