import { types } from '../types/types'

export const uiReducer = (state = {}, action) => {

    switch (action.type) {
        case types.startLoading:
            return {
                loading: true,
            }

        case types.finishLoading:
            return {
                checking: false
            }

        default:
            return state
    }

}