import { useEffect, useState } from "react";
import "../styles/connections.css";
import ConnectionCard from "./ConnectionCard";
import SearchConnectionCard from "./SearchConnectionCard";
import axios from "axios";

const Connections = () => {
  const [connections, setConnections] = useState([1, 2, 3, 4, 5]);
  const [search, setsearch] = useState("");
  const [isSearch, setisSearch] = useState(false);
  const [employeesresult, setEmployeesresult] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get("https://localhost:7288/api/Employees/Connections", config)
      .then((response) => {
        setConnections(response.data);
      });
  }, []);
  const handlesearchChange = (e) => {
    setsearch(e.target.value);
  };
  const handleSearchClick = () => {
    setisSearch(true);
    const token = JSON.parse(localStorage.getItem("USER"));
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(`https://localhost:7288/api/Employees/search/${search}`, config)
      .then((res) => {
        setEmployeesresult(res.data);
      });
  };
  return (
    <div className="container mb-3">
      <h3 className="text-primary">Connections</h3>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handlesearchChange}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      <hr className="my-4" />
      {isSearch && (
        <div id="search-result">
          <h3 className="text-success">Search Results</h3>
          <ul className="list-group list-group-flush">
            {employeesresult.map((e, i) => {
              var isconnected = connections.filter(
                (emp) => emp.id == e.id
              ).length;
              return (
                <SearchConnectionCard
                  employee={e}
                  isconnected={isconnected > 0 ? true : false}
                  setisSearch={setisSearch}
                  key={i}
                />
              );
            })}
          </ul>
          <hr className="my-4" />
        </div>
      )}
      {!isSearch && (
        <ul className="list-group list-group-flush">
          {connections.map((c, i) => (
            <ConnectionCard key={i} employee={c} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Connections;
