import React from "react";
import { Nav, Dropdown, Button, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import noThumbnailUser from '../../assets/no-thumbnail-user.jpg'

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
        <Dropdown>
          <Dropdown.Toggle className="drop-navlink">
            <Image
              src={noThumbnailUser}
              className="drop-img rounded-circle"
              alt="userlogo"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <div className="d-flex">
                <FaCaretDown />
                <p>Account</p>
              </div>
            </Dropdown.Item>
            <hr></hr>
            <Dropdown.Item>
              <div className="d-flex">
                <FaCaretDown />
                <p>
                  Help Center<p>(844) 300 - 5122</p>
                </p>
              </div>
            </Dropdown.Item>
            <hr></hr>
            <Dropdown.Item>
              <div className="d-flex">
                <FaCaretDown />
                <p>Sign out</p>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Nav>
  )
}