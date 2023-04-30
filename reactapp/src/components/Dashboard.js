import { Chart } from "react-google-charts";
import "../styles/dashboard.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [taskData, setTaskData] = useState([[]]);
  const [phaseData, setPhaseData] = useState([[]]);
  const [teamData, setTeamData] = useState([[]]);

  const taskOptions = {
    title: "Task Progress",
    is3D: true,
    backgroundColor: "#fbfbfb",
    colors: ["blue", "orange", "green", "red"],
  };
  const teamOptions = {
    title: "Team vs Task Completed",
    is3D: true,
    backgroundColor: "#fbfbfb",
  };
  const phaseOptions = {
    is3D: true,
    backgroundColor: "#fbfbfb",
  };

  const { id } = useParams();
  const [project, setproject] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [phases, setPhases] = useState([]);
  const [teams, setTeams] = useState([]);

  const getprojectbyid = async () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(`https://localhost:7288/api/Projects/${id}`, config)
      .then((res) => {
        console.log(res.data);
        setproject(res.data);
      });
  };
  useEffect(() => {
    getprojectbyid();
  }, []);

  useEffect(() => {
    if (project) {
      axios
        .get(`https://localhost:7288/api/Phases/project/${project?.id}`)
        .then((res) => {
          setPhases(res.data);
        });
    }
  }, [project]);

  useEffect(() => {
    if (project) {
      axios
        .get(`https://localhost:7288/api/PTasks/project/${project?.id}`)
        .then((res) => {
          setTasks(res.data);
        });
    }
  }, [project]);

  useEffect(() => {
    if (project) {
      axios
        .get(`https://localhost:7288/api/Teams/project/${project?.id}`)
        .then((res) => {
          setTeams(res.data);
        });
    }
  }, [project]);

  const getAttachments = () => {
    axios
      .get(`https://localhost:7288/api/Attachments/project/${project?.id}`)
      .then((res) => {
        setAttachments(res.data);
      });
  };

  useEffect(() => {
    if (project) getAttachments();
  }, [project]);

  useEffect(() => {
    if (phases && tasks && teams) {
      const taskData = [
        ["Task Status", "Task Count"],
        [
          "Not Started",
          tasks.filter(
            (task) =>
              task.startDate.slice(0, 10) >
              new Date().toISOString().slice(0, 10)
          ).length,
        ],
        ["In Progress", tasks.filter((t) => !t.isCompleted).length],
        ["Completed", tasks.filter((t) => t.isCompleted).length],
        [
          "Lagging behind",
          tasks.filter(
            (task) =>
              task.endDate.slice(0, 10) < new Date().toISOString().slice(0, 10)
          ).length,
        ],
      ];
      setTaskData(taskData);
      console.log(taskData);

      var phaseData = [["Phase", "Progress(%)"]];
      phases.forEach((p) => {
        var td = tasks.filter((t) => t.phaseId == phaseData.id);
        phaseData.push([
          p.name,
          td.filter((p) => p.isCompleted).length * td.length * 100,
        ]);
      });
      setPhaseData(phaseData);

      var teamdata = [["Team", "Task Completed"]];
      teams.forEach((t) => {
        teamdata.push([
          t.name,
          tasks.filter((task) => task.teamId === t.id && task.isCompleted)
            .length,
        ]);
      });
      setTeamData(teamdata);
    }
  }, [phases, tasks, teams]);

  return (
    <div
      className="tab-pane fade show active"
      id="dashboard"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container-fluid">
        <div className="row" id="infocards">
          <div className="col-lg-4 col-md-6 p-3 cardcontainer">
            <div className="card bg-transparent border-0">
              <h4 className="card-header">
                Basic Information
                <span className="badge float-xl-end">
                  <i
                    className="fa-solid fa-info-circle fa-lg"
                    title="Project Details"
                  ></i>
                </span>
              </h4>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Title:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">
                    {project?.title}
                  </div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Description:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">
                    {project?.description}
                  </div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Type:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">
                    {project?.priority}
                  </div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Start Date:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">
                    {project?.startDate?.slice(0, 10)}
                  </div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Due Date:
                  </div>
                  <div className="col-xl-9 text-wrap">
                    {project?.endDate?.slice(0, 10)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 cardcontainer">
            <div className="card bg-transparent border-0">
              <h4 className="card-header">
                Total Progress
                <span className="badge float-xl-end">
                  <i
                    className="fa-solid fa-info-circle fa-lg"
                    title="Phase wise Progress"
                  ></i>
                </span>
              </h4>
              <div className="card-body">
                <Chart
                  chartType={"BarChart"}
                  data={phaseData}
                  options={phaseOptions}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 cardcontainer">
            <div className="card bg-transparent border-0">
              <h4 className="card-header">
                Tasks
                <span className="badge float-xl-end">
                  <i
                    className="fa-solid fa-info-circle fa-lg"
                    title="Task Details"
                  ></i>
                </span>
              </h4>
              <div className="card-body">
                <Chart
                  chartType={"PieChart"}
                  data={taskData}
                  options={taskOptions}
                  width={"100%"}
                  style={{ color: "white" }}
                  className="task-chart"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 cardcontainer">
            <div className="card bg-transparent border-0">
              <h4 className="card-header">
                Top Teams
                <span className="badge float-xl-end">
                  <i
                    className="fa-solid fa-info-circle fa-lg"
                    title="Top Teams with highest Task Completed"
                  ></i>
                </span>
              </h4>
              <div className="card-body">
                <Chart
                  chartType={"BarChart"}
                  data={teamData}
                  options={teamOptions}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 cardcontainer">
            <div className="card bg-transparent border-0">
              <h4 className="card-header">
                New Attachments
                <span className="badge float-xl-end">
                  <i
                    className="fa-solid fa-info-circle fa-lg"
                    title="Newly Added Attachments"
                  ></i>
                </span>
              </h4>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-8 mb-2 text-wrap">File Name</div>
                  <div className="col-xl-4 mb-2 text-nowrap">Date Added</div>
                  <hr className="mb-3" />
                  {attachments?.map((a, i) => (
                    <span key={i}>
                      <div className="col-xl-8 mb-2 text-wrap text-muted">
                        {a?.fileName}
                      </div>
                      <div className="col-xl-4 mb-2 text-nowrap">
                        {a?.addedDate.slice(0, 10)}
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3 cardcontainer">
            <div className="card bg-transparent border-0">
              <h4 className="card-header">
                Employee Section
                <span className="badge float-xl-end">
                  <i
                    className="fa-solid fa-info-circle fa-lg"
                    title="Employee Requests & Notifications"
                  ></i>
                </span>
              </h4>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 mb-2 text-muted text-wrap">
                    Employee Name
                  </div>
                  <div className="col-xl-6 mb-2 text-muted text-wrap">
                    Message
                  </div>
                  <hr className="mb-3" />
                  <div className="col-xl-6 mb-2 text-wrap">
                    Siddharth Vadgama
                  </div>
                  <div className="col-xl-6 mb-2 text-wrap">
                    Task Completed
                    <br />
                    <p className="text-muted">05/03/2023 12:14:06</p>
                  </div>
                  <div className="col-xl-6 mb-2 text-wrap">Faizan Vora</div>
                  <div className="col-xl-6 mb-2 text-wrap">
                    Need Medical Leave
                    <br />
                    <p className="text-muted">10/03/2023 08:36:56</p>
                  </div>
                  <div className="col-xl-6 mb-2 text-wrap">
                    Umang Varotariya
                  </div>
                  <div className="col-xl-6 mb-2 text-wrap">
                    Task Completed
                    <br />
                    <p className="text-muted">11/03/2023 20:21:26</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
