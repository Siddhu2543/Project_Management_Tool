import "../styles/todolist.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import TodoItemCard from "./TodoItemCard";

const TodoList = () => {
  const [todoList, setTodoList] = useState([1, 2, 3, 4]);
  return (
    <>
      <div className="container pb-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#fbfbfb" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-list-check me-1"></i>
                  <u>My Todo-s</u>
                </p>

                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="input-group">
                        <input
                          id="title"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Add to-do item here..."
                          aria-label="To-do item description"
                        />
                        <input
                          id="duedate"
                          type="date"
                          className="form-control form-control-lg"
                        />
                        <button className="btn btn-primary" type="button">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select className="select">
                    <option value="1">All</option>
                    <option value="2">Completed</option>
                    <option value="3">Active</option>
                  </select>
                  <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                  <select className="select">
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                  </select>
                  <Link
                    to="/"
                    style={{ color: "#23af89" }}
                    data-bs-toggle="tooltip"
                    title="Ascending"
                  >
                    <i className="fas fa-sort-amount-down-alt ms-2"></i>
                  </Link>
                </div>

                {todoList.map((t) => (
                  <TodoItemCard key={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="cnfrmdelete"
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
                  Are you sure you want to delete this Todo Item?
                </h1>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="edittodo"
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="duedate" className="form-label">
                    Due Date
                  </label>
                  <input type={"date"} className="form-control" id="duedate" />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
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
      </div>
    </>
  );
};

export default TodoList;
