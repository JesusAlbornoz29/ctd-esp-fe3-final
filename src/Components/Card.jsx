// 4) De detail pasamos a CARD
import React from "react";
import { Link } from "react-router-dom";
import Style from "./Card.css"

const Card = ({ name, username, id, data }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${data.id}`} className="card-link">
            <h3>ID: {data.id}</h3>
            <p>USERNAME: {data.username}</p>
            <p>NAME: {data.name}</p>
            <img src="./images/doctor.jpg" alt="img-doctor" />  
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
