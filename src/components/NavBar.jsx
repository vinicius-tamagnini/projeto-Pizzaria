import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
function NavBar(){
    return(
        <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo"><div className="sizeImg"></div></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/listuser">Usuários</Link></li>
            <li><Link to="/listpizza">Pizzas</Link></li>
          </ul>
        </div>
      </nav>    
    );
}

export default NavBar;