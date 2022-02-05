import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './Navbarelement';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>Game Bros</NavLink>
            <NavIcon onClick={toggle}>
                <p class='menu'>Menu</p>
                <Bars />
            </NavIcon>
                <a class='cart' href="https://google.com">Cart</a>            
              
            
        </Nav>
    </>
  );
};

export default Navbar;

