import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeStyle={{color: 'yellow'}} activeClassName='selected'>Home</NavLink>
      <NavLink to="/portfolio" activeStyle={{color: 'yellow'}} activeClassName='selected'>Portfolio</NavLink>
      <NavLink to="/about" activeStyle={{color: 'yellow'}} activeClassName='selected'>About</NavLink>
      <NavLink to="/contacts" activeStyle={{color: 'yellow'}} activeClassName='selected'>Contacts</NavLink>
      <NavLink to="/references" activeStyle={{color: 'yellow'}} activeClassName='selected'>References</NavLink>
    </div>
  );
}

export default Navbar;
