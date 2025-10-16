import React, { useState } from "react";
import Nav from "./Nav";
import Hogtiles from "./hogtile"
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const[greasedBox, setGreasedBox] = useState(false);
	const[hogNameSearch, setHogSearchName] = useState("");

	function handleGreaseBox(event) {
		setGreasedBox(event.target.checked);
	}
	function handleNameSearch(event) {
		setHogSearchName(event.target.value)
	}

	return (
		<div className="App">
			<Nav />
			<Filter onChange={handleGreaseBox} onTextChange={handleNameSearch}/>
			<Hogtiles hogData={hogs} greasedBox={greasedBox} hogNameSearch={hogNameSearch}/>
		</div>
	);
}

export default App;
