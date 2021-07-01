import React from 'react'
import { images } from '../../Resources/resources';
import Switch from 'rc-switch';
import "rc-switch/assets/index.css";
import '../../styles/administracion.css'

export const Noticias = () => {

    console.log('nada')
    const onChange = () => {
        console.log('nada')
    }

    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Agregar noticia</h5>
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
                                        <textarea name="textarea" rows="8" cols="30" className="form-control disabled" id="titulo" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label >Imagen de la noticia:</label>
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
                <h1 className="seccion animate__animated animate__bounceInDown">Noticias</h1>
                <button type="button" className="btn btn-success btn-add" data-toggle="modal" data-target="#exampleModalCenter">+ Agregar Noticia</button>
            </div>
            <div className="container py-3 col-md-10">



                   <div className="card tarjeta-noticias">
                    <div className="row p-4">
                        <div className="col-md-4">
                            <img src={images.maquinas} className="w-100" alt="imagen de la noticia" />
                        </div>
                        <div className="col-md-8 px-3">
                            <div className="card-block px-3">
                                <h4 className="card-title">Título de la noticia</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iure ut corporis accusamus beatae? Perspiciatis blanditiis aliquam repellat ipsum eaque nihil perferendis vitae quas, autem deleniti maiores accusantium eveniet eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, minus quae. Quibusdam distinctio mollitia qui, temporibus delectus non atque error reprehenderit, explicabo dolores beatae consequuntur hic ea labore quae reiciendis? lorem </p>
                                <p className="card-text text-right"><small className="text-muted">Última actualización hace 3 min</small></p>
                            </div>
                        </div>
                        <div className='col-md-12 edicion'>
                            <div className="centrar divstatus">
                                Status
                                <Switch
                                    onChange={onChange}
                                    onClick={onChange}
                                />
                            </div>
                            <div className="centrar diveditar">
                                Editar
                                <i className="fas fa-edit editar"></i>
                            </div>
                            <div className="centrar diveliminar">
                                Eliminar
                                <i className="fas fa-trash-alt eliminar"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}