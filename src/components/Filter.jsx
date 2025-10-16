import React from "react";
import { useState } from "react";

function Filter() {

    return(
        <div>
            <label htmlFor="greased">
                <input type="checkbox" id="greased"/>
                Greased
            </label>
        </div>
    )
}

export default Filter