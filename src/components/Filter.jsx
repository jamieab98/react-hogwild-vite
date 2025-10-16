import React from "react";
import { useState } from "react";

function Filter({onChange, onTextChange, onSortChange}) {

    return(
        <div>
            <label htmlFor="greased">Greased Pigs Only?</label>
                <input type="checkbox" id="greased" onChange={(onChange)}/>
            <label htmlFor="sort">Search by Name:</label>
            <input type="text" id="search" placeholder="Search..." onChange={onTextChange} />
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={onSortChange}>
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>            
        </div>
    )
}

export default Filter