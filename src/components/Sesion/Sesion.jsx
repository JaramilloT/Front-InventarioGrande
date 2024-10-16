import React from 'react'
import previous from '../../assets/previous.png'
import './Sesion.css'

export const Sesion = () => {
  return (
    <div className='session'>
        <div className='cp'>
          <div className='return'>
          <img className='previous' src={previous} alt="" />
      <p className='vol'>Atras</p>

          </div>
          <div className='email'>
            
          <p className='ep'>Correo</p>
          <input className='input' type="text" placeholder='example@gmail.com'/>
          
          </div>

        <div className='password'>

          <p className='ep'>Contraseña</p>
            <input className='input' type="text" name="" id="" placeholder='*********'/>
        
        </div>

        <div className='class'>
            <button className='ci'>Crear Cuenta</button>
            <div className='space'></div>
            <button className='ci'>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  )
}
