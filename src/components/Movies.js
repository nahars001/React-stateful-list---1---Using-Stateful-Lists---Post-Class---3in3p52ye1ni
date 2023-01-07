import React from "react";


function Movies(props) {

    const children = props.data[props.year].map(val => val
        );

    console.log("Movies");
        
    return (
    
    <ul> {children.map(child => <li> {child}</li>)}</ul>);
}

export default Movies;