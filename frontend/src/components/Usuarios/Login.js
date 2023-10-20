import React, { useState } from 'react'
import {PaginaPrincipal} from '../../PaginaPrincipal'
import '../../css/Login.css'
import '../../css/normalize.css'

export const Login = () => {
  const [milogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPass] = useState("");

  function ingresar(e)
  {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpass = document.getElementById("txtpass").value;
    if(txtusu.length ===0 || txtpass.length ===0)
    {
      alert("¡Complete los datos faltantes!")
    }
    else
    {
      if(usu === "admin" && pas==="123")
      {
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }
      else
      {
        setMiLogin("false");
        alert("Error de Usuario y/o Contraseña, Intente ingresar de nuevo");
        document.getElementById("txtusu").value ="";
        document.getElementById("txtpass").value ="";
        document.getElementById("txtusu").focus();

      }
    }
  }
  return (
    <div className="capa">
    <div className="container">
        
    <form id="form_login">
        < div className= "form-group">
            <h1>DIBON</h1>
            
            <label htmlFor="txtusu"><strong>Usuario</strong></label>
            <input type="text" id="txtusu"  className="form-control" onChange={(e)=>setUsu(e.target.value)}  required/>
        
        
            <label htmlFor="txtpas"><strong>Contraseña</strong></label>
            <input type="password" id="txtpas"  className="form-control" onChange={(e)=>setPass(e.target.value)} required/>
        <br/>
        </div>
        <div className="boton">
        <input type="submit"  className="boton-ingresar" value="Ingresar" onClick={ingresar}/>
        </div>
    </form>
{ milogin === "true" && <PaginaPrincipal/>}
</div>
</div>
  )
}

export default Login
