import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navigation.css"


class Navigation extends Component {
  render() {
    return (
      <Navbar className="topnav">
       <Nav>
         <Nav.Link href="/">Home</Nav.Link>
         <Nav.Link href="/otra">Otra</Nav.Link>
         <Nav.Link href="/ayuda">Ayuda</Nav.Link>
       </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
