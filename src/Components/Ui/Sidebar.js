import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../../styles/sidebar.css'

export const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className='lista'>
                    <Link className='item' to='/Anuncios'>Nada por el momento</Link>
                    <Link className='item' to='/'>Nada por el momento</Link>
                    <Link className='item' to='/'>Nada por el momento</Link>
                    <Link className='item' to='/'>Nada por el momento</Link>
                    <Link className='item' to='/'>Nada por el momento</Link>
                </div>
            </div>
        </div>
    )
}