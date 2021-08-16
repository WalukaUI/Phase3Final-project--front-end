import "./EditPlayer.css";

function EditPlayer({
  isOpen,
  setIsOpen,
  updateData,
  setUpdateData,
  updatePlayer,
}) {
  function updatePlayerHandler(e) {
    e.preventDefault();
    updatePlayer(updateData);
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
  const editPlayer = updateData;

  return isOpen ? <>
    <div className="popup-box">
      <div className="popup-inner">
        <div className="formDiv div1">
          <form onSubmit={updatePlayerHandler}>
            <h4>Update Player Details</h4>
            <div className="form-group row">
              <label>
                Name
                <input
                  name="name"
                  className="form-control form-control-sm"
                  value={editPlayer.name}
                  placeholder="Name"
                  onChange={handleChangeData}
                />
              </label>
              <label>
                Skill
                <input
                  name="skill"
                  className="form-control form-control-sm"
                  value={editPlayer.skill}
                  placeholder="Price"
                  onChange={handleChangeData}
                />
              </label>
              <label>
                Age
                <input
                  name="age"
                  type="number"
                  className="form-control form-control-sm"
                  value={editPlayer.age}
                  placeholder="Description"
                  onChange={handleChangeData}
                />
              </label>
              <label>
                Image URL
                <input
                  name="image_url"
                  className="form-control form-control-sm"
                  value={
                    editPlayer.image_url
                      ? editPlayer.image_url
                      : "Not Available"
                  }
                  placeholder="Image"
                  onChange={handleChangeData}
                />
              </label>
              <label>
                Playing Category
                <select
                  className="form-select"
                  name="playing_category"
                  value={updateData.playing_category}
                  aria-label="Default select example"
                  onChange={handleChangeData}
                >
                  <option value="T20">T20</option>
                  <option value="ODI">ODI</option>
                  <option value="TEST">TEST</option>
                </select>
              </label>

              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <button className=" btn btn-success" type="submit">
                      Update Player
                    </button>
                  </div>
                  <div className="col-sm">
                    <button className="btn btn-danger" onClick={togglePopup}>
                      Cancel
                    </button>
                  </div>
                  <div className="col-sm"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </> : <div>{""}</div>
    
  
}

export default EditPlayer;
