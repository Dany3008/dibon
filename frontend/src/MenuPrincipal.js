import React from "react";
import {NavLink } from "react-router-dom";
import {PaginaPrincipal} from './PaginaPrincipal'
import {GestionUsuarios} from './components/Usuarios/GestionUsuarios'



export const MenuPrincipal=(props)=>
{
    function cerrarSesion()
    {
        document.getElementById("caja_menu").style.display ="none";
        document.getElementById("form_login").style.display ="none";
        document.getElementById("txtusu").value ="";
        document.getElementById("txtpas").value ="";
        document.getElementById("txtusu").focus();
    }
    return (
   
        <div className="contenedor-menu" id="caja_menu">
            <div className="opciones-menu">
            <ul>
                <li>
                    <NavLink To="./GestionUsuarios.js" className={"navlink"}>Gestion de Usuario</NavLink>
                </li>
                <li>
                <NavLink To=""className={"navlink"}>Manuales</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>Gestión de Permisos</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>Actividades de Mantenimiento</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>Informes e Indicadores</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>Gestion de OT</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>Planificador</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>Registro de KM/MM</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink"}>inventario de Almacen</NavLink>
                </li>
                <li>
                    <NavLink To=""className={"navlink" }onClick={cerrarSesion}>Cerrar Sesion</NavLink>
                </li>
            </ul>
            </div>
        </div>

    )
}
export default MenuPrincipal
