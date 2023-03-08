import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="manufacturers/"
                >
                  Manufacturers List
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="manufacturers/new"
                >
                  Create Manufacturer
                </NavLink>

                <hr className="dropdown-divider"></hr>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="models/"
                >
                  Vehicle Models List
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="models/new"
                >
                  Create Vehicle Model
                </NavLink>

                <hr className="dropdown-divider"></hr>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="automobiles/"
                >
                  Automobiles List
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  aria-selected="true"
                  to="automobiles/new"
                >
                  Create Automobile
                </NavLink>
              </ul>
            </li>

            {/* Sales dropdown: */}
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
            </li>

            {/* Services dropdown: */}
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
