import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import {CrearUsuarios} from '../Auth/CrearUsuarios'
import {ListadoUsuarios} from './ListadoUsuarios'

export const GestionUsuarios=(props)=>
{
    const[reg, setReg] = useState("");
    const[lis, setLis] = useState("");
    
    function op_registrar()
    {
        setReg("1");
        setLis("0")
    }
    function op_listar()
    {
        setReg("0");
        setLis("1")
    }
    return(
        <div className="contenedor-funciones">
            
            <ul>
                <li>
                    <NavLink To="./CrearUsuarios.js"className={"navlink text-style"} onClick={op_registrar} >Crear Usuario</NavLink>
                </li>
                <li>
                <NavLink To="./ListadoUsuarios.js"className={"navlink text-style"} onClick={op_listar}>Lista de Usuarios</NavLink>
                </li>
               
            </ul>
            {reg === "1" && <CrearUsuarios/>}
            {lis === "1" && <ListadoUsuarios/>}
            </div>

    )
}
export default GestionUsuarios