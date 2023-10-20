import React,{useState, useEffect} from 'react'

const CrearUsuario = () => {
    const obtenerRegistroUsuario = () => {
        const dataUsuario = localStorage.getItem('registroUsuario');
        if (dataUsuario) {
          return JSON.parse(dataUsuario);
        } else {
          return [];
        }
      };
      const [registroUsuario, setRegistroUsuario] = useState(obtenerRegistroUsuario);
      const [nombres, setNombres] = useState('');
      const [apellidos, setApellidos] = useState('');
      const [tipoDocumento, setTipoDocumento] = useState('');
      const [numeroDocumento, setNumeroDocumento] = useState('');
      const [fechaExpedicion, setfechaExpedicion] = useState('');
      const [lugarExpedicion, setlugarExpedicion] = useState('');
      const [tipoUsuario, settipoUsuario] = useState('');
      const [tipoCliente, settipoCliente] = useState('');
      const [subUsuario, setsubUsuario] = useState('');
      const [contrasena,setContrasena] = useState('');
      function validarContrasena(contrasena) {
        const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
        return regex.test(contrasena);
      }
    
      const botonGuardar = (e) => {
        e.preventDefault();
        const FormUsuario = {
          nombres,
          apellidos,
          tipoDocumento,
          numeroDocumento,
          fechaExpedicion,
          lugarExpedicion,
          tipoUsuario,
          tipoCliente,
          subUsuario,
          contrasena
        
        };
        setRegistroUsuario([...registroUsuario, FormUsuario]);
        limpiarFormulario();

        const limpiarFormulario = () => {
            setNombres('');
            setApellidos('');
            setTipoDocumento('');
            setNumeroDocumento('');
            setfechaExpedicion('');
            setlugarExpedicion('');
            settipoUsuario
            settipoCliente('');
            setsubUsuario('');
            setContrasena('');
            
          };
          
          useEffect(() => {
            localStorage.setItem('registroUsuario', JSON.stringify(registroUsuario));
          }, [registroUsuario]);

          const handleChange = (e) => {
            const { name, value } = e.target;
            setRegistroUsuario({
              ...registroUsuario,
              [name]: value,
            });
          };
          
          
          if (validarContrasena(contrasena)) {
           
          } else {
            
            alert("La contraseña no cumple con los requisitos, por favor no olvides digitarla con letras, numeros y un caracter especial");
          }
      };
  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
        <div className="h3">Registro de Usuario</div>
        <form id="formularioEmpresa" onSubmit={botonGuardar}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="nombres"
                name="nombres"
                placeholder="Nombres"
                onChange = {handleChange}
                value={nombres}
              />
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Apellidos"
                onChange={handleChange}
                value={apellidos}
              />
               <select
                id="tipoDocumento"
                name="tipoDocumento"
                onChange= {handleChange}
                value={tipoDocumento}
                required
              >
                <option value="">Selecciona un tipo</option>
                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Carnet de Extranjería">Carnet de Extranjería</option>
              </select>
              <input
                className="form-control form-control-lg text-center"
                type="number"
                id="numeroDocumento"
                name="numeroDocumento"
                placeholder="N° de Documento"
                onChange={handleChange}
                value={numeroDocumento}
              />
              <input
                 type="date"
                 id="fechaExpedicion"
                 name="fechaExpedicion"
                 placeholder='Fecha de Expedicion'
                 onChange={handleChange}
                 value={fechaExpedicion}
              />
             <input
                className="form-control form-control-lg text-center"
                type="text"
                id="lugarExpedicion"
                name="lugarExpedicion"
                placeholder="Lugar de Expedicion"
                onChange={handleChange}
                value={lugarExpedicion}
              />
               <select
                id="tipoUsuario"
                name="tipoUsuario"
                value={tipoUsuario}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tipo de Usuario</option>
                <option value="it">Equipo IT</option>
                <option value="administrador">Administrador</option>
                <option value="cliente">Cliente</option>
              </select>
               <select
                id="tipoCliente"
                name="tipoCliente"
                value={tipoCliente}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tipo de Cliente</option>
                <option value="DireccionMantenimiento">Direccion de Mantenimiento</option>
                <option value="EquipoGestion">Equipo de Gestion</option>
                <option value="EquipoMantenimiento">Equipo de Mantenimiento</option>
                <option value="EquipoOperadoresConductores">Equipo de Operadores y Conductores</option>
                <option value="EquipoAlmacen">Equipo de Almacen</option>
              </select>
              <input
                className="form-control form-control-lg text-center"
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="Crear Contraseña"
                onChange={handleChange}
                value={contrasena}
              />
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="subusuario"
                name="subusaurio"
                placeholder="Agregar Sub Usuario"
                onChange={handleChange}
                value={subUsuario}
              />
            </div>
          </div>
          <button className="boton-guardar-usuario" type="submit">
            Crear Usuario
          </button>
        </form>
      </div>
  )
}

export default CrearUsuario
