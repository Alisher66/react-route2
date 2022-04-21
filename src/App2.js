import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages2/Home';
import Users from './pages2/Users';
import Layout from './pages2/Layout';
import Alex from './pages2/Alex';
import Ben from './pages2/Ben';
import Dima from './pages2/Dima';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/alex" element={<Alex />} />
          <Route path='users/ben' element={<Ben />} />
          <Route path='users/alex/dima' element={<Dima />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
