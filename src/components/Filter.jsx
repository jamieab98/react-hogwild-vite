import React from "react";
import { useState } from "react";

function Filter({onChange}) {

    return(
        <div>
            <label htmlFor="greased">
                <input type="checkbox" id="greased" onChange={(onChange)}/>
                Greased
            </label>
        </div>
    )
}

export default Filter