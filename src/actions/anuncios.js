import { types } from '../types/types'
import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { finishLoading, startLoading } from './ui';

export const startLoadingAnuncios = () => {
    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchConToken('anuncios');
        const body = await resp.json();

        if (body.ok) {
            dispatch(saveAnuncios(body.anuncios))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        dispatch(finishLoading())

    }
}

const saveAnuncios = (data) => ({
    type: types.saveAnuncios,
    payload: data
})