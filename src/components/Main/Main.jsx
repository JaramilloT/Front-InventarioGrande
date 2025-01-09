import React from 'react'
import crear from '../../assets/crear.png'
import inventario from '../../assets/inventario.png'
import './Main.css'
import {Link} from 'react-router-dom'

export const Main = () => {
  return (
    <div className='Main'>
      <div className='task'>

      <div className='creation'>

      <img className='main-img' src={crear} alt="creation" />
      <div className='descrip'>
      <div className='parraf'>
      <br />
      </div>

      <Link to='/creation
      '>
      <button className='cre'><a className='btn' href="crear"><p className='pr'>Crear</p></a></button>
      
      </Link>

    
      </div>

      </div>
      
      <div className='spa'></div>


      <div className='inven'>

    <img className='main-img' src={inventario} alt="creation" />
    <div className='descrip'>

    <div className='parraf'>
      
      <br />
      </div>
    <Link to='/details'>
    
    <button className='inventary'><a className='btn' href="./inventario"><p className='pr'>Inventario</p></a></button>
    </Link>
    

    </div>
      </div>
      </div>

    </div>
  )
}
