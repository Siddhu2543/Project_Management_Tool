import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <NavLink end to="/" className="navbar-brand text-white">
        <i className="fa-solid fa-laptop-code"> Project Management Tool</i>
      </NavLink>

      <div>
        <a href="" className="text-white" style={{ textDecoration: "none" }}>
          <i className="fa-solid fa-circle-info"> About Us</i>
        </a>
      </div>
    </div>
  );
};

export default Logo;
