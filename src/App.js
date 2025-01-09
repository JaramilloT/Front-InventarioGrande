import { Home } from './components/pages/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Sesion } from './components/Sesion/Sesion';
import {CreationC} from './components/CreationC/CreationC';
import { Inventory } from './components/Inventory/Inventory';
import { Creation } from './components/Creation/Creation';
import { Details } from './components/Details/Details';


function App() {
  return (
    
      <HashRouter>
          <Routes>
            <Route index path='/' element={<Sesion/>}></Route>
            <Route path='/sesion' element={<Sesion/>}></Route>
            <Route path='/register' element={<CreationC/>}></Route>
            <Route path='/inventory' element={<Inventory/>}></Route>
            <Route path='/creation' element={<Creation/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
            <Route index path='/home' element={<Home/>}></Route>

          </Routes>
      </HashRouter>
   
  );
}

export default App;
