import React from 'react'

export const Galeria = () => {
    return (
        <div>
            <h1>Galería</h1>
            <input type="button" value="+ Agregar Imagen" />
            <div>
                <img src="" alt={`"Imagen"`} />
                <h1>"Nombre de la imagen</h1>
                <p>Status: <input type="checkbox" name="status" /></p>
                <p>"Icono para eliminar"</p>
            </div>
        </div>
    )
}
