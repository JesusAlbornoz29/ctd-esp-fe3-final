import React from 'react'
import Form from '../Components/Form'
import { GlobalContext } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {theme, toggleTheme} = React.useContext(GlobalContext)

  const contactStyles = {
    background: theme.background,
    color: theme.font
  }

  return (
    <div className='container'>

      <div className="text">
        <h1>Contacto</h1>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>

        <Form/>

    </div>
  )
}

export default Contact