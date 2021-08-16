import React from "react";

function FrontPage() {
  return (
    <div>
      <h3>Welcome to CrickUSA tournament Seriest</h3>
      <div>
        <div className="card" >
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
            All the Players of the tournamen
            </p>
          </div>
        </div>
        <div className="card" >
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
            All the Teams of the tournament
            </p>
          </div>
        </div>
        <div className="card" >
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
            All the Tournaments of the Season
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
