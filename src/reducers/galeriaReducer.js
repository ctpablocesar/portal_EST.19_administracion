import { types } from '../types/types'

const initialState = {
    imagenes: [],
    active: {}
}

export const galeriaReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveImages:
            return {
                ...state,
                imagenes: action.payload
            }
        case types.saveActiveImage:
            return {
                ...state,
                active: {
                    tituloImagen: action.payload.nombre,
                    imagen: action.payload.url
                }
            }
        default:
            return state
    }

}