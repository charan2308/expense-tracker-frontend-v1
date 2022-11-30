import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/slices/users/usersSlices";

const PrivateNavbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className=" bi bi-currency-exchange fs-1 text-warning "></i>
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
                {/* <Link to="/expenses" className="nav-link active">
                  <h5>Expenses List</h5>
                </Link> */}
              </li>

              <li className="nav-item">
                {/* <Link to="/incomes" className="nav-link active">
                <h5>Income List</h5>
                </Link> */}
              </li>

              <li className="nav-item mb-2">
                {/* <Link to="/dashboard" className="btn  btn-outline-warning me-2">
                <h5>Dashboard</h5>
                </Link> */}
              </li>
              <li className="nav-item">
                <Link to="/profile" className="btn  btn-outline-primary me-2">
                <h5>Profile</h5>
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link to="/profile" className="btn  btn-outline-primary me-2">
                  <h5>Investment</h5>
                </Link> */}
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/add-expense" className="btn btn-danger me-2">
              <h5>New Expense</h5>
              </Link>
              <Link to="/add-income" className="btn btn-success me-2">
              <h5>New Income</h5>
              </Link>
              <button
                onClick={() => dispatch(logoutAction())}
                className="btn btn-warning me-2"
              >
                <h5>Logout</h5>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PrivateNavbar;
