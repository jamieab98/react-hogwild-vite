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

    const filteredHogs = hogData.filter(hog => (greasedBox ? hog.greased : true)).filter(hog => hog.name.toLowerCase().includes(hogNameSearch.toLowerCase())).filter(hog => !hiddenHogs.includes(hog.name));

    return(
        <div className = "ui grid container">
            {filteredHogs.map((hog) => (
                <div aria-label="hog card" key={hog.name} onClick={() => handleClick(hog)}
                className = {`ui eight wide column card ${hiddenHogs.includes(hog.name) ? styles.hiddenHog : styles.visibleHog}`}>
                    <h3>{hog.name}</h3>
                    <button onClick={() => handleHideButton(hog)}>Hide Me</button>
                    {selectedHog === hog && (
            <>
              <div className={styles.extraInfo}>
                <span>Specialty: {hog.specialty}</span>
              </div>
              <div className={styles.extraInfo}>
                <span>{hog.greased ? "Greased" : "Nongreased"}</span>
              </div>
              <div className={styles.extraInfo}>
                <span>Weight: </span> <span>{hog.weight}</span>
              </div>
              <div className={styles.extraInfo}>
                <span>Highest Medal Achieved: </span> <span>{hog["highest medal achieved"]}</span>
              </div>
            </>
          )}
                    <img src = {hog.image} alt={`Photo of ${hog.name}`}></img>
                </div>
            ))}
        </div>
    )
}

export default Hogtiles