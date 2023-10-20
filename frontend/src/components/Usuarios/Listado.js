import React, {useState} from "react";
import ListadoEmpresa from "./ListadoEmpresa";
import ListadoUsuario from "./ListadoUsuario";

export const Listado = () =>
{
    const [activeTablaUsuarios, setActiveTablaUsuarios] = useState(<ListadoEmpresa/>); 

    const handleTabClick = (tablaUsuarios) => {
      setActiveTablaUsuarios(tablaUsuarios);
    };
  
    return (
      <div>
        <div className="tab-options">
          <button onClick={() => handleTabClick(<ListadoEmpresa/>)}>Empresas</button>
          <button onClick={() => handleTabClick(<ListadoUsuario/>)}>Usuarios</button>
        </div>
  
        <div className="tab-content">
          {tablaUsuarios === <ListadoEmpresa/> && <p>Informacion de la Empresa</p>}
          {tablaUsuarios === <ListadoUsuario/> && <p>Informacion del Usuario</p>}
        </div>
      </div>
    );
 
  
  }



export default Listado