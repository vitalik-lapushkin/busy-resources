import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import RouterPaths from '../router/RouterPaths';
import StylesContext from '../context/StylesContext';

const NavbarItem = styled(Link)`
    text-decoration: ${ props => props.$active ? 'underline' : 'none' };
    color: ${ props => props.$primaryTextColor };
    padding: 0 10px;
    font-weight: bold;
  `;

function Navbar() {
  const { primaryTextColor } = useContext(StylesContext);
  const location = useLocation();

  const links = Object
    .values(RouterPaths)
    .sort((first, second) => first.order - second.order)
    .map((item) => (
      <NavbarItem
        key={item.name}
        to={item.path}
        $primaryTextColor={primaryTextColor}
        $active={location.pathname === item.path}
      >
        {item.name}
      </NavbarItem>
    ));

  return (
    <nav>
      {links}
    </nav>
  );
}

export default Navbar;
