// 4) De detail pasamos a CARD
import React from "react";
import { Link } from "react-router-dom";
import Style from "./Card.css"
import { GlobalContext } from "./utils/global.context";

const Card = ({ data }) => {
  const {theme, toggleTheme} = React.useContext(GlobalContext)

  const cardStyles = {
    background: theme.background,
    color: theme.font
  }

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    try{
      // Obtener las tarjetas favoritas existentes del localStorage
      const favCards = JSON.parse(localStorage.getItem("favCards")) || []; 

      // Verificar si la tarjeta ya existe en el localStorage
      const isAlreadyFav = favCards.some((favCard) => favCard.id === data.id);

      if (!isAlreadyFav) {
        // Si no esta en favoritos, agregarla
        favCards.push(data);

        // Guardar las tarjetas favoritas actualizadas en el localStorage
        localStorage.setItem("favCards", JSON.stringify(favCards));

        // Puedes mostrar un mensaje de exito o realizar otras acciones
        console.log("Card agregada a favoritos");
      } else {
        // La tarjeta ya esta en favoritos, puedes mostrar u nmensaje
        console.log(" La tarjeta ya esta en favoritos");
      }
    } catch (error) {
      console.log("Error al agregar la tarjeta a favoritos:", error);
    }
  }; 

  return (
    <div className="card" style={cardStyles}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${data.id}`} className="card-link">
            <h3 style={cardStyles}>ID: {data.id}</h3>
            <p style={cardStyles}>USERNAME: {data.username}</p>
            <p style={cardStyles}>NAME: {data.name}</p>
            <img src="./images/doctor.jpg" alt="img-doctor" />  
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
