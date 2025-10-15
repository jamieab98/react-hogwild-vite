import React from "react";

function Hogtiles({hogData}) {

    return(
        <div className = "ui grid container">
            {hogData.map((hog) => (
                <div className = "ui eight wide column">
                    <h3>Name: {hog.name} </h3>
                    <img src = {hog.image}></img>
                </div>
            ))}
        </div>
    )
}

export default Hogtiles