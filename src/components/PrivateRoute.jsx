import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFromContext } from '../context/FromContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useFromContext();

  if (!currentUser) {
    return <Navigate to="/sesion" replace />; // Redirige a la página de login
  }

  return children; // Si hay usuario, muestra el componente protegido
};
