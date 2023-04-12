import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectAttachments = () => {
  const [attachments, setAttachments] = useState([1, 2, 3, 4]);
  return (
    <div
      className="tab-pane fade"
      id="projectattachments"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container p-3 px-5">
        <div className="text-white d-flex justify-content-between align-items-center">
          <p className="h3 ps-3 mb-3">
            <i>Attachments</i>
          </p>
          <input
            role={"button"}
            type="file"
            className="btn btn-outline-light mb-3"
            title="Add Attachments"
          />
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted w-25">File Name</p>
          <p className="text-muted w-25">Date Added</p>
          <p className="text-muted w-25">Added By</p>
          <p className="text-muted w-25">Edit</p>
        </div>
        <hr className="mb-3 text-white" />
        {attachments.map((a, index) => {
          return (
            <div className="mb-3 d-flex justify-content-between" key={index}>
              <Link title="Download" className="text-white fs-md w-25">
                SRS Document
              </Link>
              <p className="text-white fs-md w-25">05/03/2023</p>
              <p className="text-white fs-md w-25">Siddharth Vadgama</p>
              <p className="text-white fs-md w-25">
                <i className="fa-solid fa-pen me-3" title="Edit/Upload"></i>
                <i className="fa-solid fa-trash" title="Remove"></i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectAttachments;
