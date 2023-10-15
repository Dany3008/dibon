import React, {useState, useEffect} from "react";

export const CrearUsuarios = () =>
{
    const [nombreCompañia, setCompañia] = useState('');
    const [razonSocial, setRazon] = useState('');
    const [nit, setNit] = useState('');
    const [actividadComercial, setComercial] = useState('');
    const[nombre, setNombre] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [numeroContacto, setNumeroContacto] = useState('');
    const [correoEmpresarial, setCorreoEmpresarial] = useState('')
    const [nombreEspecialista, setNombreEspecialista] = useState('');
    const [tipoEspecialista, setTipoEspecialista] = useState('');
    const [tipoDocumentoEspecialista, setTipoDocumentoEspecialista] = useState('');
    const [numeroDocumentoEspecialista, setNumeroDocumentoEspecialista] = useState('');
    const [valorSalarial, setValorSalarial] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes procesar los datos del formulario, por ejemplo, enviarlos a un servidor.
        console.log('Datos del formulario:', { nombre, tipoDocumento, numeroDocumento, numeroContacto, correoEmpresarial });
      };
    return(
        <div>
        <h2>Portal de Creacion de Usuario</h2>
        <h3>Informacion de la Compañia</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombreCompañia">Nombre de la Compañia:</label>
            <input
              type="text"
              id="nombreCompañia"
              value={nombreCompañia}
              onChange={(e) => setCompañia(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="razonSocial">Razon Social:</label>
            <input
            text="text"
              id="razonSocial"
              value={razonSocial}
              onChange={(e) => setRazon(e.target.value)}
              required
            >
            </input>
          </div>
          <div>
            <label htmlFor="nit">Nit:</label>
            <input
              type="number"
              id="nit"
              value={nit}
              onChange={(e) => setNit(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="actividadComercial">Actividad Comercial:</label>
            <input
              type="text"
              id="actividadComercial"
              value={actividadComercial}
              onChange={(e) => setComercial(e.target.value)}
              required
            />
          </div>
          <button type="submit">Crear Compañia</button>
        </form>
        <h3>Informacion del Representante Legal</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            <select
              id="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet de Extranjería">Carnet de Extranjería</option>
            </select>
          </div>
          <div>
            <label htmlFor="numeroDocumento">Número de Documento:</label>
            <input
              type="text"
              id="numeroDocumento"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="numeroContacto">Número de Contacto:</label>
            <input
              type="text"
              id="numeroContacto"
              value={numeroContacto}
              onChange={(e) => setNumeroContacto(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="correoEmpresarial">Correo Empresarial:</label>
            <input
              type="email"
              id="correoEmpresarial"
              value={correoEmpresarial}
              onChange={(e) => setCorreoEmpresarial(e.target.value)}
              required
            />
          </div>
          <button type="submit">Crear Representante Legal</button>
        </form>
      </div>
    )
}
export default CrearUsuarios