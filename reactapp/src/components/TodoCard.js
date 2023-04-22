const TodoCard = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{todo?.title}</div>
      </div>
      <span className="badge bg-danger rounded-pill p-3">
        <i className="fa-solid fa-calendar fa-md"></i>{" "}
        {todo?.dueDate?.slice(0, 10)}
      </span>
    </li>
  );
};

export default TodoCard;
