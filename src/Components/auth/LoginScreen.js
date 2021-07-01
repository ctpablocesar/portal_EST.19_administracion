import React from 'react'
import '../../styles/administracion.css'
import '../../styles/dasboard.css'
import { images } from '../../Resources/resources'

export const LoginScreen = () => {
    return (
        <>
            <div className="page-bg" style={{ backgroundImage: `url(${images.entrada})` }}></div>
            <div className='container-login'>
                <div className='form-login'>
                    <div className="titulos-login">
                        <span>Administración</span>
                        <i></i>
                        <p>Portal EST 19</p>
                    </div>
                    <div className="datos-login">
                        <form className='datos-form-login'>
                            <div className='titulo-datos-login'>
                                <p>Iniciar Sesión</p>
                            </div>
                            <label>Correo Electrónico:</label>
                            <input type="email" name="correo" className='inputs-login' />
                            <label>Contraseña:</label>
                            <input type="password" name="contrasena" className='inputs-login' />
                            <input type="submit" value="Ingresar" className='btn-login m-4' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}