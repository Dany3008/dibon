import React,{useState, useEffect} from 'react'

const CrearEmpresa = () => {
    const obtenerRegistroEmpresa = () => {
      const dataEmpresa = localStorage.getItem('registroEmpresa');
      if (dataEmpresa) {
        return JSON.parse(dataEmpresa);
      } else {
        return [];
      }
    };
    
    const [registroEmpresa, setRegistroEmpresa] = useState(obtenerRegistroEmpresa);
    const [nombre, setNombre] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [nit, setNit] = useState('');
    const [actividadComercial, setActividadComercial] = useState('');
    const [representanteLegal, setRepresentanteLegal] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
  
    const botonGuardar = (e) => {
      e.preventDefault();
      const FormEmpresa = {
        nombre,
        razonSocial,
        nit,
        actividadComercial,
        representanteLegal,
        tipoDocumento,
        numeroDocumento,
      };
      setRegistroEmpresa([...registroEmpresa, FormEmpresa]);
      limpiarFormulario();
    };
  
    const limpiarFormulario = () => {
      setNombre('');
      setRazonSocial('');
      setNit('');
      setActividadComercial('');
      setRepresentanteLegal('');
      setTipoDocumento('');
      setNumeroDocumento('');
    };
  
    useEffect(() => {
      localStorage.setItem('registroEmpresa', JSON.stringify(registroEmpresa));
    }, [registroEmpresa]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRegistroEmpresa({
        ...registroEmpresa,
        [name]: value,
      });
    };
  
    return (
      <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
        <div className="h3">Registro de Empresa</div>
        <form id="formularioEmpresa" onSubmit={botonGuardar}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
                value={nombre}
              />
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="razonSocial"
                name="razonSocial"
                placeholder="Razon Social"
                onChange={handleChange}
                value={razonSocial}
              />
              <input
                className="form-control form-control-lg text-center"
                type="number"
                id="nit"
                name="nit"
                placeholder="Nit"
                onChange={handleChange}
                value={nit}
              />
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="actividadComercial"
                name="actividadComercial"
                placeholder="Actividad Comercial"
                onChange={handleChange}
                value={actividadComercial}
              />
              <input
                className="form-control form-control-lg text-center"
                type="text"
                id="representanteLegal"
                name="representanteLegal"
                placeholder="Representante Legal"
                onChange={handleChange}
                value={representanteLegal}
              />
              <select
                id="tipoDocumento"
                name="tipoDocumento"
                value={tipoDocumento}
                onChange={handleChange}
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
            </div>
          </div>
          <button className="boton-guardar-empresa" type="submit">
            Crear Empresa
          </button>
        </form>
      </div>
    );
  };
  

export default CrearEmpresa
