import React, { useEffect } from 'react'
import Modal from '@material-ui/core/Modal';

import { Anuncio } from './Anuncio'
import "rc-switch/assets/index.css";
import '../../../styles/administracion.css'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingAnuncios } from '../../../actions/anuncios';

export const Anuncios = () => {

    const dispatch = useDispatch();

    const { anuncios } = useSelector(state => state.anuncios)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(startLoadingAnuncios())
    }, []);

    return (
        <>
            <div>
                <div className="titulos">
                    <h1 className="seccion animate__animated animate__bounceInDown">Anuncios</h1>
                    <button type="button" className="btn btn-success btn-add" onClick={handleOpen}>+ Agregar Anuncio</button>
                </div>
                <div className=" cards-responsivas w-100 row justify-content-md-center">

                    {
                        anuncios.map((anuncio) => (
                            <Anuncio handleOpen={handleOpen} anuncio={anuncio} key={anuncio.id}/>
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

                                    <form>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Título: </label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="titulo" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Descripción: </label>
                                            <div className="col-sm-9">
                                                <textarea name="textarea" rows="5" cols="30" className="form-control disabled" id="titulo" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label >Imagen del anuncio:</label>
                                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                        </div>

                                    </form>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                                    <button type="button" className="btn btn-success">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </Modal>





                </div>
            </div>

        </>
    )
}
