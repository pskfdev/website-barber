import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

function ButtonGet(props) {
    return (
        <div>
            <div className='con-btnGet'>
                <Link to={props.to} className="btnGet">{props.nameBtn}</Link>
            </div>
        </div>
    )
}

export default ButtonGet