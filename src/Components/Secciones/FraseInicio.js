import React from 'react'

export const FraseInicio = () => {
    return (
        <div>
            <h1>Frase de inicio</h1>
            <input type="button" value="Actual" />
            <div>
                <form>
                    <label>Mes:</label>
                    <select name="mes">
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                    </select>
                    <label>Frase:</label>
                    <textarea name="frase" cols="30" rows="10"></textarea>
                    <label>Autor:</label>
                    <input type="text" name="autor" />
                    <input type="submit" value="Actualizar" />
                </form>
            </div>
        </div>
    )
}
