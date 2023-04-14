import { Link, Navigate } from "react-router-dom";
import "../styles/register.css";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import Loading from "./Loading";

const Register = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [fileName, setFileName] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCpasswordChange = (e) => {
    setCpassword(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (password != cpassword) {
      alert("Password does not match Confirm Password!");
      return;
    }
    setIsLoading(true);
    axios
      .get(`https://localhost:7288/api/Employees/DoesEmailExist/${email}`)
      .then((res) => {
        if (res.data) {
          alert(
            `${email} is already in use! Try registering with different Email Id!`
          );
          setIsLoading(false);
        } else {
          const formData = new FormData();
          formData.append("fileName", fileName.name);
          formData.append("formFile", fileName);
          axios
            .post("https://localhost:7288/api/Files/upload", formData)
            .then((res) => {
              const key = res.data;
              axios
                .post("https://localhost:7288/api/Employees", {
                  name: name,
                  email: email,
                  mobile: mobile,
                  dob: dob,
                  password: password,
                  image: key,
                  address: address,
                })
                .then((res) => {
                  const employee = res.data;
                  setIsRegistered(true);
                });
            })
            .finally(() => {
              setIsLoading(false);
            });
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  if (user) {
    return <Navigate to={"/"} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (isRegistered) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="vh-100">
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
            <form
              onSubmit={handleRegisterClick}
              encType={"multipart/form-data"}
            >
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
                  required
                  value={name}
                  onChange={handleNameChange}
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
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <div className="input-group">
                  <span className="input-group-text" id="country-code">
                    +91
                  </span>
                  <div className="form-floating">
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="9999988888"
                      pattern="[0-9]{10}"
                      className="form-control form-control-lg"
                      required
                      value={mobile}
                      onChange={handleMobileChange}
                    />
                    <label className="form-label" htmlFor="mobile">
                      Mobile No.
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-3">
                <div className="input-group">
                  <span className="input-group-text" id="date">
                    Date of Birth
                  </span>
                  <input
                    id="dob"
                    type="date"
                    className="form-control form-control-lg"
                    required
                    value={dob}
                    onChange={handleDobChange}
                  />
                </div>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  id="address"
                  className="form-control form-control-lg"
                  placeholder="Address goes here..."
                  required
                  value={address}
                  onChange={handleAddressChange}
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
                  required
                  value={password}
                  onChange={handlePasswordChange}
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
                  required
                  value={cpassword}
                  onChange={handleCpasswordChange}
                />
                <label className="form-label" htmlFor="cnfrmpassword">
                  Confirm Password
                </label>
              </div>

              <div className="form-outline mb-3">
                <div className="input-group">
                  <span className="input-group-text" id="date">
                    Profile Picture
                  </span>
                  <input
                    id="image"
                    type="file"
                    className="form-control form-control-lg"
                    required
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="text-center text-lg-start pt-2">
                <button
                  type="submit"
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
