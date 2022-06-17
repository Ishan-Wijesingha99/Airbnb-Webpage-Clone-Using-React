import React from "react";
import card1Image from "../images/card1.png"
import star from '../images/star.png'

// Card1
export const Card1 = function(props) {
    return (
        <div className="card-1-container">
            <img id="card-1-image" src={props.img} alt='card 1 image'/>

            <p id="status">SOLD OUT</p>

            <div className="card-first-line">
                <img id="star" src={star} alt='star rating image'/>
                <p id="rating">{props.rating}</p>
                <p id="number">({props.reviewCount})</p>
                <p id="country">{props.country}</p>
            </div>


            <p id="card-blur">{props.title}</p>

            <p id="card-price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}




// What is the point of props?
// To change the HTML code dynamically. THIS is why React is so powerful.
// if you check out basically any modern website, you'll see that they use React or something very similar to React. For instance, Facebook uses react. Each post executes the same functional component, but the content of the post is not hard coded, it changes dynamically