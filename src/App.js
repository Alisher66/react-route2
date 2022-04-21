import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='Login' element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
