import { useContext } from "react";
import { UserContext } from "../App";
import "../styles/mainpage.css";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("USER");
    setUser(JSON.parse(localStorage.getItem("USER")));
  };
  return (
    <>
      {user ? (
        <>
          <header>
            <nav
              id="sidebarMenu"
              className="collapse d-lg-block sidebar collapse bg-light"
            >
              <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                  <NavLink
                    end
                    to="/"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-house"> Dashboard</i>
                  </NavLink>
                  <NavLink
                    end
                    to="/todos"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-list-check"> To-Do List</i>
                  </NavLink>
                  <NavLink
                    end
                    to="/notes"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-note-sticky"> My Notes</i>
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-diagram-project"> My Projects</i>
                  </NavLink>
                  <NavLink
                    end
                    to="/messages"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-comment"> Chat Box</i>
                  </NavLink>
                  <NavLink
                    end
                    to="/calendar"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-calendar-days"> Calendar</i>
                  </NavLink>
                  <NavLink
                    end
                    to="/connections"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-user-group"> Connections</i>
                  </NavLink>
                  <NavLink
                    end
                    to="/profile"
                    className="list-group-item list-group-item-action py-3 mb-2 ripple"
                  >
                    <i className="fa-solid fa-user"> Profile</i>
                  </NavLink>
                </div>
              </div>
            </nav>
            <nav
              id="main-navbar"
              className="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
            >
              <div className="container-fluid">
                <button
                  className="navbar-toggler me-2 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sidebarMenu"
                  aria-controls="sidebarMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars"></i>
                </button>
                <NavLink end to="/" className="navbar-brand text-white">
                  <i className="fa-solid fa-laptop-code">
                    {" "}
                    Project Management Tool
                  </i>
                </NavLink>

                <ul className="navbar-nav ms-auto d-flex flex-row">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link me-3 me-lg-0 text-white"
                      to="/notifications"
                      id="navbarDropdownMenuLink"
                      role="button"
                    >
                      <i className="fas fa-bell"> Notifications</i>
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center text-white"
                      to="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                        className="rounded-circle"
                        height="22"
                        alt=""
                        loading="lazy"
                      />
                    </NavLink>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <NavLink className="dropdown-item" to="/profile">
                          My profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/">
                          Settings
                        </NavLink>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main
            style={{
              marginTop: "58px",
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <div className="container pt-4" style={{ flex: 1 }}>
              <Outlet />
            </div>
            <footer className="text-center text-lg-start text-white bg-dark">
              <section className="d-flex justify-content-between p-3 bg-primary">
                <div className="me-5">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>

              <section className="">
                <div className="container text-center text-md-start mt-4">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">
                        Project Management Tool
                      </h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: "60px",
                          backgroundColor: "#7c4dff",
                          height: "2px",
                        }}
                      />
                      <p>
                        A web application developed by Siddharth Vadgama, Umang
                        Varotariya and Faizan Vora. This project is created
                        using MERN Stack Technology for SDP Lab.
                      </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Main Secions</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: "60px",
                          backgroundColor: "#7c4dff",
                          height: "2px",
                        }}
                      />
                      <p>
                        <a href="#!" className="text-white">
                          Projects
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Todo List
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Chat Box
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Calendar View of Events
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Connections
                        </a>
                      </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Useful links</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: "60px",
                          backgroundColor: "#7c4dff",
                          height: "2px",
                        }}
                      />
                      <p>
                        <a href="#!" className="text-white">
                          Home
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Your Account
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Find Members
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Your Notes
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          About US
                        </a>
                      </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{
                          width: "60px",
                          backgroundColor: "#7c4dff",
                          height: "2px",
                        }}
                      />
                      <p>
                        <i className="fas fa-home mr-3"></i> Dharmsinh Desai
                        University, Nadiad, Gujarat.
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-3"></i>{" "}
                        vadgamasiddharth9@gmail.com
                      </p>
                      <p>
                        <i className="fas fa-phone mr-3"></i> +91 82000 84424
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </footer>
          </main>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Home;
