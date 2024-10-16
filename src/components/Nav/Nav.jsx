import React from 'react'
import { Logo } from '../Logos/Logo'
import './Nav.css';

export const Nav = () => {
  return (
    <div className='Nav'>
        <div className='manage'>
                <Logo></Logo>
        </div>
            <div className='links'>
                    <div className='seccion'>
                <a className='a' href="./Inicio">Inicio</a>
                
                    </div>
        </div>
        <button className='sesion_b'>

                <a className='i' href="../Sesion/Sesion">Iniciar sección</a>
       
        </button>
    </div>
  )
}
