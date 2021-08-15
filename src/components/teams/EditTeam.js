import "./EditTeam.css";

function EditPlayer({
  isOpen,
  setIsOpen,
  updateData,
  setUpdateData,
  updateTeam,
}) {
  function updateTeamHandler(e) {
    e.preventDefault();
    updateTeam(updateData);
    setIsOpen(!isOpen);
  }
  function togglePopup(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  function handleChangeData(e) {
    e.preventDefault();
    let newData = { ...updateData, [e.target.name]: e.target.value };
    setUpdateData(newData);
  }
  if (!updateData) return null;
  const editTeam = updateData;

  return isOpen ? (
    <div className="popup-box">
      <div className="popup-inner messageBox">
        <div className="formDiv div1">
          <form onSubmit={updateTeamHandler}>
            <h4>Update Team Details</h4>
            <div className="form-group row">
              <label>
                Name
                <input
                  name="name"
                  className="form-control form-control-sm"
                  value={editTeam.name}
                  placeholder="Name"
                  onChange={handleChangeData}
                />
              </label>
              <label>
                Logo URL
                <input
                  name="logo_url"
                  className="form-control form-control-sm"
                  value={editTeam.skill}
                  placeholder="Logo URL"
                  onChange={handleChangeData}
                />
              </label>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <button className=" btn btn-success" type="submit">
                      Update Player
                    </button>
                    <button className="btn btn-danger" onClick={togglePopup}>
                      Cancel
                    </button>
                  </div>
                  <div className="col-sm"></div>
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
  );
}

export default EditPlayer;
