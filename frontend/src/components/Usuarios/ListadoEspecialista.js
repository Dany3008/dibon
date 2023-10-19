import React, {useState} from "react";
import CrearUsuarios from '../Auth/CrearUsuarios'

const ListadoEspecialista = (formEspecialista) => {
    const obtenerRegistroEspecialista = () =>
    {
     var datosEspecialista = localStorage.getItem("formEspecialista")
     if(datosEspecialista)
     {
       return JSON.parse(datosEspecialista);
       
         } else{
           return[];
       }
     }
     const[formEspecialista, setFormEspecialista] = useState(obtenerRegistroEspecialista)
     const handleChangeEspecialista = (e) =>
     {
      setFormEspecialista(
        {
        ...formEspecialista, [e.target.name]:e.target.value,
       
      
      });
     };


     return (
        <div>
          <h2>Informacion del Especialista</h2>
          <CrearUsuarios onUsuarioCreado={handleChangeEspecialista}/>
          <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo de Especialista</th>
                    <th>Tipo de Documento</th>
                    <th>N° de Documento</th>
                    <th>Valor Salarial por Hora</th>
                </tr>
            </thead>
            <tbody>
                {
                  formEspecialista.map((x,index) =>(
                    <tr key={index}>
                     <th>{index+1}</th>
                     <td>{x.nombreEspecialista}</td> , , 
                     <td>{x.tipoEspecialista}</td>
                     <td>{x.tipoDocumento}</td>
                     <td>{x.numeroDocumentoEspecialista}</td>
                     <td>{x.valorSalarialEspecialista}</td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
          
        </div>
      );
}

export default ListadoEspecialista
