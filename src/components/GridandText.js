import React from "react";
import gridImage from '../images/image-grid.png'

export const GridandText = function() {
    return (
        <section className="grid-and-text-container">
            <img id="grid-image" src={gridImage} alt='many different photos'/>

            <h3 id="online-experiences-heading">Online Experiences</h3>

            <p id="online-experiences-text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}