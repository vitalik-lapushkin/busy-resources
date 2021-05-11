import { useContext } from 'react';
import styled, { css } from 'styled-components'
import Navbar from './Navbar';
import StylesContext from '../context/StylesContext';

const HeaderRoot = styled.header`
  height: 40px;
  position: sticky;
  top: 0;
  padding: 10px;
  ${props =>
    css`
    background-color: ${ props.primaryColor };
  `}
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: auto;
  height: 100%;
`;

const Login = styled.a`
  ${props =>
    css`
    color: ${ props.primaryTextColor };
  `}
  text-decoration: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;

function Header({ isLoggedIn }) {
  const { primaryColor, primaryTextColor } = useContext(StylesContext);

  return (
    <HeaderRoot primaryColor={primaryColor}>
      <HeaderContainer>
        <Navbar/>
        {isLoggedIn
          ? <Login primaryTextColor={primaryTextColor} href='/asd'>Logout</Login>
          : <Login primaryTextColor={primaryTextColor} href='/asd'>Login</Login>
        }
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default Header;
