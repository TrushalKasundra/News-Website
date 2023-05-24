import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // const buttn=()=>{

  //   document.querySelector('.dropdown1').classList.toggle('dropdown1-closed');
  //   document.querySelector('.dropdown2').classList.toggle('dropdown2-closed');
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={require("./Images/Logo.jpg")} alt="logo" height="50px" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link" to="/loginForm">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <i className="fa fa-user"></i> Sign In
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-auto ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/News">
                  NEWS
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/politics">
                  Politics
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="/">
                  Sports
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  More
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className=" navbar navbar-expand bg-dark navbar-dark ">
        <div className="collapse " id="navbarTogglerDemo02" > 
          <ul className="navbar-nav ">
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="/">
                Fashion
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="/">
                Technology
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="/">
                Weather
              </Link>
            </li>
            <li className="nav-item ms-auto">
            <Link className="dropdown2 pt-2"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-close" style={{ color: "aliceblue" }}></i>
            </Link>
            </li>
            </ul>
          
            

          {/* <div className="dropdown1-closed" ></div>

<div className="dropdown2-closed" ></div> */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
