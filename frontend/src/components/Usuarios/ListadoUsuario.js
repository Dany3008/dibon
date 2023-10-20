import React, {useState} from "react";
import CrearUsuario from './CrearUsuario';
export const ListadoUsuario = (registroUsuario) =>
{
  const obtenerRegistroUsuario = () => {
    const dataUsuario = localStorage.getItem('registroUsuario');
    if (dataUsuario) {
      return JSON.parse(dataUsuario);
    } else {
      return [];
    }
  };
  const [registroUsuario, setRegistroUsuario] = useState(obtenerRegistroUsuario);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistroUsuario({
      ...registroUsuario,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Informacion de la Empresa</h2>
      <CrearUsuario onUsuarioCreado={handleChange}/>
 
      <h3>Informacion de la Empresa</h3>
      <table>
        <thead>
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo de Documento</th>  ,
                <th>Numero de Documento</th>
                <th>Fecha de Expedicion</th>
                <th>Lugar de Expedicion</th>
                <th>Tipo de Usuario</th>
                <th>Tipo de Cliente</th>  ,
                <th>Tipo de Sub Usuario</th>
                <th>Contraseña</th>
            </tr>
        </thead>
        <tbody>
            {
              registroUsuario.map((x,index) =>(
                <tr key={index}>
                 <th>{index+1}</th>
                 <td>{x.nombres}</td> , , 
                 <td>{x.apellidos}</td>
                 <td>{x.tipoDocumento}</td>
                 <td>{x.numeroDocumento}</td>
                 <td>{x.fechaExpedicion}</td>
                 <td>{x.lugarExpedicion}</td>
                 <td>{x.tipoUsuario}</td>
                 <td>{x.tipoCliente}</td>
                 <td>{x.contrasena}</td>
                 <td>{x.subUsuario}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  );
        }
        
    




export default ListadoUsuario