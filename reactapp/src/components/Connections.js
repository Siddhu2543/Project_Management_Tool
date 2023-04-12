import { useState } from "react";
import "../styles/connections.css";
import ConnectionCard from "./ConnectionCard";
import SearchConnectionCard from "./SearchConnectionCard";

const Connections = () => {
  const [connections, setConnections] = useState([1, 2, 3, 4, 5]);

  const handleSearchClick = () => {
    var searchResult = document.getElementById("search-result");
    if (searchResult.classList.contains("d-none"))
      searchResult.classList.remove(["d-none"]);
  };
  return (
    <div className="container mb-3">
      <h3 className="text-primary">Connections</h3>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
      <hr className="my-4" />
      <div className="d-none" id="search-result">
      <h3 className="text-success">Search Results</h3>
        <ul className="list-group list-group-flush">
          <SearchConnectionCard />
        </ul>
        <hr className="my-4" />
      </div>
      <ul className="list-group list-group-flush">
        {connections.map((c) => (
          <ConnectionCard key={c} />
        ))}
      </ul>
    </div>
  );
};

export default Connections;
