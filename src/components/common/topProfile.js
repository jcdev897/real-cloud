import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import noThumbnailUser from '../../assets/no-thumbnail-user.jpg'

export default function TopProfile() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="drop-navlink">
        <Image
          src={noThumbnailUser}
          className="drop-img rounded-circle"
          alt="user logo"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <div className="d-flex align-items-center">
            <FaRegUser />
            <p className="ms-2 mb-0 fw-normal">Account</p>
          </div>
        </Dropdown.Item>
        <hr></hr>
        <Dropdown.Item>
          <div className="d-flex align-items-center">
            <MdOutlinePhone fontSize={20} />
            <div>
              <p className="ms-2 mb-0 fw-normal">
                Help Center
              </p>
              <Link to="tel:8443005122" className="text-muted ms-2">(844) 300-5122</Link>
            </div>
          </div>
        </Dropdown.Item>
        <hr></hr>
        <Dropdown.Item>
          <div className="d-flex align-items-center fw-normal">
            <FaRegUser />
            <p className="ms-2 mb-0 fw-normal">Sign out</p>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}