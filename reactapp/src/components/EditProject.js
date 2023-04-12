const EditProject = () => {
  return (
    <div
      className="tab-pane fade"
      id="editproject"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container p-3 px-5">
        <div className="text-white d-flex justify-content-between align-items-center">
          <p className="h3 ps-3">
            <i>Edit Project</i>
          </p>
        </div>
        <hr className="mb-3 text-white" />
        <form className="row g-3 mb-3">
          <div className="col-md-6 mb-1">
            <label htmlFor="title" className="form-label text-white">
              Project Title
            </label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="col-md-6 mb-1">
            <label htmlFor="type" className="form-label text-white">
              Type
            </label>
            <select id="type" className="form-select">
              <option>Low Priority</option>
              <option>Normal</option>
              <option>High Priority</option>
            </select>
          </div>
          <div className="col-12 mb-1">
            <label htmlFor="description" className="form-label text-white">
              Detailed Description
            </label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Please give details about project here..."
            ></textarea>
          </div>
          <div className="col-md-6 mb-1">
            <label htmlFor="startdate" className="form-label text-white">
              Start Date
            </label>
            <input type="date" className="form-control" id="startdate" />
          </div>
          <div className="col-md-6 mb-1">
            <label htmlFor="duedate" className="form-label text-white">
              Due Date
            </label>
            <input type="date" className="form-control" id="duedate" />
          </div>
          <div className="col-12 mb-1">
            <label htmlFor="projectcover" className="form-label text-white">
              Cover Image
            </label>
            <input type="file" className="form-control" id="projectcover" />
          </div>
          <div className="col-mb-6 d-flex">
            <button className="btn btn-primary me-3" type="button">
              Update
            </button>
            <button className="btn btn-secondary" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
