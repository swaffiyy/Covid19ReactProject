import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class Header extends Component{
    constructor(){
      super();
    }
  
    render(){
      return(
          
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">COVID - 19</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/india">India</Link>
      <Link className="nav-link" to="/world">World</Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

         
      )
    }
}

export default Header;