import React from "react";
import { useState } from "react";
import styles from "./hogtile.module.css";

function Hogtiles({hogData}) {
    const [selectedHog, setSelectedHog] = useState(null);

    function handleClick(hog) {
        setSelectedHog(hog);
    }

    return(
        <div className = "ui grid container">
            {hogData.map((hog) => (
                <div aria-label="hog card" key={hog.name} onClick={() => handleClick(hog)}>
                    <h3>Name: {hog.name} </h3>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>Specialty: {hog.specialty}</div>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>{hog.greased ? "Greased" : "Not greased"}</div>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>Weight: {hog.weight}</div>
                    <div className = {selectedHog===hog ? `${styles.extraInfo}` : `${styles.hiddenInfo}`}>The Highest Medal Achieved:{hog["highest medal achieved"]}</div>
                    <img src = {hog.image}></img>
                </div>
            ))}
        </div>
    )
}

export default Hogtiles