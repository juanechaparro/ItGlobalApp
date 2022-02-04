import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { useForm } from '../hooks/useForm';

export const Form = ({airline}) => {
   const [formValues, handleInputChange, reset] = useForm(
       {
        name:'',
        email:'',
        mobile:'',
        age:''
       }
   );
   const{name, email,mobile,age} = formValues;
   const [msgError, setMsgError] = useState('');
   const handleSubmit = (e)=>{
       e.preventDefault();
       if(validate()){
       console.log("Nombre:" ,name, 
       "Email :", email,
       "Celular:", mobile,
       "Edad:", age );

       Swal.fire({
        icon: 'success',
        title: 'Envio Exitoso',
        text: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
        timer:5000
       
      
      })
      reset();}
   }
   const validate = ()=>{
    let isValid = true;

    if (!name) {
      isValid = false;
      setMsgError("Please enter your name.");
    }

    if (!email) {
      isValid = false;
      setMsgError( "Please enter your email Address.");
    }

    if (email) {
        
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        isValid = false;
        setMsgError("Please enter valid email address.") ;
      }
    }

    if (!mobile) {
      isValid = false;
      setMsgError("Please enter your phone number.");
    }

    if (mobile) {
        
      let pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(mobile)) {
        isValid = false;
        setMsgError ("Please enter only number.");
      }else if(mobile.length != 10){
        isValid = false;
        setMsgError("El numero de celular debe tener 10 numeros");
      }
    }

    if (age) {
        if(age< 18 || age >100){
      isValid = false;
      setMsgError( "La edad debe estar entre 18 y 100 años");}
    }

   

    return isValid;
}

  return <div className = "form__main">
         <div className = "form__box-container">
         <h4 className ="form__title"> Hola, bienvenido, sabemos que quieres 
         viajar en <span className ="form__airline">{airline}</span>, por favor diligencia el siguiente formulario:</h4>
         <form onSubmit={handleSubmit}>
           {
                msgError &&
                <div className ="form__alert-error">
                {msgError}
            </div>
            }
          <input 
            type="text"  
            placeholder = "Nombre"
            className = "form__input" 
            value={name}
            onChange= {handleInputChange}
            name= "name"
            required 
             />
          <input type="email" 
           name= "email" 
           placeholder = "Email"
           className = "form__input" 
           value={email}
           onChange= {handleInputChange}
           required />
          <input 
          type="text" 
          name = "mobile" 
          placeholder = "Celular"
          className = "form__input" 
          value={mobile }
          onChange= {handleInputChange}
          required 
          />
          <input 
          type="text" 
          name = "age" 
          placeholder = "Edad"
          className = "form__input" 
          value={age}
          onChange= {handleInputChange}
          required />
           <button
            className = "form__btn  mb-5"

            type = "submit">
                Enviar formulario
            </button>
      </form>
      </div>
  </div>;
};
