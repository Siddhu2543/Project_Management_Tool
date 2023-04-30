import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AttachmentCard from "./AttachmentCard";

const ProjectAttachments = ({ project }) => {
  const [attachments, setAttachments] = useState([]);
  const [file, setFile] = useState([]);
  const [isReady, setIsReady] = useState(false);

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

  const uploadAttachment = (e) => {
    setFile(e.target.files[0]);
    setIsReady(true);
  };

  const handleUploadClick = () => {
    const formData = new FormData();
    formData.append("fileName", file.name);
    formData.append("formFile", file);
    axios
      .post("https://localhost:7288/api/Files/upload", formData)
      .then((res) => {
        var key = res.data;
        console.log(key);
        const token = JSON.parse(localStorage.getItem("USER"));
        const config = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        axios
          .post(
            "https://localhost:7288/api/Attachments",
            {
              fileName: file.name,
              filePath: key,
              projectId: project.id,
            },
            config
          )
          .then((res) => {
            console.log(res.data);
            getAttachments();
          });
      })
      .finally(() => {
        setIsReady(false);
      });
  };

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
            onChange={uploadAttachment}
          />
          {isReady && (
            <button className="btn btn-primary" onClick={handleUploadClick}>
              Upload
            </button>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted w-25">File Name</p>
          <p className="text-muted w-25">Date Added</p>
          <p className="text-muted w-25">Added By</p>
          <p className="text-muted w-25">Edit</p>
        </div>
        <hr className="mb-3 text-white" />
        {attachments.map((a, index) => (
          <AttachmentCard a={a} getAttachments={getAttachments} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectAttachments;
