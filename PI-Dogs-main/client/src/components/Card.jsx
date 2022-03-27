import React from "react";
import "../Css/Card.css";

export default function Card({image, name, temperament, weight}){
    return (
        <div className='paginado2'>
            <div>
                <div className="card">
                    <h3 className="title3">{name}</h3>
                    <img className="imageCard" src={image} alt= "no encontrada"/>
                    <p className="base11">Temperament :  {temperament}</p>
                    <p className="base2">Weight: {weight} lbs.</p>
                </div>
            </div>
        </div>
    )
}