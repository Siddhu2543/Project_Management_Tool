import { useState } from "react";

const EmployeeSection = () => {
  const [requests, setRequests] = useState([1, 2, 3]);
  return (
    <div
      className="tab-pane fade"
      id="employeesection"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container p-3 px-5">
        <div className="text-white d-flex justify-content-between align-items-center">
          <p className="h3 ps-3 mb-3">
            <i>Employee Section(For Admin)</i>
          </p>
          <button
            type="button"
            className="btn btn-outline-light mb-3"
            data-bs-toggle="modal"
            data-bs-target="#addrequest"
          >
            <i className="fa-solid fa-plus-circle fa-lg me-2"></i>
            Create Request
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted w-25">Employee Name</p>
          <p className="text-muted w-25">Date</p>
          <p className="text-muted w-25">Message</p>
          <p className="text-muted w-25">Response</p>
        </div>
        <hr className="mb-3 text-white" />
        {requests.map((r, index) => {
          return (
            <div className="mb-3 d-flex justify-content-between" key={index}>
              <p className="text-white fs-md w-25">Siddharth Vadgama</p>
              <p className="text-white fs-md w-25">05/03/2023</p>
              <p className="text-white fs-md w-25 text-wrap">
                I want to request for leave and You will need to replace my me
                by someone. Please accept my request.
              </p>
              <p className="text-white fs-md w-25">
                <i className="fa-solid fa-check mx-3" title="Approve"></i>
                <i className="fa-solid fa-close" title="Deny"></i>
              </p>
            </div>
          );
        })}
      </div>
      <div
        className="modal fade"
        id="addrequest"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editphasebody">
                Create Request
              </h1>
            </div>
            <div className="modal-body">
              <label className="form-label" htmlFor="Phase Title">
                Message
              </label>
              <input className="form-control" placeholder="Phase Title" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Request
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
    </div>
  );
};

export default EmployeeSection;
