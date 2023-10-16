import React, {useState} from "react";
import CrearUsuarios from "../Auth/CrearUsuarios";
export const ListadoUsuarios = () =>
{
    const [tableDataEmpresa, setTableDataEmpresa] = useState([]);

    const handleUsuarioCreado = (formData) => {
        // Agregar formData a la tabla en ListadoUsuarios
        setTableDataEmpresa([...tableDataEmpresa, formData]);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <CrearUsuarios onUsuarioCreado={handleUsuarioCreado}/>
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
            <tr>

            </tr>
        </tbody>
      </table>
      <h3>Informacion del Representante Legal</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de Documento</th>
                <th>N° de Documento</th>
                <th>N° de Contacto</th>
                <th>Correo Empresarial</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            </tr>
        </tbody>
      </table>
      <h3>Informacion del Representante Legal</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de Documento</th>
                <th>N° de Documento</th>
                <th>N° de Contacto</th>
                <th>Correo Empresarial</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            </tr>
        </tbody>
      </table>
      <h3>Informacion del Especialista</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de Especialista</th>
                <th>Tipo de Documento</th>
                <th>N° de Documento</th>
                <th>Valor Salarial x Hora</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            </tr>
        </tbody>
      </table>
      <h3>Informacion del Operador</h3>
      <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de Operador</th>
                <th>Tipo de Documento</th>
                <th>N° de Documento</th>
                <th>Valor Salarial x Hora</th>
            </tr>
        </thead>
        <tbody>
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  );
  }
}




export default ListadoUsuarios
