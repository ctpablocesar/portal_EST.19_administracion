import { types } from '../types/types'

const initialState = {
    anuncios: []
}

export const anunciosReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.saveAnuncios:
            return {
                anuncios: action.payload
            }

        default:
            return state
    }

}