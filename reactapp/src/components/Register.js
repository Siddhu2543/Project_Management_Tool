import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import "../styles/register.css";
import Logo from "./Logo";

const Register = () => {
    const { user, setUser } = useContext(UserContext);
    if (user) {
        return (<Navigate to={"/"} />)
    }

  return (
    <section className="vh-100 pb-3">
      <Logo />
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 pb-5">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign Up with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-google"></i> Google
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="John Doe"
                />
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
              </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="country-code">
                    +91
                </span>
                <div className="form-floating">
                  <input
                    id="mobile"
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Mobile Number"
                  />
                  <label className="form-label" htmlFor="mobile">
                    Mobile No.
                  </label>
                </div>
                          </div>

                          <div className="input-group mb-3">
                              <span className="input-group-text" id="country-code">
                                  Date of Birth
                              </span>
                                  <input
                                      id="dob"
                                      type="date"
                                      className="form-control form-control-lg"
                                  />
                          </div>

              <div className="form-floating mb-3">
                <textarea
                                  id="address"
                                  className="form-control form-control-lg"
                                  placeholder="Address goes here..."
                                  rows={3 }
                />
                <label className="form-label" htmlFor="address">
                  Resident Address
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  id="cnfrmpassword"
                  className="form-control form-control-lg"
                  placeholder="Confirm password"
                />
                <label className="form-label" htmlFor="cnfrmpassword">
                  Confirm Password
                </label>
              </div>

                          <div className="input-group mb-3">
                              <span className="input-group-text" id="country-code">
                                  Image
                              </span>
                              <input
                                  id="image"
                                  type="file"
                                  className="form-control form-control-lg"
                              />
                          </div>

              <div className="text-center text-lg-start pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="link-primary">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
