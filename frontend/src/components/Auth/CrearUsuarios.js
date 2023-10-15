import React, {useState} from "react";

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
    const [nombreOperador, setNombreOperador] = useState('');
    const [tipoOperador, setTipoOperador] = useState('');
    const [tipoDocumentoOperador, setTipoDocumentoOperador] = useState('');
    const [numeroDocumentoOperador, setNumeroDocumentoOperador] = useState('');
    const [valorSalarialOperador, setValorSalarialOperador] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes procesar los datos del formulario, por ejemplo, enviarlos a un servidor.
        console.log('Datos del formulario:', { nombreCompañia, razonSocial, nit, actividadComercial, 
          nombre, tipoDocumento, numeroDocumento, numeroContacto, correoEmpresarial, 
          nombreEspecialista, tipoEspecialista, tipoDocumentoEspecialista, numeroDocumentoEspecialista, valorSalarial, 
          nombreOperador, tipoOperador, tipoDocumentoOperador, numeroDocumentoOperador, valorSalarialOperador});
      };
    return(
        <div className="contenedor-formulario">
        <h2>Portal de Creacion de Usuario</h2>
        <div className="formulario-compañia">
        <h3>Informacion de la Compañia</h3>
        <form onSubmit={handleSubmit}>
          <div className="nombre-compañia">
            <label htmlFor="nombreCompañia">Nombre de la Compañia:</label>
            <input
              type="text"
              id="nombreCompañia"
              value={nombreCompañia}
              onChange={(e) => setCompañia(e.target.value)}
              required
            />
          </div>
          <div className="razon-social">
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
          <div className="nit">
            <label htmlFor="nit">Nit:</label>
            <input
              type="number"
              id="nit"
              value={nit}
              onChange={(e) => setNit(e.target.value)}
              required
            />
          </div>
          <div className="actividad-comercial">
            <label htmlFor="actividadComercial">Actividad Comercial:</label>
            <input
              type="text"
              id="actividadComercial"
              value={actividadComercial}
              onChange={(e) => setComercial(e.target.value)}
              required
            />
          </div>
          <button className="boton-compañia" type="submit">Crear Compañia</button>
        </form>
        </div>
        <div className="formulario-representante">
        <h3>Informacion del Representante Legal</h3>
        <form onSubmit={handleSubmit}>
          <div className="nombre-representante">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="tipo-documento">
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
          <div className="cedeula-representante">
            <label htmlFor="numeroDocumento">Número de Documento:</label>
            <input
              type="text"
              id="numeroDocumento"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              required
            />
          </div>
          <div className="numero-contacto">
            <label htmlFor="numeroContacto">Número de Contacto:</label>
            <input
              type="text"
              id="numeroContacto"
              value={numeroContacto}
              onChange={(e) => setNumeroContacto(e.target.value)}
              required
            />
          </div>
          <div className="correo-empresarial">
            <label htmlFor="correoEmpresarial">Correo Empresarial:</label>
            <input
              type="email"
              id="correoEmpresarial"
              value={correoEmpresarial}
              onChange={(e) => setCorreoEmpresarial(e.target.value)}
              required
            />
          </div>
          <button className="boton-representante" type="submit">Crear Representante Legal</button>
        </form>
        </div>
        <div className="formulario-especialista">
        <h3>Informacion del especialista</h3>
        <form onSubmit={handleSubmit}>
          <div className="nombre-especialista">
            <label htmlFor="nombreEspecialista">Nombre de la Compañia:</label>
            <input
              type="text"
              id="nombreEspecialista" 
              value={nombreEspecialista}
              onChange={(e) => setNombreEspecialista(e.target.value)}
              required
            />
          </div>
          <div className="tipo-especialista"> 
            <label htmlFor="tipoEspecialistal">Tipo de Especialista:</label>
            <input
            text="text"
              id="tipoEspecialista"
              value={tipoEspecialista}
              onChange={(e) => setTipoEspecialista(e.target.value)}
              required
            >
            </input>
          </div>
          <div className="tipo-documento-operador"> 
            <label htmlFor="tipoDocumentoOperador">Tipo de Documento:</label>
            <select
              id="tipoDocumentoOperador"
              value={tipoDocumentoOperador}
              onChange={(e) => setTipoDocumentoOperador(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet de Extranjería">Carnet de Extranjería</option>
            </select>
          </div>
          <div className="numero-documento-especialista"> 
            <label htmlFor="numeroDocumentoEspecialista">N° de Documento:</label>
            <input
              type="number"
              id="numeroDocumentoEspecialista"
              value={numeroDocumentoEspecialista}
              onChange={(e) => setNumeroDocumentoEspecialista(e.target.value)}
              required
            />
          </div>
          <div className="valor-salarial">
            <label htmlFor="valorSalarial">Valor Salarial x Hora:</label>
            <input
              type="number"
              id="valorSalarial"
              value={valorSalarial}
              onChange={(e) => setValorSalarial(e.target.value)}
              required
            />
          </div>
          <button className="boton-especialista" type="submit">Crear Especialista</button>
        </form>
        </div>
        <div className="formulario-operador"> 
        <h3>Informacion del Operador</h3>
        <form onSubmit={handleSubmit}>
          <div className="nombre-operador">
            <label htmlFor="nombreOperador">Nombre del Operador:</label>
            <input
              type="text"
              id="nombreOperador" 
              value={nombreOperador}
              onChange={(e) => setNombreOperador(e.target.value)}
              required
            />
          </div>
          <div className="tipo-operador"> 
            <label htmlFor="tipoOperador">Tipo de Especialista:</label>
            <input
            text="text"
              id="tipoOperador"
              value={tipoOperador}
              onChange={(e) => setTipoOperador(e.target.value)}
              required
            >
            </input>
          </div>
          <div className="tipo-documento-especialista"> 
            <label htmlFor="tipoDocumentoEspecialista">Tipo de Documento:</label>
            <select
              id="tipoDocumentoEspecialista"
              value={tipoDocumentoEspecialista}
              onChange={(e) => setTipoDocumentoEspecialista(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet de Extranjería">Carnet de Extranjería</option>
            </select>
          </div>
          <div className="numero-documento-operador"> , 
            <label htmlFor="numeroDocumentoOperador">N° de Documento:</label>
            <input
              type="number"
              id="numeroDocumentoOperador"
              value={numeroDocumentoOperador}
              onChange={(e) => setNumeroDocumentoOperador(e.target.value)}
              required
            />
          </div>
          <div className="valor-salarial-operador"> , 
            <label htmlFor="valorSalarialOperador">Valor Salarial x Hora:</label>
            <input
              type="number"
              id="valorSalarialOperador"
              value={valorSalarialOperador}
              onChange={(e) => setValorSalarialOperador(e.target.value)}
              required
            />
          </div>
          <button className="boton-operador" type="submit">Crear Operador</button>
        </form>
        <button className="boton-guardar" type="submit">Guardar Usuario</button>
        </div>
      </div>
    )
}
export default CrearUsuarios
