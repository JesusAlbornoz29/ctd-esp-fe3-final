import React from 'react'
import { GlobalContext } from './utils/global.context'

const Footer = () => {
  const {theme, toggleTheme} = React.useContext(GlobalContext)

  const footerStyles = {
    background: theme.background,
    color: theme.font
  }
  return (
    <footer style={footerStyles}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
