import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFromContext } from '../../context/FromContext';
import './Details.css';
import { Nav } from '../Nav/Nav';

export const Details = () => {
  const { currentUser } = useFromContext();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/from`);
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        setMessage('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = items.filter(
      (item) =>
        item.codigo.toLowerCase().includes(lowercasedQuery) ||
        item.responsable.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedItem({ ...filteredItems[index] });
  };

  const handleSave = async () => {
    try {
      const { id_inventario, ...dataToUpdate } = editedItem;

      // Enviar la actualización al backend
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/from/${id_inventario}`,
        dataToUpdate
      );

      // Actualizar la lista completa
      const updatedItems = items.map((item) =>
        item.id_inventario === id_inventario ? response.data : item
      );
      setItems(updatedItems);
      setFilteredItems(updatedItems);

      setEditedItem({});
      setEditingIndex(null);
      setMessage('Registro actualizado correctamente.');

      // Recargar la página después de guardar
      setTimeout(() => {
        window.location.reload();
      }, 10);
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      setMessage('Error al actualizar el registro.');
    }
  };

  const handleDeleteForm = async (id_inventario) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/from/${id_inventario}`);
        const updatedItems = items.filter((item) => item.id_inventario !== id_inventario);
        setItems(updatedItems);
        setFilteredItems(updatedItems);
        setMessage('Registro eliminado correctamente.');

        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error('Error al eliminar el registro:', error);
        setMessage('Error al eliminar el registro.');
      }
    }
  };

  const handleReport = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/excel/download`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();

      setMessage('Reporte descargado correctamente.');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error al descargar el registro:', error);
      setMessage('Error al descargar el registro.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!currentUser) {
    return <p>Acceso denegado. Por favor, inicia sesión.</p>;
  }

  return (
    <div className="details-container">
      <Nav />
      <h1>Detalles de los Registros</h1>
      <button className="report" onClick={handleReport}>
        Descargar reporte
      </button>

      <input
        type="text"
        className="search-bar"
        placeholder="Buscar por código o responsable"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <>
          {message && <p className="message">{message}</p>}
          {filteredItems.length > 0 ? (
            <table className="details-table">
              <thead>
                <tr>
                  <th>Dependencia</th>
                  <th>Nombre del Activo</th>
                  <th>Código EMCA</th>
                  <th>Responsable</th>
                  <th>Cargo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr key={item.id_inventario}>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="dependencia"
                          value={editedItem.dependencia || ''}
                          onChange={handleChange}
                        />
                      ) : (
                        item.dependencia
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="activo"
                          value={editedItem.activo || ''}
                          onChange={handleChange}
                        />
                      ) : (
                        item.activo
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="codigo"
                          value={editedItem.codigo || ''}
                          onChange={handleChange}
                        />
                      ) : (
                        item.codigo
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="responsable"
                          value={editedItem.responsable || ''}
                          onChange={handleChange}
                        />
                      ) : (
                        item.responsable
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="cargo"
                          value={editedItem.cargo || ''}
                          onChange={handleChange}
                        />
                      ) : (
                        item.cargo
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <>
                          <button className="save-btn" onClick={handleSave}>
                            Guardar
                          </button>
                          <button
                            className="cancel-btn"
                            onClick={() => setEditingIndex(null)}
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(index)}
                          >
                            Editar
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteForm(item.id_inventario)}
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay registros disponibles.</p>
          )}
        </>
      )}
    </div>
  );
};
