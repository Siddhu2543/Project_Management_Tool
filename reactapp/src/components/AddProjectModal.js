import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const AddProjectModal = ({ setProjects }) => {
  const [showPhaseAdd, setShowPhaseAdd] = useState(false);
  const [phase, setPhase] = useState("");

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Low");
  const [description, setDescription] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [image, setImage] = useState();
  const [phases, setPhases] = useState([]);
  const [chat, setChat] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleAddPhaseClick = () => {
    if (phase !== "") setPhases((p) => p.concat(phase));
    setShowPhaseAdd(false);
    setPhase("");
  };

  const handlePhaseTitleChange = (e) => {
    setPhase(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChatChange = () => {
    setChat(!chat);
  };

  const handleCreateClick = () => {
    setIsLoading(true);
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const formData = new FormData();
    formData.append("fileName", image.name);
    formData.append("formFile", image);
    axios
      .post("https://localhost:7288/api/Files/upload", formData)
      .then((res) => {
        const key = res.data;
        console.log(key);
        axios
          .post(
            "https://localhost:7288/api/Projects",
            {
              title: title,
              description: description,
              priority: type,
              startDate: startdate,
              endDate: enddate,
              image: key,
            },
            config
          )
          .then((res) => {
            const project = res.data;
            console.log(project);
            phases.forEach((p, i) => {
              axios.post("https://localhost:7288/api/Phases", {
                name: p,
                description: p,
                number: i + 1,
                projectId: project.id,
              });
            });
            axios
              .get("https://localhost:7288/api/Projects", config)
              .then((res) => {
                setProjects(res.data);
              });
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) return <Loading />;
  return (
    <div
      className="modal fade"
      id="createproject"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Create Project
            </h1>
          </div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6 mb-1">
                <label htmlFor="title" className="form-label text-primary">
                  Project Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="col-md-6 mb-1">
                <label htmlFor="type" className="form-label text-primary">
                  Priority
                </label>
                <select
                  id="type"
                  className="form-select"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <option value={"Low"}>Low</option>
                  <option value={"Normal"}>Normal</option>
                  <option value={"High"}>High</option>
                </select>
              </div>
              <div className="col-12 mb-1">
                <label
                  htmlFor="description"
                  className="form-label text-primary"
                >
                  Detailed Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="Please give details about project here..."
                  value={description}
                  onChange={handleDescriptionChange}
                ></textarea>
              </div>
              <div className="col-md-6 mb-1">
                <label htmlFor="startdate" className="form-label text-primary">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startdate"
                  value={startdate}
                  onChange={handleStartDateChange}
                />
              </div>
              <div className="col-md-6 mb-1">
                <label htmlFor="duedate" className="form-label text-primary">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="duedate"
                  value={enddate}
                  onChange={handleEndDateChange}
                />
              </div>
              <div className="col-12 mb-1">
                <label
                  htmlFor="projectcover"
                  className="form-label text-primary"
                >
                  Cover Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="projectcover"
                  onChange={handleImageChange}
                />
              </div>
              <div className="col-md-2 mb-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => setShowPhaseAdd(true)}
                >
                  <i className="fa-solid fa-circle-plus fa-lg me-2"></i> Add
                  Phase
                </button>
              </div>
              <div className="col-md-10 mb-2">
                <ol className="list-group list-group-numbered">
                  {phases.length > 0 ? (
                    phases.map((p, index) => (
                      <li className="list-group-item" key={index}>
                        {p}
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item text-danger">
                      No Phase Added
                    </li>
                  )}
                </ol>
              </div>
              {showPhaseAdd && (
                <>
                  <div className="col-md-8">
                    <input
                      type={"text"}
                      id="phasetitle"
                      className="form-control"
                      value={phase}
                      onChange={handlePhaseTitleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ width: "100%" }}
                      onClick={handleAddPhaseClick}
                    >
                      Add New Phase
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ width: "100%" }}
                      onClick={() => setShowPhaseAdd(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="createchat"
                    onChange={handleChatChange}
                  />
                  <label
                    className="form-check-label text-primary"
                    htmlFor="createchat"
                  >
                    Create Project Chat Group?
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleCreateClick}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
