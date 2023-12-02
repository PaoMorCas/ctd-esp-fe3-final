import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducer";
import { useContextGlobal } from '../Components/utils/global.context';


const Detail = () => {
  const { state, getDetail } = useContextGlobal();
  const { dentist } = state;

  let { id } = useParams();

  useEffect(() => getDetail(id), [id])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <img className="doctor-img" src="/images/doctor.jpg" alt="doctor"/>
      <p>{dentist.name}</p>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
    </>
  )
}

export default Detail