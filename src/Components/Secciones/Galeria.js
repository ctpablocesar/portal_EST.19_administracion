import React from 'react'
import { images } from '../../Resources/resources'
import Switch from 'rc-switch';
import "rc-switch/assets/index.css";

export const Galeria = () => {

    const onChange = () => {
        console.log('nada')
    }

    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Agregar imagen</h5>
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
                                <div className="form-group">
                                    <label >Imagen:</label>
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






            <div>

                <div className="titulos mb-5">
                    <h1 className="seccion animate__animated animate__bounceInDown">Galería</h1>
                    <button type="button" className="btn btn-success btn-add" data-toggle="modal" data-target="#exampleModalCenter">+ Agregar Imagen</button>
                </div>
                <div>



                    <div className="">

                        <div className="row d-flex justify-content-center">
                            <div className="card col-md-3 imagen-galeria" style={{ width: '18rem' }}>
                                <img className="card-img-top mt-3" src={images.maquinas} alt="titulo de la imagen" />
                                <div className="card-body">
                                    <h5 class="text-center card-title">Título de la imagen</h5>
                                    <div className="flexd">
                                        <div className="centrar divstatus">
                                            Status
                                            <Switch
                                                onChange={onChange}
                                                onClick={onChange}
                                            />
                                        </div>
                                        <div className="centrar text-center diveliminar">
                                            Eliminar
                                            <i className="fas fa-trash-alt eliminar"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>


                    </div>



                </div>
            </div>
           
        </>
    )
}
