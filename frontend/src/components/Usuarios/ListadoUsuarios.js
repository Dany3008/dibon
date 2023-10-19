import React, {useState} from "react";
import ListadoEmpresa from "./ListadoEmpresa";
import ListadoRepresentante from "./ListadoRepresentante";
import ListadoEspecialista from "./ListadoEspecialista";
import ListadoOperador from "./ListadoOperador";
export const ListadoUsuarios = () =>
{
    const [activeTablaUsuarios, setActiveTablaUsuarios] = useState(<ListadoEmpresa/>); 

    const handleTabClick = (tablaUsuarios) => {
      setActiveTablaUsuarios(tablaUsuarios);
    };
  
    return (
      <div>
        <div className="tab-options">
          <button onClick={() => handleTabClick(<ListadoEmpresa/>)}>Empresas</button>
          <button onClick={() => handleTabClick(<ListadoRepresentante/>)}>Representante Legal</button>
          <button onClick={() => handleTabClick(<ListadoEspecialista/>)}>Especialista</button>
          <button onClick={() => handleTabClick(<ListadoOperador/>)}>Operador</button>
        </div>
  
        <div className="tab-content">
          {tablaUsuarios === <ListadoEmpresa/> && <p>Informacion de la Empresa</p>}
          {tablaUsuarios === <ListadoRepresentante/> && <p>Informacion del Representante Legal</p>}
          {tablaUsuarios === <ListadoEspecialista/> && <p>Contenido del Especialista</p>}
          {tablaUsuarios === <ListadoOperador/> && <p>Contenido del Operador</p>}
        </div>
      </div>
    );
 
  
  }



export default ListadoUsuarios
