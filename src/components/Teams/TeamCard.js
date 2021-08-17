import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditTeam from "./EditTeam/EditTeam";

function TeamCard({ team, deleteTeam, updateTeam }) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [deletewarning, setDeletewarning] = useState(false);

  function handleDeleteTeam(e) {
    e.preventDefault();
    setDeletewarning(!deletewarning);
  }

  function confirmDelete(e) {
    e.preventDefault();
    // deleteTeam(team.id);
    setDeletewarning(!deletewarning);
  }

  function showEditTeamForm(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    setUpdateData(team);
  }

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="!#">
                {team.name}
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Team Performance</h5>
          <p className="card-text">
              Coming soon.....
          </p>
          <Link to={`/teams/${team.id}`}>
            <button className="btn btn-primary">
              All the Players of {team.name}
            </button>
          </Link>
          <button className="btn btn-info" onClick={showEditTeamForm}>
            Edit Team
          </button>
          <button className="btn btn-warning" onClick={handleDeleteTeam}>
            Delete Team
          </button>
        </div>
      </div>

      {deletewarning ? (
        <div className="popup-box">
          <div className="popup-inner messageBox">
            <div className="formDiv div1">
              <form>
                <h4>Confirm Delete </h4>
                <div className="form-group row">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <button className=" btn btn-danger" onClick={confirmDelete}>
                          Confirm Delete
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => setDeletewarning(!deletewarning)}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-sm">

                      </div>
                      <div className="col-sm"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <EditTeam
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        updateData={updateData}
        setUpdateData={setUpdateData}
        updateTeam={updateTeam}
      />
    </>
  );
}

export default TeamCard;
