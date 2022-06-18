import React from 'react';
import { Card } from './Card';


export const dataArray = [

    {
        id: 1,
        blur: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "card1.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "USA",
        openSpots: 0,
        webStatus: 'Not Online'
    },

    {
        id: 2,
        blur: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "card2.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "USA",
        openSpots: 27,
        webStatus: 'Online'
    },

    {
        id: 3,
        blur: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "card3.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
        webStatus: 'Not Online'
    },
]


export const allCardsArray = dataArray.map(function(object) {
    return (
        <Card 
            // always need to include a key prop, and this key prop can be anything, but you need to make sure that it's unique for each iteration of .map()
            // Almost always there will be an id property that makes the iterations distinguishable 
            // key={object.id}
            // cardNo={object.id}
            // blur={object.title}
            // rating={object.stats.rating}
            // reviewCount={object.stats.reviewCount}
            // country={object.location}
            // price={object.price}
            // // this is how you add images that are in the PUBLIC FOLDER
            // img={`cardimages/${object.coverImg}`}
            // openSpots={object.openSpots}
            // webStatus={object.webStatus}



            // There is a much simpler way to write all of this
            propertiesObject={object} // you literally get access to every single property above, you just need to change everything from props.img and props.country , to props.propertiesObject.img and props.propertiesObject.country

            key={object.id} // you still need a key prop everytime

            img={`cardimages/${object.coverImg}`} // images are a little bit more difficult because of their relative paths, so just do them normally like this


            // another way to do this is to use the spread operator

            // {...object}
            
            // think about what this does, it literally spreads out the object like this...

            // id: 3,
            // blur: "Group Mountain Biking",
            // description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
            // price: 50,
            // coverImg: "card3.png",
            // stats: {
            //     rating: 4.8,
            //     reviewCount: 2
            // },
            // location: "Norway",
            // openSpots: 3,
            // webStatus: 'Not Online'
        />
    )
})





