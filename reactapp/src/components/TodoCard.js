const TodoCard = () => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">Title</div>
      </div>
      <span className="badge bg-danger rounded-pill p-3">
        <i className="fa-solid fa-calendar fa-md"></i> 06/03/2023
      </span>
    </li>
  );
};

export default TodoCard;
