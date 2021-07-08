import { types } from '../types/types'

const initialState = {
    anuncios: [],
    active: {
        imagen: '',
        tituloImagen: ''
    }
}

export const anunciosReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveAnuncios:
            return {
                anuncios: action.payload
            }
        case types.saveImageAnuncioActive:
            return {
                ...state,
                active: {
                    imagen: action.payload.url,
                    tituloImagen: action.payload.nombre
                }
            }
        default:
            return state
    }

}