import React from 'react'
import { images } from '../../Resources/resources';

export const Noticias = () => {
    return (
        <div>
            <div className="titulos">
                <h1>Noticias</h1>
                <input type="button" value="+ Agregar Noticia" />
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
                            contenido de edicion
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
