
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Bubble Cinema
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Search"} className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/films"} className="nav-link">
              My Films
            </Link>
          </li>
        </div>
      </nav>
    )
}

export default Navbar;