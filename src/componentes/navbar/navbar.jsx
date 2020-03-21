import React, { Component } from 'react'
import Links from '../links';
import {Navbar,NavDropdown, Nav} from 'react-bootstrap';

export class navbar extends Component {
    render() {
        return (
            <div>
             <Navbar bg="light" expand="lg">
                    <Nav className="mr-auto">
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <Links/>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar> 

            </div>
        )
    }
}


export default (navbar)
