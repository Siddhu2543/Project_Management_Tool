import axios from "axios";
import UpdateTodo from "./UpdateTodo";
import { useEffect } from "react";

const TodoItemCard = ({ todo, setTodoList }) => {
  const handleDeleteClick = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .delete(`https://localhost:7288/api/Todoes/${todo.id}`, config)
      .then((res) => {
        axios
          .get("https://localhost:7288/api/Todoes/Employee", config)
          .then((res) => {
            setTodoList(res.data);
          });
      });
  };

  const handleStatusChange = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(`https://localhost:7288/api/Todoes/ToggleStatus/${todo.id}`, config)
      .then((res) => {
        axios
          .get("https://localhost:7288/api/Todoes/Employee", config)
          .then((res) => {
            setTodoList(res.data);
          });
      });
  };
  useEffect(() => {}, [todo]);
  return (
    <>
      <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
        <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div className="form-check">
            <input
              className="form-check-input me-0"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleStatusChange}
              id="flexCheckChecked1"
              aria-label="..."
              title="Is Completed?"
            />
          </div>
        </li>
        <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <div className="ms-2 me-auto">
            <div className="fw-normal" title="Todo">
              {todo.title}
            </div>
            <span className="badge bg-danger rounded-pill p-2">
              <i className="fa-solid fa-clock fa-md"></i>{" "}
              {todo.dueDate.slice(0, 10)}
            </span>
          </div>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            <button
              type="button"
              className="text-info btn btn-outline-light shadow-none"
              data-bs-toggle="modal"
              data-bs-target={"#edittodo" + todo.id}
              title="Edit todo"
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button
              className="text-danger btn btn-outline-light shadow-none"
              title="Delete todo"
              onClick={handleDeleteClick}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <div className="text-end text-muted">
            <a
              href="#!"
              className="text-muted"
              data-bs-toggle="tooltip"
              title="Created date"
            >
              <p className="small mb-0">
                <i className="fas fa-info-circle me-2"></i>
                {todo.creationDate.slice(0, 10)}
              </p>
            </a>
          </div>
        </li>
      </ul>
      <UpdateTodo todo={todo} setTodoList={setTodoList} />
    </>
  );
};

export default TodoItemCard;
