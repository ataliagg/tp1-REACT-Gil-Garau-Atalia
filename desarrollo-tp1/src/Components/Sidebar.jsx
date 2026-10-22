import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Sidebar.css";

const Sidebar = () => {

  return (
    <div className='sidebar'>
     <nav>
        <NavLink to="/"> Inicio </NavLink>
        <NavLink to="/about"> Sobre mí </NavLink>
        <NavLink to="/skills"> Habilidades </NavLink>
        <NavLink to="/projects"> Proyectos </NavLink>
        <NavLink to="/contact"> Contactos </NavLink>
     </nav>
    </div>
  )
}

export default Sidebar
