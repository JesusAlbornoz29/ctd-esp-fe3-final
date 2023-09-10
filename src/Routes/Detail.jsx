// 3) Estructuro el consumo de la API en el componente Detail.jsx
import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [ dentista, setDentista ] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const getDentista = async () => {
    try {
      const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      if (data && data.length > 0) {
        setDentista(data[0]);
      }
    } catch (error) {
      console.log('error teching dentista:', error);
    }
  };


  useEffect(() => {
    getDentista();
  }, [id]);


  return (
    <div>
      <h1>Detail Dentist id {dentista.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className="card">
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <img src='' alt='' />
        <p>{dentista.name}</p>
        <p>{dentista.email}</p>
        <p>{dentista.phone}</p>
        <p>{dentista.website}</p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Detail