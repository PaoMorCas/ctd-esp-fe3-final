import React from "react";
import { Link } from 'react-router-dom';
import'./Card.css';
import { useContextGlobal } from './utils/global.context'

 
const Card = ({ dentist, msg, action }) => {
  const { state } = useContextGlobal();
  const { theme } = state;
  
  const addFav = ()=>{
    action(dentist);
  }

  return (
    <div className={`card ${theme}`}>
        <Link to={'/detail/'+dentist.id}>
        <h4>{dentist.name}</h4>
        <h4>{dentist.username}</h4>
        <img src="/images/doctor.jpg" alt="doctor" />
      </Link>
        <button onClick={addFav} className="favButton">{msg}</button>
    </div>
  );
};

export default Card;
