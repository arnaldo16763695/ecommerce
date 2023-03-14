import React from "react";
import {Link, Outlet} from 'react-router-dom'

const NavBar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg  bg-white py-3 shadow-sm ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to={"/"}>
            LA COLECCIÓN
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  Acerca
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                {" "}
                <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                {" "}
                <i className="fa fa-user-plus me-1" aria-hidden="true"></i> Register
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                {" "}
                <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="content">
      <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
