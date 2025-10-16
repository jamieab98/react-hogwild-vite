import React from "react";
import { useState } from "react";
import styles from "./hogtile.module.css";

function Hogtiles({hogData, greasedBox, hogNameSearch}) {
    const [selectedHog, setSelectedHog] = useState(null);
    const [hiddenHogs, selectHiddenHogs] = useState([]);

    function handleClick(hog) {
        setSelectedHog(hog);
    }

    function handleHideButton(hog) {
        selectHiddenHogs([...hiddenHogs, hog.name])
    }

    const filteredHogs = hogData.filter(hog => (greasedBox ? hog.greased : true)).filter(hog => hog.name.toLowerCase().includes(hogNameSearch.toLowerCase()))

    return(
        <div className = "ui grid container">
            {filteredHogs.map((hog) => (
                <div aria-label="hog card" key={hog.name} onClick={() => handleClick(hog)}
                className = {`ui eight wide column ${hiddenHogs.includes(hog.name) ? styles.hiddenHog : styles.visibleHog}`}>
                    <h3>Name: {hog.name} </h3>
                    <button onClick={() => handleHideButton(hog)}>Hide Me</button>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>Specialty: {hog.specialty}</div>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>{hog.greased ? "Greased" : "Not greased"}</div>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>Weight: {hog.weight}</div>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>The Highest Medal Achieved: {hog["highest medal achieved"]}</div>
                    <img src = {hog.image}></img>
                </div>
            ))}
        </div>
    )
}

export default Hogtiles