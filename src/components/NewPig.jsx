import React from "react";

function NewPig({newPig, newPigData, setNewPigData}) {
    function handleChange(event) {
        const {name, value,type, checked} = event.target;
        setNewPigData(prev => ({
            ...prev, [name]: type === "checkbox" ? checked : value
        }));
    }

    return(
        <>
            <form onSubmit={newPig}>
                <h4>Add Your Own Piggie</h4>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"placeholder="Name" value={newPigData.name} onChange={handleChange}></input>
                <label htmlFor="weight">Weight:</label>
                <input type="number" id="weight" name="weight" value={newPigData.weight} onChange={handleChange}placeholder="Select Weight"></input>
                <label htmlFor="greased">
                    <input type="checkbox" id="greased" name="greased" checked={newPigData.greased} onChange={handleChange}></input>Greased?
                </label>
                <input type="submit" value="Add Pig"></input>
            </form>
        </>
    );
}

export default NewPig