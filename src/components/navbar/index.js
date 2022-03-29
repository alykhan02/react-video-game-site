import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './Navbarelement';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>Game Bros</NavLink>
            <NavIcon onClick={toggle}>
                <p className='menu'>Menu</p>
                <Bars />
            </NavIcon>
                <a className='cart'>Cart</a>            
              
            
        </Nav>
    </>
  );
};

export default Navbar;

