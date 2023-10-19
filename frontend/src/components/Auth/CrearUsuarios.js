import React, {useState} from "react";

export const CrearUsuarios = (onUsuarioCreado) =>
{
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
 
   const[formEmpresa, setFormEmpresa] = useState(obtenerRegistroEmpresa)
   const handleChangeEmpresa = (e) =>
   {
    setFormEmpresa(
      {
      ...formEmpresa, [e.target.name]:e.target.value,
     
    });
   };
   const[formRepresentante, setFormRepresentante] = useState(obtenerRegistroRepresentante)
   const handleChangeRepresentante = (e) =>
   {
    setFormRepresentante(
      {
      ...formRepresentante, [e.target.name]:e.target.value,
     
    
    });
   };
   const[formEspecialista, setFormEspecialista] = useState(obtenerRegistroEspecialista)
   const handleChangeEspecialista = (e) =>
   {
    setFormEspecialista(
      {
      ...formEspecialista, [e.target.name]:e.target.value,
     
    
    });
   };
   const[formOperador, setFormOperador]= useState(obtenerRegistroOperador)
   const handleChangeOperador = (e) =>
   {
    setFormOperador(
      {
      ...formOperador, [e.target.name]:e.target.value,
     
    
    });
   };
   const GuardarEmpresa = (e) =>
   {
    e.preventDefault();
    var DataEmpresa = {nombreCompañia, razonSocial, nit, actividadComercial}
    setFormEmpresa [formEmpresa, DataEmpresa]
    limpiarFormularioEmpresa();
   }
   const limpiarFormularioEmpresa = () =>
     {
      setFormEmpresa("")
     } 
   const GuardarRepresentante = (e) =>
   {
    e.preventDefault();
    var DataRepresentante= {nombreRepresentante, tipoDocumento, numeroDocumento, numeroContacto, correoEmpresarial}
    setFormRepresentante[formRepresentante, DataRepresentante]
    limpiarFormularioRepresentante();
   }
   const limpiarFormularioRepresentante = () =>
   {
    setFormRepresentante("")
   } 
   const GuardarEspecialista = (e) =>
   {
    e.preventDefault();
    var DataEspecialista= {nombreEspecialista,tipoEspecialista, tipoDocumento, numeroDocumentoEspecialista, valorSalarialEspecialista}
    setFormEspecialista[formEspecialista, DataEspecialista]
    limpiarFormularioEspecialista();
   }
   
   const limpiarFormularioEspecialista = () =>
   {
    setFormEspecialista("")
   } 
   const GuardarOperador = (e) =>
   {
    e.preventDefault();
    var DataOperador= {nombreOperador,tipoOperador, tipoDocumentoOperador, numeroDocumentoOperador, valorSalarialOperador}
    setFormOperador[formOperador, DataOperador]
    limpiarFormularioOperador();
   }
   const limpiarFormularioOperador = () =>
   {
    setFormOperador("")
   } 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El Usuario ha sido creado")
        onUsuarioCreado(formDataEmpresa,formDataEspecialista,formDataRepresentante,formDataOperador);
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
              value={formEmpresa.nombreCompañia}
              onChange={handleChangeEmpresa}
              required
            />
          </div>
          <div className="razon-social">
            <label htmlFor="razonSocial">Razon Social:</label>
            <input
            text="text"
              id="razonSocial"
              value={formEmpresa.razonSocial}
              onChange={handleChangeEmpresa}
              required
            >
            </input>
          </div>
          <div className="nit">
            <label htmlFor="nit">Nit:</label>
            <input
              type="number"
              id="nit"
              value={formEmpresa.nit}
              onChange={handleChangeEmpresa}
              required
            />
          </div>
          <div className="actividad-comercial">
            <label htmlFor="actividadComercial">Actividad Comercial:</label>
            <input
              type="text"
              id="actividadComercial"
              value={formEmpresa.actividadComercial}
              onChange={handleChangeEmpresa}
              required
            />
          </div>
          <button className="boton-guardar-empresa" type="submit"onClick={GuardarEmpresa }>Guardar Empresa</button>
        </form>
        </div>
        <div className="formulario-representante">
        <h3>Informacion del Representante Legal</h3>
        <form onSubmit={handleSubmit}>
          <div className="nombre-representante">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombreRepresentante"
              value={formRepresentante.nombreRepresentante}
              onChange={handleChangeRepresentante}
              required
            />
          </div>
          <div className="tipo-documento">
            <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            <select
              id="tipoDocumento"
              value={formRepresentante.tipoDocumento}
              onChange={handleChangeRepresentante}
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
              type="number"
              id="numeroDocumento"
              value={formRepresentante.numeroDocumento}
              onChange={handleChangeRepresentante}
              required
            />
          </div>
          <div className="numero-contacto">
            <label htmlFor="numeroContacto">Número de Contacto:</label>
            <input
              type="number"
              id="numeroContacto"
              value={formRepresentante.numeroContacto}
              onChange={handleChangeRepresentante}
              required
            />
          </div>
          <div className="correo-empresarial">
            <label htmlFor="correoEmpresarial">Correo Empresarial:</label>
            <input
              type="email"
              id="correoEmpresarial"
              value={formRepresentante.correoEmpresarial}
              onChange={handleChangeRepresentante}
              required
            />
          </div>
          <button className="boton-guardar-representante" type="submit"onClick={GuardarRepresentante }>Guardar Representante</button>
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
              value={formEspecialista.nombreEspecialista}
              onChange={handleChangeEspecialista}
              required
            />
          </div>
          <div className="tipo-especialista"> 
            <label htmlFor="tipoEspecialistal">Tipo de Especialista:</label>
            <input
            text="text"
              id="tipoEspecialista"
              value={formEspecialista.tipoEspecialista}
              onChange={handleChangeEspecialista}
              required
            >
            </input>
          </div>
          <div className="tipo-documento-especialista"> 
            <label htmlFor="tipoDocumentoOperador">Tipo de Documento:</label>
            <select
              id="tipoDocumentoOperador"
              value={formEspecialista.tipoDocumentoOperador}
              onChange={handleChangeEspecialista}
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
              value={formEspecialista.numeroDocumentoEspecialista}
              onChange={handleChangeEspecialista}
              required
            />
          </div>
          <div className="valor-salarial">
            <label htmlFor="valorSalarial">Valor Salarial x Hora:</label>
            <input
              type="number"
              id="valorSalarialEspecialista"
              value={formEspecialista.valorSalarialEspecialista}
              onChange={handleChangeEspecialista}
              required
            />
          </div>
          <button className="boton-guardar-especialista" type="submit"onClick={GuardarEspecialista}>Guardar Especialista
          </button>
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
              value={formOperador.nombreOperador}
              onChange={handleChangeOperador}
              required
            />
          </div>
          <div className="tipo-operador"> 
            <label htmlFor="tipoOperador">Tipo de Operador:</label>
            <input
            text="text"
              id="tipoOperador"
              value={formOperador.tipoOperador}
              onChange={handleChangeOperador}
              required
            >
            </input>
          </div>
          <div className="tipo-documento-operador"> 
            <label htmlFor="tipoDocumentoOperador">Tipo de Documento:</label>
            <select
              id="tipoDocumentoOperador"
              value={formOperador.tipoDocumentoOperador}
              onChange={handleChangeOperador}
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
              value={formOperador.numeroDocumentoOperador}
              onChange={handleChangeOperador}
              required
            />
          </div>
          <div className="valor-salarial-operador"> , 
            <label htmlFor="valorSalarialOperador">Valor Salarial x Hora:</label>
            <input
              type="number"
              id="valorSalarialOperador"
              value={formOperador.valorSalarialOperador}
              onChange={handleChangeOperador}
              required
            />
          </div>
          <button className="boton-guardar-operador" type="submit"onClick={GuardarOperador}>Guardar Operador</button>
        </form>
        </div>
        <button className="boton-guardar" type="submit"onClick={handleSubmit }>Guardar Usuario</button>
      </div>
    )
}
export default CrearUsuarios
