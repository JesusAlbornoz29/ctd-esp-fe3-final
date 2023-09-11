import React, {useState, useEffect} from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    // Estado local para almacenar las tarjetas favoritas
    const [favCards, setFavCards] = useState([]);

    useEffect(() => {
        // Obtener los favoritos del localStorage
        const storedFavCards = JSON.parse(localStorage.getItem("favCards")) || [];
        setFavCards(storedFavCards);
    }, []);


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favCards.map((favCard) => (
          <Card key={favCard.id} data={favCard} />
        ))}
      </div>
    </>
  );
};

export default Favs;
