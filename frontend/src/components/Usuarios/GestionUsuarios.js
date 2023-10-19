import React, {} from "react";
import {CrearUsuarios} from '../Auth/CrearUsuarios'
import {ListadoUsuarios} from './ListadoUsuarios'

export const GestionUsuarios=()=>
{
    
    return(
        <div className="contenedor-funciones">
            
            <ul>
                <li>
                    <button onClick={<CrearUsuarios/>}>Crear Usuarios</button>
                </li>
                <li>
                <button onClick={<ListadoUsuarios/>}>Lista de Usuarios</button>
                </li>
               
            </ul>
          
            </div>

    )
}
export default GestionUsuarios
