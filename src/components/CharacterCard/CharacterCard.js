import React from 'react'
import './style.css'

const CharacterCard = props => {
    return (
        <div className='card d-flex align-content-start flex-wrap' onClick={props.imageClick}>
            <div className='img-container'>
                <img className='characters justify-content-center' alt={props.id} src={props.image} />
            </div>
        </div>
    )
}

export default CharacterCard