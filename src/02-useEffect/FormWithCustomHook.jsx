import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
 
export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password} = useForm(  {
        username:'', 
        email: '', 
        password: ''
    })

    // const { username, email, password } = formState;


  return (
    <> 
        <h1>Formulario con Custom Hook</h1>
        <hr />
        <input 
           type="text" 
           className="form-control"
           placeholder="Username"
           name="username"
           value={ username }
           onChange={ onInputChange }
        />
        <input 
           type="email" 
           className="form-control mt-2 mb-2"
           placeholder="yosef@gmail.com"
           name="email"
           value={ email }
           onChange={ onInputChange }
        />
        <input 
           type="password" 
           className="form-control mt-2 mb-2"
           placeholder="contraseña"
           name="password"
           value={ password }
           onChange={ onInputChange }
        />

    </>
  );
};
