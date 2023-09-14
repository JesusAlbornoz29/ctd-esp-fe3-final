// 5) Continuo luego de Detail y Card por Home
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [ dentistas, setDentistas ] = useState([]);



  const getDentistas = async () => {
    try {
      const res = await fetch ('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setDentistas(data);
    } catch (error) {
      console.log('error teching dentistas:', error);
    }
  };

  useEffect(() => {
    getDentistas();
  }, []);


  return (
    <main className=""  >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
        dentistas.length
        ? dentistas.map(dentista => (<Card data={dentista} key={dentista.id} />))
        : null
        }
      </div>
    </main>
  )
}

export default Home