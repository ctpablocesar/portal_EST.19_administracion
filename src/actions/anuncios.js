import { types } from '../types/types'
import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';
import { finishLoading, finishSavingSomething, startLoading, startSavingSomething } from './ui';
import { fileUpload } from '../helpers/fileUpload';

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

export const startUpload = (file) => {
    return async (dispatch) => {

        console.log('estoy guardando la imagen')

        const guardado = await fileUpload(file);

        const { url, nombre } = guardado;

        dispatch(saveImageAnuncioActive(url, nombre))

    }
}

const saveImageAnuncioActive = (url, nombre) => ({
    type: types.saveImageAnuncioActive,
    payload: {
        url,
        nombre
    }
})

export const startSaveAnuncio = (titulo, descripcion) => {
    return async (dispatch, getState) => {

        dispatch(startSavingSomething())

        console.log(titulo, descripcion);

        const { imagen } = getState().anuncios.active;

        const resp = await fetchConToken('anuncios', { titulo: titulo, descripcion: descripcion, imagen: imagen }, 'POST');
        const body = await resp.json();

        console.log(body)

        if (body.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Anuncio guardado exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Falló al guardar el anuncio',
                showConfirmButton: false,
                timer: 1500
            })
        }
        dispatch(finishSavingSomething())

    }
}

const saveActiveAnuncio = (data) => ({
    type: types.saveActiveAnuncio,
    payload: data
})