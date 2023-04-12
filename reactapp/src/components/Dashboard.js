import { Chart } from "react-google-charts";
import "../styles/dashboard.css";

const Dashboard = () => {
  const taskData = [
    ["Task Status", "Task Count"],
    ["Not Started", 10],
    ["In Progress", 7],
    ["Completed", 12],
    ["Lagging behind due date", 7],
  ];
  const taskOptions = {
    title: "Task Progress",
    is3D: true,
    backgroundColor: "#fbfbfb",
    colors: ["blue", "orange", "green", "red"],
  };

  const teamData = [
    ["Team", "Task Completed"],
    ["Alpha", 6],
    ["Beta", 4],
    ["Gamma", 2],
  ];
  const teamOptions = {
    title: "Team vs Task Completed",
    is3D: true,
    backgroundColor: "#fbfbfb",
  };

  const phaseData = [
    ["Phase", "Progress(%)"],
    ["Client Req.", 100],
    ["SRS Document", 100],
    ["Modelling", 75],
    ["Implementation", 50],
    ["Testing", 25],
    ["Deployment", 0],
  ];
  const phaseOptions = {
    is3D: true,
    backgroundColor: "#fbfbfb",
  };

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
                    Project Management Tool
                  </div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Description:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">
                    This is a Project Management Tool Software to overcome
                    problems occuring during project implementation and with
                    employee problems.
                  </div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Type:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">High Priority</div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Start Date:
                  </div>
                  <div className="col-xl-9 mb-2 text-wrap">04 March, 2023</div>
                  <div className="col-xl-3 mb-2 text-muted text-nowrap">
                    Due Date:
                  </div>
                  <div className="col-xl-9 text-wrap">25 April, 2023</div>
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
                  <div className="col-xl-8 mb-2 text-wrap text-muted">
                    SRS Document
                  </div>
                  <div className="col-xl-4 mb-2 text-nowrap">
                    03 March, 2023
                  </div>
                  <div className="col-xl-8 mb-2 text-wrap text-muted">
                    Class Diagram
                  </div>
                  <div className="col-xl-4 mb-2 text-nowrap">
                    04 March, 2023
                  </div>
                  <div className="col-xl-8 mb-2 text-wrap text-muted">
                    Task Report (by, Alpha Team)
                  </div>
                  <div className="col-xl-4 mb-2 text-nowrap">
                    05 March, 2023
                  </div>
                  <div className="col-xl-8 mb-2 text-wrap text-muted">
                    Task Report (by, Beta Team)
                  </div>
                  <div className="col-xl-4 mb-2 text-nowrap">
                    05 March, 2023
                  </div>
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
