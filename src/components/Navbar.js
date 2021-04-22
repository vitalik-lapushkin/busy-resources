import { Link, useLocation } from "react-router-dom";
import RouterPaths from '../router/RouterPaths';
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const links = Object
    .values(RouterPaths)
    .sort((first, second) => first.order - second.order)
    .map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className={"br_navbar__item" + (location.pathname === item.path ? " active" : "")}
      >
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
