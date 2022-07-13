import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
//import { BiUserCircle } from "react-icons/bi";
//import { Link } from "react-router-dom";
import { Searchbar } from "../../components/searchbar/Searchbar";
import "./style.css";
import { ImProfile } from "react-icons/im";
import { AiOutlineSetting } from "react-icons/ai";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Searchbar />
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Navbar.Collapse className="justify-content-end">
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
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
