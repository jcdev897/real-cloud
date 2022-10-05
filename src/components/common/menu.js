import React from "react";
import { Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import TopProfile from "./topProfile";

export default function Menu() {
  const location = useLocation();

  return (
    <Nav className="me-auto custom-navbar d-flex justify-content-between w-100 flex-column flex-md-row">
      <div className="d-flex align-items-center flex-column flex-md-row">
        <Nav.Link
          as={Link}
          to="/search"
          active={location.pathname === "/search"}
        >
          Search Properties
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/people-search"
          active={location.pathname === "/people-search"}
        >
          Search People
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/my-properties"
          active={location.pathname === "/my-properties"}
        >
          My Properties
        </Nav.Link>
      </div>
      <div className="d-flex align-items-center">
        <Button>Your Credits: 0</Button>
        <TopProfile/>
      </div>
    </Nav>
  )
}