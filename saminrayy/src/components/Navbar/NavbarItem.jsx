import "./NavbarItem.css";
import { SlBasket } from "react-icons/sl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
export default function NavbarItem() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="https://saminray.com/wp-content/uploads/2024/07/logo_Saminray_Mob.webp"
              width="98"
              height="45"
              className="d-inline-block align-top mx-2"
              alt="Logo"
            />
            saminaray
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/product">Products</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/buy">
                <SlBasket style={{ fontSize: "16px", margin: "0 10px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
