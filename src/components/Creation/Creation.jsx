import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFromContext } from '../../context/FromContext';
import './Creation.css';
import previous from '../../assets/previous.png';
import axios from 'axios';

export const Creation = () => {
  const navigate = useNavigate();
  const { currentUser } = useFromContext();

  const [dependencia, setDependencia] = useState('');
  const [nombreA, setNombreA] = useState('');
  const [codigoE, setCodigoE] = useState('');
  const [responsable, setResponsable] = useState('');
  const [cargo, setCargo] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSumbit = async (e) => {
    e.preventDefault();
    
    if (!nombreA || !codigoE || !responsable || !cargo) {
      setMessage('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const payload = { dependencia, activo: nombreA, codigo: codigoE, responsable, cargo };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/from`,
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.status === 201) {
        setMessage('Registro exitoso');
        navigate('/home');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error al registrar');
    }

  };
  if (!currentUser) {
    return <p>Acceso denegado. Por favor, inicia sesión.</p>;
  } 
  return (
    <div className="form">
      <div className="container_form">
        <div className="form-back">
          <Link to="/home">
            <img className="form-img" src={previous} alt="" />
          </Link>
          <p className="form-p"><strong>Volver</strong></p>
        </div>
        <h1>Formulario</h1>
        <form onSubmit={handleSumbit}>
          <div>
            <p>Dependencia</p>
            <select value={dependencia} onChange={(e) => setDependencia(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="Acueducto">Acueducto</option>
              {/* Otras opciones */}
            </select>
            <p>Nombre del activo</p>
            <input
              type="text"
              placeholder="Nombre del bien mueble"
              value={nombreA}
              onChange={(e) => setNombreA(e.target.value)}
            />
            <p>Código EMCA</p>
            <input
              type="text"
              placeholder="Código EMCA"
              value={codigoE}
              onChange={(e) => setCodigoE(e.target.value)}
            />
            <p>Responsable</p>
            <input
              type="text"
              placeholder="Responsable"
              value={responsable}
              onChange={(e) => setResponsable(e.target.value)}
            />
            <p>Cargo</p>
            <input
              type="text"
              placeholder="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
            <button type="submit">Crear</button>
            {message && <p className="message">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
  
};
