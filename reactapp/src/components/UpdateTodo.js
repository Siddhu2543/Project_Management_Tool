import axios from "axios";
import { useEffect, useState } from "react";

const UpdateTodo = ({ todo, setTodoList }) => {
  const [title, setTitle] = useState(todo?.title);
  const [duedate, setDuedate] = useState(todo?.dueDate.slice(0, 10));

  useEffect(() => {
    setTitle(todo.title);
    setDuedate(todo.dueDate.slice(0, 10));
  }, [todo]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDuedate(e.target.value);
  };

  const handleUpdateClick = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .put(
        "https://localhost:7288/api/Todoes/" + todo.id,
        {
          id: todo.id,
          title: title,
          duedate: duedate,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get("https://localhost:7288/api/Todoes/Employee", config)
          .then((res) => {
            setTodoList(res.data);
          });
      });
    setDuedate("");
    setTitle("");
  };

  return (
    <div
      className="modal fade"
      id={"edittodo" + todo.id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Update Todo Item
            </h1>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Task
              </label>
              <input
                type="text"
                className="form-control"
                id="task"
                placeholder="Task goes here..."
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="duedate" className="form-label">
                Due Date
              </label>
              <input
                type={"date"}
                className="form-control"
                id="duedate"
                value={duedate}
                onChange={handleDueDateChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleUpdateClick}
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
  );
};

export default UpdateTodo;
