import React from 'react'

export const Login = () => {
    return (
        <div>
            <h1>Administración Portal EST 19</h1>
            <hr />
            <h2>Iniciar Sesión</h2>
            <div>
                <label>Correo Electronico:</label>
                <input type="email" name="correo" />
                <label>Contraseña:</label>
                <input type="password" name="contrasena" />
                <input type="submit" value="Iniciar Sesion" />
            </div>
        </div>
    )
}
