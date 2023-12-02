import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state, getFavs, deleteFromFavs } = useContextGlobal();
  const { favs } = state;

  useEffect(() => {
    getFavs();
  },[]);

  
  const deleteFav = (dentist)=>{
    deleteFromFavs(dentist);
    getFavs();
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map(dentist => <Card dentist={dentist} key={dentist.id} msg="Delete fav" action={deleteFav}/>)}
      </div>
    </>
  );
};

export default Favs;
