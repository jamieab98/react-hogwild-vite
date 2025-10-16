import React from "react";
import { useState } from "react";

function Filter({onChange, onTextChange}) {

    return(
        <div>
            <label htmlFor="greased">
                <input type="checkbox" id="greased" onChange={(onChange)}/>
                Greased Pigs Only?
            </label>
            <form>
                Search by Name:
                <input type="text" placeholder="Search..." onChange={(onTextChange)}></input>
            </form>
        </div>
    )
}

export default Filter