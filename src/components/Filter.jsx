import React from "react";
import { useState } from "react";

function Filter() {

    const [greasedBox, setGreasedBox] = useState(false)

    function handleBox(event) {
        setGreasedBox(event.target.checked);
        console.log("box was checked")
    }

    return(
        <div>
            <label htmlFor="greased">
                <input type="checkbox" id="greased" checked={greasedBox} onChange={handleBox}/>
                Greased?
            </label>
        </div>
    )
}

export default Filter