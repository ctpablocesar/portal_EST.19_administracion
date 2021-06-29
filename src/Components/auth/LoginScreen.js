import React from 'react'
import { Footer } from '../Ui/Footer'
import { images } from '../../Resources/resources'
import '../../styles/administracion.css'
import '../../styles/dasboard.css'

export const LoginScreen = () => {
    return (
        <div className='container-login'>
            <div className='form-login'>
                <div className="titulos-login">
                    <span>Adminstracion</span>
                    <i></i>
                    <p>Portal EST 19</p>
                </div>
                <div className="datos-login">
                    <form className='datos-form-login'>
                        <div className='titulo-datos-login'>
                            <p>Iniciar Sesion</p>
                        </div>
                        <label>Correo Electronico:</label>
                        <input type="email" name="correo" className='inputs-login' />
                        <label>Contraseña:</label>
                        <input type="password" name="contrasena" className='inputs-login' />
                        <input type="submit" value="Ingresar" className='btn-login m-4' />
                    </form>
                </div>
            </div>
        </div>
    )
}
        // <div className="wrapper">
        //     <header className="main-head navbar-login">
        //         {/* <div className='navbar-login'> */}
        //             <img src={images.logo} alt="logo" className='logoimg' width='80' />
        //             <h1 className='titulo-login'>Administracion Portal EST 19</h1>
        //         {/* </div> */}
        //     </header>
        //     <article className="content">
        //         <div className="formulario-login">
        //             <h2 className='text-center m-4'>Iniciar Sesión</h2>
        //             <div className='datos-div-login'>
        //                 <form className='datos-login'>
        //                     <label>Correo Electronico:</label>
        //                     <input type="email" name="correo" />
        //                     <label>Contraseña:</label>
        //                     <input type="password" name="contrasena" />
        //                     <input type="submit" value="Iniciar Sesion" className='mt-4' />
        //                 </form>
        //             </div>
        //         </div>
        //     </article>
        //     <footer className="main-footer">
        //         <Footer />
        //     </footer>
        // </div>