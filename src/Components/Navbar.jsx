import React from 'react'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import {GlobalContext} from './utils/global.context.jsx'


const Navbar = () => {
  const {theme, toggleTheme} = React.useContext(GlobalContext)
  
// Defino el estilo
const navbarStyles = {
  background: theme.background,
  color: theme.font
}

  return (
    <nav style={navbarStyles}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='navLink'>
      <Link to="/" style={navbarStyles}>Home</Link>
      <Link to="/detail" style={navbarStyles}>Detail</Link>
      <Link to="/favs" style={navbarStyles}>Favs</Link>
      <Link to="/contact" style={navbarStyles}>Contact</Link>     
      </div>
      <div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button name='navButton' onClick={toggleTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar