import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Usuarios/Login';
import PaginaPrincipal from "./PaginaPrincipal";
import MenuPrincipal from "./MenuPrincipal";
import GestionUsuarios from "./components/Usuarios/GestionUsuarios";
import CrearEmpresa from "./components/Usuarios/CrearEmpresa";
import CrearUsuario from "./components/Usuarios/CrearUsuario";
import Listado from "./components/Usuarios/Listado";

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/" element={<PaginaPrincipal/>}/>
        <Route exact path="/" element={<MenuPrincipal/>}/>
        <Route exact path="" element={<GestionUsuarios/>}/>
        <Route exact path="/" element={<CrearUsuario/>}/>
        <Route exact path="/" element={<CrearEmpresa/>}/>
        <Route exact path="/" element={<Listado/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;










