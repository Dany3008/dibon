import React, {} from "react";
import {CrearUsuario} from './CrearUsuario'
import {CrearEmpresa} from './CrearEmpresa'
import {Listado} from './Listado'
export const GestionUsuarios=()=>
{
    
    return(
        <div className="contenedor-funciones">
            
            <ul>
                <li>
                    <button onClick={<CrearUsuario/>}></button>
                </li>
                <li>
                    <button onClick={<CrearEmpresa/>}>Crear Empresa</button>
                </li>
                <li>
                <button onClick={<Listado/>}>Lista de Usuarios</button>
                </li>
               
            </ul>
          
            </div>

    )
}
export default GestionUsuarios
