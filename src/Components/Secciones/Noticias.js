import React from 'react'

export const Noticias = () => {
    return (
        <div>
            <h1>Noticias</h1>
            <input type="button" value="+ Agregar Noticia" />
            <div>
                <img src="https://s.france24.com/media/display/688585be-9060-11ea-8c8d-005056a98db9/w:1400/p:16x9/journal-1920x1080_es.webp" alt="" width="300" height="200" />
                <h3>"Titulo de la noticia"</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptas optio beatae blanditiis eos pariatur, aspernatur deleniti quidem nulla nemo vero error accusantium nam quisquam rem inventore quam ipsum possimus?</p>
                <div>
                    <p>Status: <input type="checkbox" name="status" /></p>
                    <input type="button" value="Editar" />
                    <p>boton para elimiar noticia</p>
                </div>
            </div>
        </div>
    )
}
