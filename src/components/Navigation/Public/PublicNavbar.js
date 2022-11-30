import React from "react";
import { Link } from "react-router-dom";
const PublicNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-currency-exchange fs-1 text-warning "></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                <h3>finAIDs</h3>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <h3>Home</h3>
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  to="/add-expense"
                  className="btn  btn-outline-warning me-2"
                >
                  <h5>New Expense</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-income"
                  className="btn  btn-outline-primary me-2"
                >
                  <h5>New Expense</h5>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/login" className="btn btn-outline-secondary me-2">
              <h5>Sign In</h5>
              </Link>
              <Link to="/register" className="btn btn-primary">
              <h5>Sign Up</h5>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PublicNavbar;
