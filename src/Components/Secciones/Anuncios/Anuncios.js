import React, { useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal';

import { Anuncio } from './Anuncio'
import "rc-switch/assets/index.css";
import '../../../styles/administracion.css'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingAnuncios, startSaveAnuncio, startUpload } from '../../../actions/anuncios';

export const Anuncios = () => {

    const dispatch = useDispatch();

    const ui = useSelector(state => state.ui);

    const { anuncios } = useSelector(state => state.anuncios)

    const [open, setOpen] = useState(false);

    const [titulo, setTitulo] = useState('');

    const [vacia, setVacia] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(startLoadingAnuncios())
    }, [ui.saving]);

    const handleUploadImage = (e) => {
        e.preventDefault()
        document.querySelector('#imageSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTitulo(e.target.files[0].name)
            dispatch(startUpload(file))
            setVacia(false);
        }
    }

    const handleSaveAnuncio = (e) => {
        const titulo = e.target.titulo.value;
        const desc = e.target.descripcion.value;
        e.preventDefault()
        dispatch(startSaveAnuncio(titulo, desc))
        handleClose()
    }

    return (
        <>
            <input
                type="file"
                name='file'
                id="imageSelector"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <div className="titulos">
                    <h1 className="seccion animate__animated animate__bounceInDown">Anuncios</h1>
                    <button type="button" className="btn btn-success btn-add" onClick={handleOpen}>+ Agregar Anuncio</button>
                </div>
                <div className=" cards-responsivas w-100 row justify-content-md-center">

                    {
                        anuncios.map((anuncio) => (
                            <Anuncio handleOpen={handleOpen} anuncio={anuncio} key={anuncio.id} />
                        ))
                    }


                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Agregar Anuncio</h5>
                                </div>
                                <div className="modal-body">

                                    <form onSubmit={handleSaveAnuncio}>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Título: </label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="titulo" required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Descripción: </label>
                                            <div className="col-sm-9">
                                                <textarea name="textarea" rows="5" cols="30" className="form-control disabled" id="descripcion" required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label >Imagen del anuncio:&nbsp;</label>
                                            {
                                                !!titulo
                                                    ?
                                                    <>
                                                        <button onClick={handleUploadImage} className='btn btn-secondary'>Actualizar imagen</button>
                                                        <span><b> {titulo}</b> <i className="fas fa-check-circle"></i></span>
                                                    </>
                                                    :
                                                    <button onClick={handleUploadImage} className='btn btn-secondary'>Agregar imagen</button>

                                            }
                                        </div>


                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                                            <button type="submit" className={`btn btn-success ${vacia && 'btn-disabled'}`}>Guardar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal>





                </div>
            </div>

        </>
    )
}
