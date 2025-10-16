import React, { useState } from "react";
import Nav from "./Nav";
import Hogtiles from "./hogtile"
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const[greasedBox, setGreasedBox] = useState(false);

	function handleGreaseBox(event) {
		setGreasedBox(event.target.checked);
		console.log(greasedBox);
	};

	return (
		<div className="App">
			<Nav />
			<Filter onChange={handleGreaseBox}/>
			<Hogtiles hogData={hogs} greasedBox={greasedBox} />
		</div>
	);
}

export default App;
