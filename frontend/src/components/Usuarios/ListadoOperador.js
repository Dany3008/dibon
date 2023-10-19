import React, {useState} from "react";
import CrearUsuarios from "../Auth/CrearUsuarios";
const ListadoOperador = () => {
    const obtenerRegistroOperador = () =>
   {
    var datosOperador = localStorage.getItem("formOperador")
    if(datosOperador)
    {
      return JSON.parse(datosOperador);
      
        } else{
          return[];
      }
    }
    const[formOperador, setFormOperador]= useState(obtenerRegistroOperador)
   const handleChangeOperador = (e) =>
   {
    setFormOperador(
      {
      ...formOperador, [e.target.name]:e.target.value,
     
    
    });
   };
   return (
    <div>
      <h2>Informacion del Operador</h2>
      <CrearUsuarios onUsuarioCreado={handleChangeOperador}/>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de Operador</th>
                <th>Tipo de Documento</th>
                <th>N° de Documento</th>
                <th>Valor Salarial por Hora</th>
            </tr>
        </thead>
        <tbody>
            {
              formOperador.map((x,index) =>(
                <tr key={index}>
                 <th>{index+1}</th>
                 <td>{x.nombreOperador}</td> , , 
                 <td>{x.tipoOperador}</td>
                 <td>{x.tipoDocumentoOperador}</td>
                 <td>{x.numeroDocumentoOperador}</td>
                 <td>{x.valorSalarialOperador}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  );
}

export default ListadoOperador
