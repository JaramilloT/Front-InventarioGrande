import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fondo from '../../assets/fondo-emca.jpg';
import logo from '../../assets/Logo-Emca.jpeg'; 
import { useFromContext } from '../../context/FromContext';
import './Sesion.css';

export const Sesion = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user } = useFromContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

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

    setLoading(true);
    const result = await login(correo, contraseña);
    setLoading(false);

    if (result.success) {
      setMessage('Sesión iniciada exitosamente');
      navigate('/home');
    } else {
      setMessage(result.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="session">
      <div className="img-se">
        <img className="fondo-se" src={fondo} alt="Fondo login" />
      </div>

      <div className="cp">
        <form onSubmit={handleSubmit}>
          <div className="logo-container">
            <img src={logo} alt="Logo EMCA" className="logo-emca" />
            <h1 className="title">Iniciar Sesión</h1>
            <p className="sub-title">Sistema almacenador de las TICS</p>
          </div>

          <div className="email">
            <p className="ep">Ingresa tu correo:</p>
            <input
              className="input"
              type="email"
              placeholder="example@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="password">
            <p className="ep">Digita tu contraseña</p>
            <div className="password-input">
              <input
                className="input"
                type="password"
                placeholder="*********"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />

            </div>
          </div>

          <div className="class">
            <Link to="/register">
              <button type="button" className="ci secondary">Crear Cuenta</button>
            </Link>
            <div className="space" />
            <button className="ci" type="submit" disabled={loading}>
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>

          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};
