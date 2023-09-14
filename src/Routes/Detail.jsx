// 3) Estructuro el consumo de la API en el componente Detail.jsx
import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    const {theme, toggleTheme} = React.useContext(GlobalContext)

  const detailStyles = {
    background: theme.background,
    color: theme.font
  }

  const [ dentista, setDentista ] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const getDentista = async () => {
    try {
      const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      if (data ) {
        setDentista(data);
      }

    } catch (error) {
      console.log('error teching dentista:', error);
    }
  };


  useEffect(() => {
    getDentista();
  }, [id]);


  return (
    <div className='detail'>
      <h1>Detail Dentist id {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className="card" style={detailStyles}>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <img src="../images/doctor.jpg" alt="img-doctor" />  
        <p>NOMBRE: {dentista.name}</p>
        <p>EMAIL: {dentista.email}</p>
        <p>CEL: {dentista.phone}</p>
        <p>URL: {dentista.website}</p>
      </div>
      <button onClick={() => navigate(-1)} style={detailStyles}>Go back</button>
    </div>
  )
}

export default Detail