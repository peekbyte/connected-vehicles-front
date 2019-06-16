import React from 'react'
const Card = (props) =>(
    <div className="card">
        <header className="card__header" >
        <h4 className="card__header__title">{props.title}</h4> 
        </header>
        <div className="card__content">
            {props.children}
        </div>
    </div>
)

export default Card 