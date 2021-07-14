import { types } from '../types/types'

const initialState = {
    noticias: [],
    active: {}
}

export const noticiasReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveNoticias:
            return {
                ...state,
                noticias: action.payload
            }
        case types.saveImageNoticiaActive:
            return {
                ...state,
                active: {
                    ...state.active,
                    imagen: action.payload.url,
                    tituloImagen: action.payload.nombre
                }
            }
        case types.resetNoticias:
            return {
                ...state,
                active: {
                    imagen: '',
                    tituloImagen: ''
                }
            }
        case types.setActiveNoticia:
            return {
                ...state,
                active: action.payload
            }
        default:
            return state
    }

}