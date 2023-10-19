import React, {useState} from "react";
import CrearUsuarios from "../Auth/CrearUsuarios";
export const ListadoRepresentante = (formRepresentante) =>
{
    const[formRepresentante, setFormRepresentante] = useState(obtenerRegistroRepresentante)
    const handleChangeRepresentante = (e) =>
    {
     setFormRepresentante(
       {
       ...formRepresentante, [e.target.name]:e.target.value,
      
     
     });
    };

  const obtenerRegistroRepresentante = () =>
  {
   var datosRepresentante = localStorage.getItem("formRepresentante")
   if(datosRepresentante)
   {
     return JSON.parse(datosRepresentante);
     
       } else{
         return[];
     }
   }
       
    

  return (
    <div>
      <h2>Informacion de la Empresa</h2>
      <CrearUsuarios onUsuarioCreado={handleChangeRepresentante}/>
 
      <h3>Informacion de la Empresa</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de Documento</th>
                <th>N° de Documento</th>
                <th>N° de Contacto</th>, , , , 
                <th>Actividad Comercial</th>
            </tr>
        </thead>
        <tbody>
            {
              formRepresentante.map((x,index) =>(
                <tr key={index}>
                 <th>{index+1}</th>
                 <td>{x.nombreRepresentante}</td> , , 
                 <td>{x.tipoDocumento}</td>
                 <td>{x.numeroDocumento}</td>
                 <td>{x.numeroContacto}</td>
                 <td>{x.correoEmpresarial}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  );
        }
        
    




export default ListadoRepresentante