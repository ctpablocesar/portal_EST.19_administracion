import React from 'react'
import ScrollToTop from 'react-scroll-up';

export const Contacto = () => {
    return (
        <>

            <div className="titulos">
                <h1 className="seccion animate__animated animate__bounceInDown">Contacto</h1>
            </div>
            <div className="row d-flex justify-content-center">


                <div className="col-md-3 card mb-3 imagen-galeria card-contacto" style={{ maxWidth: '18rem' }}>
                    <div className="card-header font-weight-bold text-uppercase">Nombre</div>
                    <div className="card-body">
                        <h5 className="card-title text-success font-weight-bold">ASUNTO</h5>
                        <p>Asunto del mensaje</p>
                        <div className="card-text">
                            <label className="font-weight-bold">Mensaje:</label>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero minus repellat doloribus, eveniet porro hic veniam eaque! Deserunt iusto repudiandae assumenda, voluptatum laborum eveniet, totam error inventore ab nulla voluptates?</p>
                            <div className="contacto">
                                <hr />
                                <h5 className="card-title text-success font-weight-bold">CONTACTO</h5>
                                <label className="font-weight-bold">Telefono:</label>
                                <p>Teléfono del usuario</p>
                                <label className="font-weight-bold">Correo electrónico:</label>
                                <p>Correo del usuario</p>
                            </div>
                        </div>
                        <hr />
                        <div className="centrar text-center diveliminar">
                            Eliminar
                            <i className="fas fa-trash-alt eliminar"></i>
                        </div>
                    </div>
                </div>


            </div>


            <ScrollToTop showUnder={350}>
                <i className="fas fa-arrow-up go-up"></i>
            </ScrollToTop >


        </>
    )
}
