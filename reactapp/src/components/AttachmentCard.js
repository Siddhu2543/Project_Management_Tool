import axios from "axios";
import { Link } from "react-router-dom";

const AttachmentCard = ({ a, getAttachments }) => {
  const handleDeleteClick = () => {
    axios
      .delete(`https://localhost:7288/api/Attachments/${a.id}`)
      .then((res) => {
        getAttachments();
      });
  };
  const handleDownloadClick = () => {};
  return (
    <div className="mb-3 d-flex justify-content-between">
      <Link
        title="Download"
        className="text-white fs-md w-25"
        to={`https://projectmanagementtool.s3.ap-south-1.amazonaws.com/${a.filePath}`}
        onClick={handleDownloadClick}
      >
        {a.fileName}
      </Link>
      <p className="text-white fs-md w-25">{a.addedDate.slice(0, 10)}</p>
      <p className="text-white fs-md w-25">{a.addedBy}</p>
      <p className="text-white fs-md w-25">
        <i
          className="fa-solid fa-trash"
          title="Remove"
          onClick={handleDeleteClick}
        ></i>
      </p>
    </div>
  );
};

export default AttachmentCard;
