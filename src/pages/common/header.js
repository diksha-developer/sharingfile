import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Searchbar } from "../../components/searchbar/Searchbar";
import "./style.css";
import { ImProfile } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";
import HamburgurBtn from "../../components/HamburgurBtn";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="nav">
        <Container fluid>
          <HamburgurBtn />
          <h4>dashboard</h4>
          <Searchbar />
          <Nav>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
              className="rounded-circle"
              height="25"
              alt="Avatar"
            />
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">
                <ImProfile />
                Your Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                <AiOutlineSetting />
                Setting
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* </Navbar.Collapse> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};
