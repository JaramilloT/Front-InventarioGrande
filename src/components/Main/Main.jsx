import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import crear from '../../assets/crear.png';
import inventario from '../../assets/inventario.png';
import './Main.css';

export const Main = () => {
  return (
    <div className="Main">
      <div className="task">

        {/* Sección Crear */}
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className="main-img" src={crear} alt="Crear" />
          <div className="descrip">
            <div className="parraf">
              <p>Gestione la creación de nuevos registros fácilmente.</p>
            </div>
            <Link to="/creation">
              <button className="btn-action">Crear</button>
            </Link>
          </div>
        </motion.div>

        {/* Sección Inventario */}
        <motion.div
          className="card"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className="main-img" src={inventario} alt="Inventario" />
          <div className="descrip">
            <div className="parraf">
              <p>Consulte el inventario disponible con un solo clic.</p>
            </div>
            <Link to="/details">
              <button className="btn-action">Inventario</button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
