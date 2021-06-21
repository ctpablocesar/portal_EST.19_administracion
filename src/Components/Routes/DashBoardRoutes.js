import React from 'react'
// import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../Ui/Navbar';
// import { Sidebar } from '../Ui/Sidebar';
import { Footer } from '../Ui/Footer';
import { Anuncios } from '../Secciones/Anuncios';
// import { CalendarioEscolar } from '../Secciones/CalendarioEscolar';
// import { FraseInicio } from '../Secciones/FraseInicio';
// import { Galeria } from '../Secciones/Galeria';
import { Noticias } from '../Secciones/Noticias';
import '../../styles/dasboard.css'

export const DashBoardRoutes = () => {
    return (
        <div className="wrapper">
            <header className="main-head">
                <Navbar />
            </header>
            <article className="content">
                <Noticias/>
            </article>
            <footer className="main-footer">
                <Footer />
            </footer>
        </div>
    )
}
