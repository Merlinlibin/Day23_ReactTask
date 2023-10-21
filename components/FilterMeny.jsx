import React from 'react';

function FilterMeny() {
  return (
      <div >
          <ul className="py-2 navbar-nav me-auto mb-lg-0 ms-lg-4 px-5">
              <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter <i className="fa-solid fa-filter"></i></a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Price High to Low</a></li><hr/>
                                
                                <li><a className="dropdown-item" href="#!">Price Low to High</a></li><hr/>
                                <li><a className="dropdown-item" href="#!">Offer First</a></li>
                            </ul>
                        </li>
          </ul>
          <hr />
    </div>
  )
}

export default FilterMeny