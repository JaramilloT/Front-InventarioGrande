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
                <a className='a'  href="../Inventory/Inventory">Inventario</a>
                    </div>
        </div>
                <a className='i' href="../Sesion/Sesion">Iniciar sección</a>
       
    </div>
  )
}
