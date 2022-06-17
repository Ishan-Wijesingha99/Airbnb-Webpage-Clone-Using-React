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