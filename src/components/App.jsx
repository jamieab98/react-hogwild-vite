import React, { useState } from "react";
import Nav from "./Nav";
import Hogtiles from "./hogtile"
import hogs from "../porkers_data";
import Filter from "./Filter";
import NewPig from "./NewPig";

function App() {
	const[greasedBox, setGreasedBox] = useState(false);
	const[hogNameSearch, setHogSearchName] = useState("");
	const[newPigData, setNewPigData] = useState({name: "", weight: "", greased: false
	});

	function handleGreaseBox(event) {
		setGreasedBox(event.target.checked);
	}
	function handleNameSearch(event) {
		setHogSearchName(event.target.value)
	}
	function handleNewPig(event){
		event.preventDefault()
		console.log(newPigData)
	}

	return (
		<div className="App">
			<Nav />
			<Filter onChange={handleGreaseBox} onTextChange={handleNameSearch}/>
			<NewPig newPig={handleNewPig}/>
			<Hogtiles hogData={hogs} greasedBox={greasedBox} hogNameSearch={hogNameSearch}/>
		</div>
	);
}

export default App;
