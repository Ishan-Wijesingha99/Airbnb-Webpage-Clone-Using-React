import React from "react";
import card1Image from "../images/card1.png"
import star from '../images/star.png'

// Card functional component
export const Card = function(props) {

    // another way to conditionally render something
    let webStat; 
    if(props.propertiesObject.webStatus == 'Online') {
        webStat = "Online";
    } else {
        webStat = '';
    }

    return (
        <div className='card-container'>
            <img id='card-image' src={props.img} alt='card 1 image'/>

            {/* conditional rendering */}
            {props.propertiesObject.openSpots ? <p id="status">BOOK NOW</p> : <p id="status">SOLD OUT</p>}
            <p id="web-status">{webStat}</p>

            <div className="card-first-line">
                <img id="star" src={star} alt='star rating image'/>
                <p id="rating">{props.propertiesObject.stats.rating}</p>
                <p id="number">({props.propertiesObject.stats.reviewCount})</p>
                <p id="country">{props.propertiesObject.location}</p>
            </div>


            <p id="card-blur">{props.propertiesObject.blur}</p>

            <p id="card-price"><b>From ${props.propertiesObject.price}</b> / person</p>
        </div>
    )
}




// What is the point of props?
// To change the HTML code dynamically. THIS is why React is so powerful.
// if you check out basically any modern website, you'll see that they use React or something very similar to React. For instance, Facebook uses react. Each post executes the same functional component, but the content of the post is not hard coded, it changes dynamically