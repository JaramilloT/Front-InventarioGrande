import React, {useState} from "react";
import fondo from '../../assets/fondo-emca.jpg'
import {Link, useNavigate} from 'react-router-dom'
import { useFromContext } from '../../context/FromContext';
import previous from '../../assets/previous.png'
import axios from 'axios';
import './CreationC.css'

export const CreationC = () =>{
  const navigate = useNavigate();
  const {addUsers} = useFromContext();
  const [nombre, setName] = useState('');
  const [apellido, setSurname] = useState('');
  const [correo, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !correo || !contraseña) {
      setMessage('Por favor, completa todos los campos obligatorios.');
      return;
    }
    if (!correo.includes('@gmail.com')) {
      setMessage('Por favor, ingrese un correo válido que contenga "@gmail.com"');
      return;
    }


    const formDatas = new FormData();
    formDatas.append('nombre', nombre);
    formDatas.append('nombre', apellido);
    

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, {
        nombre,
        apellido,
        correo,
        contraseña,
      
      }, {withCredentials: true});

      if (response.status === 201) {
        navigate('sesion');
        const newUser= {
          nombre,
          apellido,
        }
        addUsers(newUser)
      }
      setMessage(response.data.message); // Mostrar mensaje de éxito
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error al registrar el usuario.');
      }
    }
  };

	return(
		
		<div className="creations">

			<div className="img-cre">
			<img className='fondo-se' src={fondo} alt="" />
			</div>

			
			<div className='cp-cre'>
          <div className='return-cre'>
          <Link to='/sesion'>
          <img className='previous-cre' src={previous} alt="" />
          </Link>
      <p className='vol-cre'>Volver</p>    

          </div>
          <form onSubmit={handleSubmit}>

		  <div className='name'>
            
			<p className='ep'>Nombre</p>
			<input className='input' type="text" placeholder='Su nombre' value={nombre} onChange={(e) => setName(e.target.value)}/>
			
			</div>

			<div className='last-name'>
            
			<p className='ep'>Apellido</p>
			<input className='input' type="text" placeholder='Su Apellido' value={apellido} onChange={(e) => setSurname(e.target.value)}/>
			
			</div>

          <div className='emails'>
            
          <p className='ep-cre'>Correo</p>
          <input className='input' type="text" placeholder='example@gmail.com' value={correo} onChange={(e) => setEmail(e.target.value)}/>
          
          </div>

        <div className='passwords'>

          <p className='ep'>Contraseña</p>
            <input className='input' type="password"  placeholder='*********' value={contraseña} onChange={(e) => setPassword(e.target.value)}/>
        
        </div>

        <div className='class-cre'>
        <Link to='/sesion'>

            <button className='ci-cre' type="submit">Crear Cuenta</button>
        </Link>
        </div>
        {message && <p className="message">{message}</p>}
          </form>
      </div>
	</div>
	)
}

