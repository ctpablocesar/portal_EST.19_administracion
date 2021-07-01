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
                    <input type="submit" value="Guardar" className="btn btn-success"/>
                </div>
            </form>
        </div>
    )
}
