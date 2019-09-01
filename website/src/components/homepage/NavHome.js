import React from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './drop.css';
const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    font-weight:600;
    font-size:14px;
    margin-top:18px;
    &:hover {
        text-decoration:none;  
      color: #696969;
    }
  }
`

export default function NavHome() {
    return (
            <div className="Navbar row">

            <div className="imgb col-md-4 col-xs-12">
            <img src={require('../../assets/icons/png.png')} alt="logo"
            style={{height: '70px', width: '70px'}} />
            </div>
            <Styles className="col-md-8 col-xs-12">
            <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <DropdownButton id="dropdown-basic-button" title="Bands">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                </Nav.Item>

                <Nav.Item>
                <DropdownButton id="dropdown-basic-button" title="Bands">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                
                </Nav.Item>

                <Nav.Item>
                <Nav.Link>
                    <Link to="/">Gigs</Link>
                </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <DropdownButton id="dropdown-basic-button" title="Bands">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                </Nav.Item>
                <Nav.Item>
                <DropdownButton id="dropdown-basic-button" title="Bands">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/shop">Post Event</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    <Link to="/shop">Login/Signp</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>
                </div>
    )
}
