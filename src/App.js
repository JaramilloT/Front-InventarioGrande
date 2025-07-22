import { HashRouter, Route, Routes } from 'react-router-dom';
import { Sesion } from './components/Sesion/Sesion';
import { CreationC } from './components/CreationC/CreationC';
import { Inventory } from './components/Inventory/Inventory';
import { Creation } from './components/Creation/Creation';
import { Details } from './components/Details/Details';
import { Home } from './components/pages/Home/Home';
import { PrivateRoute } from './components/PrivateRoute'; // <-- Importa PrivateRoute

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route index path='/' element={<Sesion />} />
        <Route path='/sesion' element={<Sesion />} />
        <Route path='/register' element={<CreationC />} />

        {/* Rutas protegidas */}
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/creation' element={<PrivateRoute><Creation /></PrivateRoute>} />
        <Route path='/inventory' element={<PrivateRoute><Inventory /></PrivateRoute>} />
        <Route path='/details' element={<PrivateRoute><Details /></PrivateRoute>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
