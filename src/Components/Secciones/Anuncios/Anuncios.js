import React from 'react'
import { Anuncio } from './Anuncio'
import "rc-switch/assets/index.css";

export const Anuncios = () => {



    return (
        <>
            <div>
                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Agregar Anuncio</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
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
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-success">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Termina modal */}

                <div className="titulos">
                    <h1 className="seccion animate__animated animate__bounceInDown">Anuncios</h1>
                    <button type="button" className="btn btn-success btn-add" data-toggle="modal" data-target="#exampleModalCenter">+ Agregar Anuncio</button>
                </div>
                <div className=" cards-responsivas w-100 row justify-content-md-center">



                    <Anuncio />
                    <Anuncio />
                    <Anuncio />
                    <Anuncio />




                </div>
            </div>

        </>
    )
}
