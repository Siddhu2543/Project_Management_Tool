import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";
const EditProject = () => {
  const [title, setTitle] = useState("");
  const [priority, setpriority] = useState("");
  const [description, setdescription] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [image, setimage] = useState("");
  const [chat, setchat] = useState("");
  const [project, setproject] = useState("");
  const [fileName, setFileName] = useState();
  const {id}=useParams()
  const handleFileChange = (e) => {
    setFileName(e.target.files[0]);
  };
  const getprojectbyid = async () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.get(`https://localhost:7288/api/Projects/${id}`, config).then((res) => {
      console.log(res.data);
      setproject(res.data);
    });
  };
  const updatehandler = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    if (fileName) {
      const formData = new FormData();
    formData.append("fileName", fileName.name);
    formData.append("formFile", fileName);
    console.log("hello world");
    axios
      .post("https://localhost:7288/api/Files/upload", formData, config)
      .then((res) => {
        const key = res.data;
        console.log(key);
        console.log({
          Title: title,
          Description: description,
          Startdate: startdate,
          Enddate: enddate,
          Image: key,
          Priority: priority,
          
        });
        axios
          .put(
            `https://localhost:7288/api/Projects/${id}`,
            { Id:id, 
              Title: title,
              Description: description,
              Startdate: startdate,
              Enddate: enddate,
              Image: key,
              Priority: priority,
            },
            config
          )

          .then((res) => {
            const employee = res.data;
            console.log(employee);
          });
      })
      .finally(() => {
        console.log("finally");
        getprojectbyid()
      });
    }
    else{
      axios
          .put(
            `https://localhost:7288/api/Projects/${id}`,
            { Id:id, 
              Title: title,
              Description: description,
              Startdate: startdate,
              Enddate: enddate,
              Image: project.image,
              Priority: priority,
            },
            config
          )
          .then((res) => {
            const employee = res.data;
            console.log(employee);
            getprojectbyid()
          });
    }
    
  };
  useEffect(() => {
    getprojectbyid()
  }, []);
  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setpriority(project.priority);
      setdescription(project.description);
      setenddate(project.endDate.slice(0,10));
      setstartdate(project.startDate.slice(0,10));
      setimage(project.image);
      console.log(project.startdate);
    }
  }, [project]);

  const startdatechange=(e) => {
    setstartdate(e.target.value);
    console.log(e.target.value);
  }
  const enddatechange=(e) => {
    setenddate(e.target.value);
  }
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
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 mb-1">
            <label htmlFor="type" className="form-label text-white">
              Type
            </label>
            <select
              id="type"
              className="form-select"
              value={priority}
              onChange={(e) => setpriority(e.target.value)}
            >
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
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              placeholder="Please give details about project here..."
            ></textarea>
          </div>
          <div className="col-md-6 mb-1">
            <label htmlFor="startdate" className="form-label text-white">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startdate"
              value={startdate}
              onChange={startdatechange}
            />
          </div>
          <div className="col-md-6 mb-1">
            <label htmlFor="duedate" className="form-label text-white">
              Due Date
            </label>
            <input
              type="date"
              className="form-control"
              id="duedate"
              value={enddate}
              onChange={enddatechange}
            />
          </div>
          <div className="col-12 mb-1">
            <label htmlFor="projectcover" className="form-label text-white">
              Cover Image
            </label>
            <input
              type="file"
              className="form-control"
              id="projectcover"
              onChange={handleFileChange}
            />
          </div>
          <div className="col-mb-6 d-flex">
            <button
              className="btn btn-primary me-3"
              type="button"
              onClick={updatehandler}
            >
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
