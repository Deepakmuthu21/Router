import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navb">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <Link className="nav-link active" to="/">
                All
              </Link>
              <Link className="nav-link active" to="/fullstack">
                FULL STACK DEVELOPMENT
              </Link>

              <Link className="nav-link active" to="/datascience">
                DATA SCIENCE
              </Link>
              <Link className="nav-link active" to="/cybersecurity">
                CYBER SECURITY
              </Link>
              <Link className="nav-link active" to="/courses">
                COURSES
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
