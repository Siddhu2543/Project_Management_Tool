import { useState } from "react";

const TodoItemCard = ({ todo, handleId }) => {
    const [id, setid] = useState("")
    const getid = (id) => {
        setid(id)
        handleId(id);
        console.log(id)
    }

    return (
      
    <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
        <div className="form-check">
          <input
            className="form-check-input me-0"
            type="checkbox"
            value=""
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
                      <i className="fa-solid fa-clock fa-md"></i> {todo.dueDate}
          </span>
        </div>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <button
                        type="button"
                        className="text-info btn btn-outline-light shadow-none"
                        data-bs-toggle="modal"
                        data-bs-target="#edittodo"
                        title="Edit todo"
                        title="Edit todo"
                        onClick={() => { getid(todo.id) }}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="text-danger btn btn-outline-light shadow-none"
            data-bs-toggle="modal"
            data-bs-target="#cnfrmdelete"
                        title="Delete todo"
                        onClick={() => {getid(todo.id)}}
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
                          <i className="fas fa-info-circle me-2"></i>{todo.creationDate
 }
            </p>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default TodoItemCard;
