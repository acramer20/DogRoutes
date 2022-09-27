import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar({doggos}) {
  const links = doggos.map(doggo => (
    <NavLink key={doggo.name} to={`/doggos/${doggo.name.toLowerCase()}`} >
      {doggo.name}
    </NavLink>
  ));
  return (
    <nav>
      <NavLink exact to="/doggos">Home</NavLink>
      {links}
    </nav>
  );
}

export default NavBar;