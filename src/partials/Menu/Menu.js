import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="">PattiRock - Vinyls</a>
          </div>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/library" className="navbar-item">Library</Link>
              <Link to="/wishlist" className="navbar-item">Wishlist</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
