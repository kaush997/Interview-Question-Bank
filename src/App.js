import { Routes, Route } from 'react-router-dom';

import './App.css';
import Python from './pages/Python';
import Java from './pages/Java';
import PHP from './pages/PHP';
import SQL from './pages/SQL';
import Home from './pages/Home';


function App() {
  return (
    <div className="container-fluid">
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Python" element={<Python/>}/>
        <Route path="/Java" element={<Java/>}/>
        <Route path="/PHP"element={<PHP/>}/>
        <Route path='/SQL' element={<SQL/>}/>
        
      
      </Routes>
    </div>
  );
}

export default App;
