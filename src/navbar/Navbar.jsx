import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  // navbar behavior======================================================
  const [scroll, setScroll] = useState("py-4");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // handle scroll=================================================================
  function handleScroll() {
    if (scrollY >= 30) {
      setScroll("py-2");
    } else {
      setScroll("py-4");
    }
  }
  // jsx code==================================================================
  return (
    <>
      <nav className={` navbar navbar-expand-lg  ${scroll}  bg-nav fixed-top`}>
        <div className="container">
          <Link className="navbar-brand logo text-uppercase" to="/">
            Start Framework
          </Link>
          <button
            className="navbar-toggler border-0 toggle-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  my-link"
                  aria-current="page"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="portfolio">
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
