import './card-list.styles.css'
import React from "react";

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <h1 key={ monster.id }>{ monster.name }</h1>
            ))}
        </div>
    );
};