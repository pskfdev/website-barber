import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='container-header bg-header'>
            <div className='header-text'>
                <h1>{props.header}</h1>
            </div>
        </div>
    )
}

export default Header