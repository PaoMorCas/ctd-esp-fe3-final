import React from 'react';
import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

const initialState = { theme: THEME_LIGHT, data: [], favs: [], dentist: {} };

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [theme, setTheme] = useState(THEME_LIGHT);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
      axios(url)
      .then(res => 
          dispatch({type: 'GET_DENTISTS', payload: res.data})
      )
  }, []);

  const changeTheme = (newtheme) => {
      dispatch({type: 'CHANGE_THEME', payload: newtheme});
  };

  const addToFavs = (dentist) => {
    const data = JSON.parse(localStorage.getItem("favs")) || [];
    const exists = data.some(item => item.id === dentist.id);
    if(!exists){
      const dataToStorage = [...data, dentist]
      
      localStorage.setItem("favs",JSON.stringify(dataToStorage));
    }
 };

  const getFavs = () => {
    const data = JSON.parse(localStorage.getItem("favs")) || [];

    dispatch({type: 'ADD_FAV', payload: data});
  };

  const getDetail = (id) => {
    axios(`${url}/${id}`)
     .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
  };

  const deleteFromFavs = (dentist) => {
    const data = JSON.parse(localStorage.getItem("favs")) || [];
    const dataToStorage = data.filter(item => item.id !== dentist.id);
    localStorage.setItem("favs",JSON.stringify(dataToStorage));
  };

  return (
    <ContextGlobal.Provider value={{state, dispatch, changeTheme, addToFavs, getFavs, getDetail, deleteFromFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);