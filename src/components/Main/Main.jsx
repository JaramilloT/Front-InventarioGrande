import React from 'react'
import crear from '../../assets/crear.png'
import inventario from '../../assets/inventario.png'
import './Main.css'
export const Main = () => {
  return (
    <div className='Main'>
      <div className='task'>

      <div className='creation'>

      <img className='main-img' src={crear} alt="creation" />
      <div className='descrip'>
      <div className='parraf'>
      <p>permite a los usuarios agregar nuevos 
        productos o bienes al sistema de inventario de 
        manera rápida y organizada. Los usuarios pueden 
        ingresar detalles como el nombre del producto,
        la cantidad disponible, el costo de adquisición, 
        el precio de venta, y cualquier otra información relevante, 
        como la ubicación o categoría del ítem. dar
        Crear
        </p>
      <br />
      </div>
      <button className='cre'><a className='btn' href="crear"><p className='pr'>Crear</p></a></button>
    
      </div>

      </div>
      
      <div className='spa'></div>


      <div className='inven'>

    <img className='main-img' src={inventario} alt="creation" />
    <div className='descrip'>

    <div className='parraf'>
      <p>El apartado de inventario permite a los 
        usuarios gestionar todos los productos y bienes 
        disponibles en el sistema. Al acceder, se pueden 
        visualizar, agregar, editar o eliminar productos, 
        verificar el stock disponible, consultar precios y organizar el inventario según categorías o ubicaciones, 
        facilitando una administración eficiente y ordenada.</p>
      <br />
      </div>

    <button className='inventary'><a className='btn' href="./inventario"><p className='pr'>Inventario</p></a></button>
    

    </div>
      </div>
      </div>

    </div>
  )
}
