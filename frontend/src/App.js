import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import PaginaPrincipal from "./PaginaPrincipal";
import MenuPrincipal from "./MenuPrincipal";
import GestionUsuarios from "./components/Usuarios/GestionUsuarios";
import CrearUsuarios from "./components/Auth/CrearUsuarios";

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/" element={<PaginaPrincipal/>}/>
        <Route exact path="/" element={<MenuPrincipal/>}/>
        <Route exact path="" element={<GestionUsuarios/>}/>
        <Route exact path="/" element={<CrearUsuarios/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;









