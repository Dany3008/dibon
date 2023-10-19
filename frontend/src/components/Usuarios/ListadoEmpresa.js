import React, {useState} from "react";
import CrearUsuarios from "../Auth/CrearUsuarios";
export const ListadoEmpresa = (formEmpresa) =>
{
  const[formEmpresa, setFormEmpresa] = useState(obtenerRegistroEmpresa)
  const handleChangeEmpresa = (e) =>
  {
   setFormEmpresa(
     {
     ...formEmpresa, [e.target.name]:e.target.value,
    
   });
  };

    const obtenerRegistroEmpresa = () =>
    {
     var datosEmpresa = localStorage.getItem("formEmpresa")
     if(datosEmpresa)
     {
       return JSON.parse(datosEmpresa);
       
         } else{
           return[];
       }
     }
       
    

  return (
    <div>
      <h2>Informacion de la Empresa</h2>
      <CrearUsuarios onUsuarioCreado={handleChangeEmpresa}/>
 
      <h3>Informacion de la Empresa</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Razon Social</th>
                <th>Nit</th>
                <th>Actividad Comercial</th>
            </tr>
        </thead>
        <tbody>
            {
              formEmpresa.map((x,index) =>(
                <tr key={index}>
                 <th>{index+1}</th>
                 <td>{x.nombreCompañia}</td> , , 
                 <td>{x.razonSocial}</td>
                 <td>{x.nit}</td>
                 <td>{x.actividadComercial}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  );
        }
        
    




export default ListadoEmpresa