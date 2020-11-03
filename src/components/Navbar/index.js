import React from 'react';
import {Bars, Nav, NavIcon, NavLink} from './NavbarElement';

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
