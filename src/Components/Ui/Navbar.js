import React, { useState } from 'react';
import { images } from '../../Resources/resources';
import '../../styles/administracion.css';

export const Navbar = () => {

    const [abrir, setAbrir] = useState(false);

    return (
        <div className='navbar2'>
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
                <div className="text-center logotext">
                    <img src={images.logo} alt="logo" className="navbar-brand logoimg" height="90" /><br />Panel de administración
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setAbrir(!abrir)}>
                    {
                        !abrir
                            ?
                            <span className="navbar-toggler-icon"></span>
                            :
                            <span className="fas fa-times icono-x"></span>
                    }
                </button>


                <div className=" text-center collapse navbar-collapse" id="navbarSupportedContent-3">
                    <div className="text-center alinearlinks">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secciones
                                </span>
                                <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-3">
                                    <a className="dropdown-item waves-effect waves-light" href="#">Anuncios</a>
                                    <a className="dropdown-item waves-effect waves-light" href="#">Calendario Escolar</a>
                                    <a className="dropdown-item waves-effect waves-light" href="#">Noticias</a>
                                    <a className="dropdown-item waves-effect waves-light" href="#">Frase Inicio</a>
                                    <a className="dropdown-item waves-effect waves-light" href="#">Galería</a>
                                    <a className="dropdown-item waves-effect waves-light" href="#">Contacto</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light" href='#'>
                                <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}