import React from 'react'

export const CalendarioEscolar = () => {
    return (
        <div>
            <div className="titulos">
                <h1 className="seccion animate__animated animate__bounceInDown">Calendario Escolar</h1>
            </div>
            <form>
                <div className="calendario">
                    <label className="font-weight-bold">Imagen:</label>
                    <input type="file" name="imagen" /> 
                </div>
                <div className="text-center mt-3">
                    <button type="button" className="btn btn-success" value="Guardar">Guardar</button>
                </div>
            </form>
        </div>
    )
}
