import { Link } from "react-router-dom";
import RouterPaths from './RouterPaths';
import "./Navbar.css";

function Navbar() {
  const links = Object
    .values(RouterPaths)
    .map((item) => (
      <Link key={item.name} to={item.path} className="br_navbar__item">
        {item.name}
      </Link>
    ));

  return (
    <nav className="br_navbar">
      {links}
    </nav>
  );
}

export default Navbar;
