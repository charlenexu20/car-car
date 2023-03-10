import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="nav-item dropdown">
              <NavLink className="btn btn-outline-secondary dropdown-toggle bg-success" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><NavLink className="dropdown-item" to="/manufacturers">Show a list of manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers/new">Create a new manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">Show a list of vehicle models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/new">Create a new vehicle model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles">Show a list of automobiles in inventory</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/new">Create a new automobile in inventory</NavLink></li>

              </ul>
          </div>
          <div className="nav-item dropdown">
          <NavLink className="btn btn-outline-secondary dropdown-toggle bg-success" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
          </NavLink>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><NavLink className="dropdown-item" to="salesperson/new"> Add a sales person</NavLink></li>
              <li><NavLink className="dropdown-item" to="customers/new"> Add a new customer</NavLink></li>
              <li><NavLink className="dropdown-item" to="sales/new">Create a new sales record</NavLink></li>
              <li><NavLink className="dropdown-item" to="sales">List Of Our Sales</NavLink></li>
              <li><NavLink className="dropdown-item" to="salesperson/history">Salesperson History</NavLink></li>
            </ul>
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
