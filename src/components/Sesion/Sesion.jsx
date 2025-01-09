import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import fondo from '../../assets/fondo-emca.jpg'
import { useFromContext } from '../../context/FromContext';
import './Sesion.css'

export const Sesion = () => {

  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useFromContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!correo || !contraseña) {
      setMessage('Por favor llene bien los datos');
      return;
    }

    if (!correo.includes('@gmail.com')) {
      setMessage('Por favor, ingrese un correo válido');
      return;
    }

    const result = await login(correo, contraseña);

    if (result.success) {
      setMessage('Sesión iniciada exitosamente');
      navigate('/home');
    } else {
      setMessage(result.message);
    }
  };


  return (
    <div className='session'>
      <div className='img-se'>
          <img className='fondo-se' src={fondo} alt="" />
      </div>
        <div className='cp'>
         
          <form onSubmit={handleSubmit}>

          <div className='email'>
          <p className='ep'>Correo</p>
          <input className='input' type="text" placeholder='example@gmail.com'  value={correo}
              onChange={(e) => setCorreo(e.target.value)}/>
          
          </div>

        <div className='password'>

          <p className='ep'>Contraseña</p>
            <input className='input' type="password" placeholder='*********' value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}/>
      
        </div>

        <div className='class'>
          <Link to= '/register'>

            <button className='ci'>Crear Cuenta</button>
          </Link>
            <div className='space'></div>
            <button className='ci' type='submit'>Iniciar Sesión</button>
        
        {message && <p className="message">{message}</p>} {/* Mostrar mensajes al usuario */}
        </div>

          </form>
        
      </div>
    </div>
  )
}
