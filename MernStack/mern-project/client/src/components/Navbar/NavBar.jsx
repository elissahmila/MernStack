import React from 'react'
import '../../assets/style/Navbar.css'
import {GiWhiteBook} from "react-icons/gi";
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch()
  console.log(isLoggedIn);
  const logout = () => {
    sessionStorage.clear("id")
    dispatch(authActions.logout())
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          style={{ color: "rgb(255, 0, 0)" }}
          className="navbar-brand"
          to="#"
        >
          <GiWhiteBook /> &nbsp; Priority Planner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About Us <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/todo">
                Todo <span className="sr-only">(current)</span>
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                {" "}
                <li className="nav-item  mx-2 active">
                  <Link
                    className="nav-link btn-nav "
                    style={{ color: "white" }}
                    to="/signup"
                  >
                    Sign Up <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item  mx-2 active">
                  <Link
                    className="nav-link btn-nav"
                    style={{ color: "white" }}
                    to="/signin"
                  >
                    Sign In <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item  mx-2 active" onClick={logout}>
                <Link
                  className="nav-link btn-nav"
                  style={{ color: "white" }}
                  to="#"
                >
                  Sign Out <span className="sr-only">(current)</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar