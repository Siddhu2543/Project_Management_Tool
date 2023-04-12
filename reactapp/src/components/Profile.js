import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios"
const Profile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [website, setwebsite] = useState("");
    const [github, setgithub] = useState("");
    const [twitter, settwitter] = useState("");
    const [facebook, setfacebook] = useState("");
    const [insta, setInsta] = useState("");
    const [employee, setEmployee] = useState("")
    const updateUser = (e) => {

        const data = {
            email: email,
            password: password,
            name: name,
            mobile: mobile,
            address: address,
            dob: dob,
            website: website,
            facebook: facebook,
            instagram: insta,
            twitter: twitter,
            github: github

        }
        console.log(data)
        e.preventDefault();
        axios
            .put("https://localhost:7288/api/Employees/2", {
                email: "emai",
                password: "password",
                name: name,
                mobile: mobile,
                address: address,
                dob: dob,
                website: website,
                facebook: facebook,
                instagram: insta,
                twitter: twitter,
                github: github,
                image: "demo image"

            }).then(response => {

                console.log('Request sent successfully', response);
                console.log(data)
                // Handle response data or redirect to another page here
            })
            .catch(error => {
                console.log('Request failed', error);
                // Handle error or show error message to user here
            });
    }
    const getUser = () => {
        axios
            .get('https://localhost:7288/api/Employees/2')
            .then(response => {
                console.log('user fetch successfully', response.data);
                setEmployee(response.data);
                
                
            })
            .catch(error => {
                console.log('user fetch failed', error);
                // Handle error or show error message to user here
            });
    };
       
    useEffect(() => { getUser() }, [])
return(
    <>
      <section style={{ backgroundColor: "#eee" }} className="mb-3">
        <div className="container py-3">
          <div className="row">
            <div
              className="col mx-3 mb-3 p-1 ps-3"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "black",
              }}
            >
              <h3 className="text-primary">User Profile</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                                />
                                <h5 className="my-3">{employee.name}</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#updateprofile"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                        <p className="mb-0">{employee.website}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "#333333" }}
                                        ></i>
                                        <p className="mb-0">{employee.github}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                                        ></i>
                                        <p className="mb-0">{employee.twitter}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                                        ></i>
                                        <p className="mb-0">{employee.insta}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                                        ></i>
                                        <p className="mb-0">{employee.facebook}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{employee.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{employee.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{employee.mobile}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Date of Birth</p>
                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{employee.dob}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            {employee.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="updateprofile"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Update Profile
              </h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Full Name"
                                  value={name}
                                  onChange={(e) => { setName(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                                  placeholder="+91 99999 88888"
                                  value={mobile}
                                  onChange={(e) => { setMobile(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                                  placeholder="+91 99999 88888"
                                  value={dob}
                                  onChange={(e) => { setDob(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                            </label>
                            <textarea
                  className="form-control"
                  id="address"
                                rows="3"
                                onChange={(e) => { setAddress(e.target.value) }}
                                  value={address}
                                  placeholder="Address goes here..."
                              ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="profilepic" className="form-label">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="profilepic"
                  placeholder="+91 99999 88888"
                />
              </div>
              <hr className="mb-3" />
              <h4 className="mb-3">Optional Details</h4>
              <div className="mb-3">
                <label htmlFor="website" className="form-label">
                  Your Website
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="website"
                                  placeholder="https://yourwebsite.com"
                                  value={website}
                                  onChange={(e) => { setwebsite(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="github" className="form-label">
                  Github Profile
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="github"
                                  placeholder="https://github.com"
                                  value={github}
                                  onChange={(e) => { setgithub(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="twitter" className="form-label">
                  Twitter Profile
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="twitter"
                                  placeholder="https://twitter.com/YourAccount"
                                  value={twitter}
                                  onChange={(e) => { settwitter(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="instagram" className="form-label">
                  Instagram Profile
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="instagram"
                                  placeholder="https://instagram.com"
                                  value={insta}
                                  onChange={(e) => { setInsta(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="facebook" className="form-label">
                  facebook Profile
                </label>
                <input
                  type="url"
                  className="form-control"
                                  id="facebook"
                                  value={facebook}
                                  onChange={(e) => { setfacebook(e.target.value) }}
                  placeholder="https://facebook.com/"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={updateUser}
              >
                Update
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

export default Profile;
