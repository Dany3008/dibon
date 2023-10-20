import React, {useState} from "react";
import CrearEmpresa from "./CrearEmpresa";
export const ListadoEmpresa = (registroEmpresa) =>
{
  const obtenerRegistroEmpresa = () => {
    const dataEmpresa = localStorage.getItem('registroEmpresa');
    if (dataEmpresa) {
      return JSON.parse(dataEmpresa);
    } else {
      return [];
    }
  };
  
  const [registroEmpresa, setRegistroEmpresa] = useState(obtenerRegistroEmpresa);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistroEmpresa({
      ...registroEmpresa,
      [name]: value,
    });
  };
    
    
  return (
    <div>
      <h2>Informacion de la Empresa</h2>
      <CrearEmpresa onUsuarioCreado={handleChange}/>
 
      <h3>Informacion de la Empresa</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Razon Social</th>
                <th>Nit</th>
                <th>Actividad Comercial</th>
                <th>Representante Legal</th>
                <th>Tipo de Documento</th>  ,
                <th>Numero de Documento</th>
            </tr>
        </thead>
        <tbody>
            {
              registroEmpresa.map((x,index) =>(
                <tr key={index}>
                 <th>{index+1}</th>
                 <td>{x.nombreCompañia}</td> , , 
                 <td>{x.razonSocial}</td>
                 <td>{x.nit}</td>
                 <td>{x.actividadComercial}</td>
                 <td>{x.representanteLegal}</td>
                <td>{x.tipoDocumento}</td> , , 
               <td>{x.numeroDocumento}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  );
        }
        
    




export default ListadoEmpresa
