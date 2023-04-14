import "../styles/todolist.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TodoItemCard from "./TodoItemCard";
import axios from "axios";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [duedate, setDuedate] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get("https://localhost:7288/api/Todoes/Employee", config)
      .then((res) => {
        setTodoList(res.data);
      });
  }, []);

  useEffect(() => {}, [todoList]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDuedate(e.target.value);
  };

  const handleAddClick = () => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .post(
        "https://localhost:7288/api/Todoes",
        {
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
                          value={title}
                          onChange={handleTitleChange}
                        />
                        <input
                          id="duedate"
                          type="date"
                          className="form-control form-control-lg"
                          value={duedate}
                          onChange={handleDueDateChange}
                        />
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={handleAddClick}
                        >
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

                {todoList?.map((t, i) => (
                  <TodoItemCard todo={t} setTodoList={setTodoList} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
