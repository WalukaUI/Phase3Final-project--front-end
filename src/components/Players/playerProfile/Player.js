import React, { useEffect, useState } from "react";
import { URL } from "../../../constraints/URL"
import { useParams } from "react-router-dom";
import "./player.css";

function PlayerProfile() {
  const [singlePlayer, setsinglePlayer] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`${URL}/players/${params.id}`)
      .then((r) => r.json())
      .then((data) => setsinglePlayer(data));
  }, [params.id]);
  
  return <> 
      <div className="row playersMainDiv">
        <div className="col-xl-3 col-md-12 inner1">
          <div className="m-b-25">
            <img
              src={singlePlayer.image_url}
              className="img-radius"
              alt="User-Profile"
            />
          </div>
          <h4 className="f-w-600">{singlePlayer.name}</h4>
          <p>{singlePlayer.skill}</p>
          <p>{singlePlayer.age}</p>
          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
        </div>
        <div className="col-xl-9 col-md-12 seconddiv ">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <h6 className="b-b-default">Information</h6>
              <div className="col-sm-6 smallBox">
                <p className="m-b-10 f-w-600">Email</p>
                <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
              </div>
              <div className="smallBox">
                <p className="m-b-10 f-w-600">Phone</p>
                <h6 className="text-muted f-w-400">98979989898</h6>
              </div>
              <div className="smallBox">
              <h6 className="b-b-default">Status</h6>
                <p className="m-b-10 f-w-600">Matches: 104</p>
                <p className="m-b-10 f-w-600">Runs: {singlePlayer.runs}</p>
                <p className="m-b-10 f-w-600">Wickets: {singlePlayer.wikets}</p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12 logoDiv">
              <p>Team :{ singlePlayer.team}</p>
              <img src={singlePlayer.country_logo} alt="logo"/>
            </div>
          </div>
        </div>
      </div>

    </>
}

export default PlayerProfile;
