import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const UpdateProfileModal = ({ employee, setEmployee }) => {
  const [name, setName] = useState(employee?.name);
  const [address, setAddress] = useState(employee?.address);
  const [mobile, setMobile] = useState(employee?.mobile);
  const [dob, setDob] = useState(employee?.dob.slice(0, 10));
  const [fileName, setFileName] = useState();
  const [website, setWebsite] = useState(employee?.website);
  const [gitHub, setGitHub] = useState(employee?.gitHub);
  const [twitter, setTwitter] = useState(employee?.twitter);
  const [facebook, setFacebook] = useState(employee?.facebook);
  const [instagram, setInstagram] = useState(employee?.instagram);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setAddress(employee.address);
      setMobile(employee.mobile);
      setDob(employee.dob.slice(0, 10));
      setWebsite(employee.website);
      setGitHub(employee.gitHub);
      setTwitter(employee.twitter);
      setFacebook(employee.facebook);
      setInstagram(employee.instagram);
    }
  }, [employee]);

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
  const handleFileChange = (e) => {
    setFileName(e.target.files[0]);
  };
  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };
  const handleGitHubChange = (e) => {
    setGitHub(e.target.value);
  };
  const handleTwitterChange = (e) => {
    setTwitter(e.target.value);
  };
  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };
  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const emp_res = await axios.get(
      "https://localhost:7288/api/Employees/FindByToken",
      config
    );
    const emp = emp_res.data;
    emp.name = name;
    emp.address = address;
    emp.mobile = mobile;
    emp.dob = dob;
    emp.website = website;
    emp.gitHub = gitHub;
    emp.twitter = twitter;
    emp.facebook = facebook;
    emp.instagram = instagram;
    if (fileName) {
      const formData = new FormData();
      formData.append("fileName", fileName.name);
      formData.append("formFile", fileName);
      const res_key = await axios.post(
        "https://localhost:7288/api/Files/upload",
        formData
      );
      emp.image = res_key.data;
    }

    await axios
      .put(`https://localhost:7288/api/Employees/${employee.id}`, emp, config)
      .then(() => {
        axios
          .get("https://localhost:7288/api/Employees/FindByToken", config)
          .then((res) => setEmployee(res.data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) return <Loading />;

  return (
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
          <div className="modal-body pb-3">
            <form onSubmit={handleUpdateClick}>
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
                  onChange={handleNameChange}
                  required
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
                  onChange={handleMobileChange}
                  required
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
                  onChange={handleDobChange}
                  required
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
                  placeholder="Address goes here..."
                  value={address}
                  onChange={handleAddressChange}
                  required
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
                  onChange={handleFileChange}
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
                  onChange={handleWebsiteChange}
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
                  placeholder="https://github.com/Siddhu2543"
                  value={gitHub}
                  onChange={handleGitHubChange}
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
                  onChange={handleTwitterChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="instagram" className="form-label">
                  Instagram Profile
                </label>
                <input
                  type={"url"}
                  className="form-control"
                  id="instagram"
                  placeholder="https://instagram.com"
                  value={instagram}
                  onChange={handleInstagramChange}
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
                  placeholder="https://facebook.com/"
                  value={facebook}
                  onChange={handleFacebookChange}
                />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary float-end"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary me-3 float-end"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
