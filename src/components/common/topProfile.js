import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
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
  )
}