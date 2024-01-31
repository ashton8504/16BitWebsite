import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
`;
function Header() {
  return (
    <StyledHeader className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          16-Bit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Example Websites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
