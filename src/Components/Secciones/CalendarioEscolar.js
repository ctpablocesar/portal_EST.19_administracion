import React from 'react'

export const CalendarioEscolar = () => {
    return (
        <div>
            <form>
                <h1>Calendario Escolar</h1>
                <label>Imagen:</label>
                <input type="file" name="imagen" />
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
