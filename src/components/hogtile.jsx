import React from "react";

function Hogtiles({hogData}) {

    return(
        <div>
            {hogData.map((hog) => (
                <div>
                    <h3>Name: {hog.name} </h3>
                    <img src = {hog.image}></img>
                </div>
            ))}
        </div>
    )
}

export default Hogtiles