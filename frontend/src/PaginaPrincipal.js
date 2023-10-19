import React from "react";
import MenuPrincipal from "./MenuPrincipal";

export const PaginaPrincipal=(props)=>
{
    return (
        <body>
       <header>
        <div className="capa">
            <div className="contenedor-header">
                <div className="menu-principal">
            <button onClick={<MenuPrincipal/>}>Menu Principal</button>
            </div>
            <div className="logo">
                <img src="../imagenes/logo.png"></img>
            </div>
            </div>
        </div>
       </header>
       <section className="main">
        <section className="bienvenida">
            <div className="contenedor bienvenida">
        <div className="titulo-principal">
        <h1>BIENVENIDO A DIBON</h1>
        </div>
        <div className="titulo-eslogan">
        <h2>Gestion y Mantenimiento</h2>
        </div>
        </div>
        </section>
        <section className="contenido">
        <div className="contenedor-videos">
            <div className="video1">
                <div className="cuadro">
            <img src="../imagenes/Imagen Video1.png"/>
            </div>
            <div className="descripcion">
            <p className="titulo-video">Nuestro dia a dia</p>
            </div>
            </div>
            <div className="video2">
                <div className="cuadro">
            <img src="../imagenes/Imagen Video2.png"/>
            </div>
            <div className="descripcion">
            <p>Nuestro dia a dia</p>
            </div>
            </div>
          </div>
        </section>
        <section className="blog">
        <div className="titulo-blog">
         <h3>BLOG EMPRESARIAL</h3>
         <div className="contenedor-entradas">
         <div className="entrada1">
         <div className="imagen-entrada">
            <img src="../imagenes/Imagen entrada1.png"/>
            </div>
            <div className="titulo-entrada">
            <h4>Herramientas mas utiles </h4>
            </div>
            <div className="contenido-entrada">
            <p>Contenido del Blog</p>
            <a className ="enlace-entrada" href="#">...Ver mas</a>
            </div>
         </div>
         <div className="entrada2">
         <div className="imagen-entrada">
            <img src="../imagenes/Imagen entrada2.png"/>
            </div>
            <div className="titulo-entrada">
            <h4>Historia de Dibon</h4>
            </div>
            <div className="contenido-entrada">
            <p>Contenido del Blog</p>
            <a className ="enlace-entrada" href="#">...Ver mas</a>
            </div>
         </div>
         <div className="entrada3">
         <div className="imagen-entrada">
            <img src="../imagenes/Imagen entrada3.png"/>
            </div>
            <div className="titulo-entrada">
            <h4>Nuestro dia a dia</h4>
            </div>
            <div className="contenido-entrada">
            <p>Contenido del Blog</p>
            <a className ="enlace-entrada" href="#">...Ver mas</a>
            </div>
         </div>
         </div>
        </div>

        </section>
       </section>
       <footer>
        <div className="redes-sociales">
        <div className="contenedor">
        <a className="telefono" href="#"><i className="bi bi-phone"></i></a>
        <a className="whatsapp" href="#"><i className="bi bi-whatsapp"></i></a>
        <a className="gmail" href="#"><i className="bi bi-mailbox"></i></a>
        </div>
        </div>
        <p className="derechos">DIBON -  M&D DERECHOS RESERVADOS 2024 </p>
       </footer>
        </body>
        

    )
}
export default PaginaPrincipal
