import React from "react";
import './Instrument.css';

export default function Instrument({ image, name, description }) {
    return (
        <div className="instrument-card">
            <div className="instrument-img-container">
                <img height="100px" className="instrument-img" src={image}/>
            </div>
            <div className="desc">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}