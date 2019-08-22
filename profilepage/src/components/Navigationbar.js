import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import style from "./Navb.css"

const navstyle={
    width:'35%',
    marginLeft: '35%'
}
const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    padding:7px;
    font-weight:600;
    font-size:14px;
    margin-top:10px;
    &:hover {
        text-decoration:none;  
      color: #696969;
    }
  }
`;
function Navigationbar() {
    return(
        <div className="Navbar">

            <div className="imgb" style={{float:"left",margin:'1%'}}>
            <img src={require('../assets/spotify.png')} alt="logo"
            style={{height: '35px', width: '35px'}} />
            </div>
            <Styles>
            <Navbar style={navstyle}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/">HOME</Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/studio">STUDIO</Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link>
                        <Link to="/gigs">GIGS/EVENTS</Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                        <Link to="/shop">SHOP</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <div class="form-group has-search" style={{marginLeft:'0.8rem'}}>
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="search" class="form-control" placeholder="SEARCH" size="10" />
                    </div>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Styles>
            <div>
                <h3>Hello Band</h3>
                <div className="imgb" style={{float:"right",margin:'1%'}}>
                <img src={require('../assets/spotify.png')} alt="logo"
                style={{height: '35px', width: '35px'}} />
            </div>
            </div>
        </div>
    );
}

export default Navigationbar;