import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import { CgGames} from 'react-icons/cg';

export const Nav = styled.nav`
  background: transparent; 
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700; 
  
  a.cart {
    transform: translate(-150%, 100%);
    font-weight: bold;
    text-align: flex-end;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }

`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: fixed;

  @media screem amd (max-width: 400px) {
      position: absolute;
      top: 10px;
      left: 25px;

  }
`;

export const NavIcon = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p.menu {
    transform: translate(-275%, 100%);
    font-weight: bold;
    display: block;
    position: fixed;
    cursor: pointer;
    color: #fff;
    top: 0;
    right: 0;

    @media screen and (max-width: 650px) {
      transform: translate(50px);
      position: fixed;
      left: 25px;
      top: 25px;
    }
  }

  a.cart {
    transform: translate(-150%, 100%);
    font-weight: bold;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }
`;

export const Bars = styled(CgGames)`
  font-size: 2rem;
  transform: translate(-500%, 60%);

  @media screen and (max-width: 650px) {
    transform: translate(50px);
    position: fixed;
    left: -17px;
    top: 22px;
  }
`;