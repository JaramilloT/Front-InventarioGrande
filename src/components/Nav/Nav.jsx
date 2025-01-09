import React from 'react';
import { Logo } from '../Logos/Logo';
import { Link } from 'react-router-dom';
import { useFromContext } from '../../context/FromContext';
import './Nav.css';

export const Nav = () => {
  const { currentUser, logout } = useFromContext();

  return (
    <div className='Nav'>
      <div className='manage'>
        <Logo />
      </div>
      <div className='links'>
        <div className='seccion'>
          <Link to='/home'>Inicio</Link>
        </div>
      </div>

      {currentUser ? (
        <div className='user-options'>
          <span className='welcome-message'>
            {currentUser.nombre} {currentUser.apellido}
          </span>
          <button className='logout_b' onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <Link to='/sesion'>
          <button className='sesion_b'>Iniciar Sesión</button>
        </Link>
      )}
    </div>
  );
};
