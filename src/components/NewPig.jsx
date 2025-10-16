import React from "react";

function NewPig({newPig}) {

    return(
        <>
            <form htmlFor = "newPig" onSubmit={newPig}>
                Add Your Own Piggie
                <input type="text" id="name" placeholder="Name"></input>
                <input type="number" id="weight" placeholder="Select Weight"></input>
                <input type="radio" id="greased"></input>Greased?
                <input type="submit" id="addSubmit"></input>
            </form>
        </>
    );
}

export default NewPig