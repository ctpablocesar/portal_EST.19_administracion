import React from 'react'
import Switch from 'rc-switch';
import { images } from '../../../Resources/resources'

export const Anuncio = () => {

    const onChange = () => {
        console.log('nada')
    }

    return (
        <div className="card col-sm-5 tarjeta-noticias m-3" >
            <div className="row no-gutters">
                <div className="col-sm-5 p-3">
                    <img className="card-img" src={images.maquinas} alt="Suresh Dasari Card" />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title"><strong>Titulo del anuncio</strong></h5>
                        <p className="card-text">Suresh lo Dasari is a founder and technical lead developer in tutlane.</p>
                        <p className="card-text text-right"><small className="text-muted">Última actualización hace 3 min</small></p>
                    </div>
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
                    <i className="fas fa-edit editar" data-toggle="modal" data-target="#exampleModalCenter"></i>
                </div>
                <div className="centrar diveliminar">
                    Eliminar
                    <i className="fas fa-trash-alt eliminar"></i>
                </div>
            </div>
        </div>
    )
}
