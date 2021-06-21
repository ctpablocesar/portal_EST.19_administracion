import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { Navbar } from '../Ui/Navbar';
import { Sidebar } from '../Ui/Sidebar';
// import { Anuncios } from '../Secciones/Anuncios';
// import { CalendarioEscolar } from '../Secciones/CalendarioEscolar';
// import { FraseInicio } from '../Secciones/FraseInicio';
// import { Galeria } from '../Secciones/Galeria';
// import { Noticias } from '../Secciones/Noticias';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <>
            <Navbar />
            <Route {...rest}
                component={(props) => (
                    (isAuthenticated)
                        ? (<Component {...props} />)
                        : (<Redirect to="/login" />)
                )}

            />
            <Sidebar />
        </>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
