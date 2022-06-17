import React from "react";



// you can pass multiple JSX elements at the same time using arrays
export const ArrayOfParagraphs = function() {
    const ArrayOfParagraphs = [
        <p>First Element</p>,
        <p>Second Element</p>,
        <p>Third Element</p>
    ]
    
    return (
    <div>
        {ArrayOfParagraphs}
    </div>
    )
}



// Why do we usually use .map() and arrays in React?
// If we are calling a functional component multiple times, but the props of each component are different, just create an array with the prop data, and then loop over that array using .map() to create another array of those functional components
// then render that array of JSX