import React from 'react'
import { images } from '../../Resources/resources'

export const FraseInicio = () => {
    return (
        <>

            {/* Modal */}

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">


                        <div className="card tarjeta-noticias">
                            <div className="row p-4">
                                <div className="col-md-4">
                                    <img src={images.maquinas} className="w-100" alt="imagen de la noticia" />
                                </div>
                                <div className="col-md-8 px-3">
                                    <div className="card-block px-3">
                                        <h4 className="card-title">Mes</h4>
                                        <p className="card-text">Frase del inicio</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* fin modal */}
            <div>
                <div className="titulos">
                    <h1 className="seccion animate__animated animate__bounceInDown">Frase Inicio</h1>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-success btn-add" data-toggle="modal" data-target=".bd-example-modal-lg">Actual</button>
                </div>
                <div>
                    <form className='calendario mt-5'>
                        <label className="font-weight-bold">Mes:</label>
                        <select name="mes" >
                            <option value="Enero" >Enero</option>
                            <option value="Febrero">Febrero</option>
                            <option value="Marzo">Marzo</option>
                            <option value="Marzo">Abril</option>
                            <option value="Marzo">Mayo</option>
                            <option value="Marzo">Junio</option>
                            <option value="Marzo">Julio</option>
                            <option value="Marzo">Agosto</option>
                            <option value="Marzo">Septiembre</option>
                            <option value="Marzo">Octubre</option>
                            <option value="Marzo">Noviembre</option>
                            <option value="Marzo">Diciembre</option>
                        </select>
                        <label className="font-weight-bold">Imagen: </label>
                        <input type="file" name="imagen" id="imagen" />
                        <label className="font-weight-bold">Título:</label>
                        <input type="text" name="" id="" />
                        <label className="font-weight-bold">Frase:</label>
                        <textarea name="textarea" rows="8" cols="30" className="form-control disabled tarea" id="titulo" />
                        <div className="p-2">
                            <input type="submit" value="Actualizar" className='mt-3 btn btn-success' />
                            <input type="reset" value="Resetear" className=' ml-3 mt-3 btn btn-danger' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
