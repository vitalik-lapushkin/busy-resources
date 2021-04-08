import "./Header.css";
import Navbar from './Navbar';

function Header({ isLoggedIn }) {
  return (
    <header className="br_header">
      <div className="br_header__container">
        <Navbar />
        {isLoggedIn ? <a className="br_header__login" href='/asd'>Logout</a> : <a className="br_header__login" href='/asd'>Login</a>}
      </div>
    </header>
  );
}

export default Header;
