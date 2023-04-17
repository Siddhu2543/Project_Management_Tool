import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios"
const MyProjects = () => {
  const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [phases, setPhases] = useState([]);
  const [showPhaseAdd, setShowPhaseAdd] = useState(false);
    const [phase, setPhase] = useState("");
    const [title, setTitle] = useState("");
    const [priority, setpriority] = useState("");
    const [description, setdescription] = useState("");
    const [startdate, setstartdate] = useState("");
    const [enddate, setenddate] = useState("");
    const [image, setimage] = useState("");
    const [chat, setchat] = useState("");
    const [fileName, setFileName] = useState();
  const handleAddPhaseClick = () => {
    if (phase !== "") setPhases((p) => p.concat(phase));
    setShowPhaseAdd(false);
    setPhase("");
    };
    const getProjects = () => {

        const token = JSON.parse(localStorage.getItem("USER"));
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        axios
            .get("https://localhost:7288/api/Projects/Employee", config)
            .then((res) => {
                setProjects(res.data);
            });
}
    const addproject = () => {
        
        const data = {
            title: title,
            description: description,
            startdate: startdate,
            enddate: enddate,
        
            priority: priority, 
        }
        console.log(data)
        const token = JSON.parse(localStorage.getItem("USER"));
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        const formData = new FormData();
        formData.append("fileName", fileName.name);
        formData.append("formFile", fileName);
        
        axios
            .post("https://localhost:7288/api/Files/upload", formData, config)
            .then((res) => {
                const key = res.data;
                console.log(key)
                axios
                    .post("https://localhost:7288/api/Projects", {
                        Title: title,
                        Description: description,
                        Startdate: startdate,
                        Enddate: enddate,
                        Image: key,
                        Priority: priority,
                        
                    }, config)

                    .then((res) => {
                        const employee = res.data;
                        console.log(employee);
                    });
            })
            .finally(() => {
                console.log(res)
            });
    }
    const handleFileChange = (e) => {
        setFileName(e.target.files[0]);
    };
  const handlePhaseTitleChange = (e) => {
    setPhase(e.target.value);
    };

    useEffect(() => { getProjects() }, [projects])
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h3 className="d-inline text-primary">Projects</h3>
          <button
            className="float-end btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#createproject"
          >
            <i className="fa-solid fa-circle-plus fa-lg me-2"></i> Create New
            Project
          </button>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center mb-4 pt-2 pb-3">
            <p className="small mb-0 me-2 text-muted">Filter</p>
            <select className="select">
              <option value="1">All</option>
              <option value="2">Completed</option>
              <option value="3">Active</option>
            </select>
            <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
            <select className="select">
              <option value="1">Due date</option>
              <option value="2">Added date</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {projects.map((p) => (
              <ProjectCard key={p} />
            ))}
          </div>
        </div>
      </div>
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
                                  <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="col-md-6 mb-1">
                  <label htmlFor="type" className="form-label text-primary">
                                      Priority Type
                  </label>
                                  <select id="type" className="form-select" value={priority} onChange={(e) => setpriority(e.target.value)}>
                    <option>Low Priority</option>
                    <option>Normal</option>
                    <option>High Priority</option>
                  </select>
                </div>
                <div className="col-12 mb-1">
                  <label htmlFor="description" className="form-label text-primary">
                    Detailed Description
                  </label>
                  <textarea
                    className="form-control"
                                      id="description"
                                      value={description} onChange={(e) => { setdescription(e.target.value) } }
                    placeholder="Please give details about project here..."
                  ></textarea>
                </div>
                <div className="col-md-6 mb-1">
                  <label htmlFor="startdate" className="form-label text-primary">
                    Start Date
                  </label>
                                  <input type="date" className="form-control" id="startdate"
                                      value={startdate} onChange={(e) => { setstartdate(e.target.value) }}                                  />
                </div>
                <div className="col-md-6 mb-1">
                  <label htmlFor="duedate" className="form-label text-primary">
                    Due Date
                                  </label>
                                  <input type="date" className="form-control" id="duedate" value={enddate} onChange={(e) => { setenddate(e.target.value) } } />
                </div>
                <div className="col-12 mb-1">
                  <label htmlFor="projectcover" className="form-label text-primary">
                    Cover Image
                  </label>
                  <input
                                      type="file"
                                      className="form-control"
                                      id="projectcover"
                                      onChange={handleFileChange }
                  />
                </div>
                {/*<div className="col-12 mb-3">
                  <label htmlFor="projectdocs" className="form-label text-primary">
                    Necessary Attachment
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="projectdocs"
                    multiple
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
                )}*/}
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                                          type="checkbox"
                                          value={chat} onChange={(e) => { setchat(e.target.value) } }             id="createchat"

                    />
                    <label className="form-check-label text-primary" htmlFor="createchat">
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
                              onClick={addproject }
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
    </>
  );
};

export default MyProjects;
