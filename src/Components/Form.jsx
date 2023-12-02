import React, { useEffect, useState } from "react";
import { useContextGlobal } from './utils/global.context'
import './Form.css';

const Form = () => {
  const { state } = useContextGlobal();
  const { theme } = state;
  const errorLabel = "El campo es incorrecto, ingreselo de nuevo";
  const successMsg = "Gracias {0}, te contactaremos cuando antes vía mail";

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [msg, setMsg] = useState(successMsg);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });    

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });        

  const handleChangeData = (e) => {
    setShowSuccessMsg(false);
    setMsg(successMsg);

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    let wasError = false;
    const errors = {};

    Object.keys(formData).forEach(key => {
      const isError = validateField(key, formData[key]);
      errors[key] = isError ? errorLabel : '';
      
      if(isError) wasError = isError;
    });

    setFormErrors(errors);

    if(!wasError){
      setMsg(msg.replace('{0}', formData.name));
      setShowSuccessMsg(true);
  
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } 
    console.log("HP este",formData, msg)
  };


  // useEffect(()=>{
  //   Object.keys(formErrors).some(key => formErrors[key].)
  //   if(formData.name &&){

  //   }
  //   setMsg(msg.replace('{0}', formData.name));
  //   setShowSuccessMsg(true);

  // },[formData.name]);

  const validateField = (name, value) => {
    if(name === "name"){
      const isError = value.length < 1  || /\d/.test(value);
      return isError;
    }else if(name === "email"){
      const isError = value.length < 1  || !/^\S+@\S+\.\S+$/.test(value);
      return isError;
    }else if(name === "message"){
      const isError = value.length < 1;
      return isError;
    }
  };
  

  return (
    <div>
      <form className={`${theme}`} onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor='nombre'>Ingrese su nombre:  </label>
          <input type='text' id='name' name="name" value={formData.name} onChange={handleChangeData}/>
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="item">
          <label htmlFor='email'>Ingrese su email:  </label>
          <input type='text' id='email'  name="email" value={formData.email} onChange={handleChangeData}/>
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="item">
          <label htmlFor='email'>Ingrese su mensaje:  </label>
          <textarea name="message" value={formData.message} placeholder='Deje sus preguntas' onChange={handleChangeData} maxLength={500}/>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>
        <button className="bto" type='submit'>Enviar</button>
        {showSuccessMsg && <div>
          <span className="success">{msg}</span>
        </div>}
       </form>
    </div>
  );
};

export default Form;
