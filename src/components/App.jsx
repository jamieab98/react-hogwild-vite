import React, { useState } from "react";
import Nav from "./Nav";
import Hogtiles from "./hogtile"
import hogs from "../porkers_data";
import Filter from "./Filter";
import NewPig from "./NewPig";

function App() {
	const[greasedBox, setGreasedBox] = useState(false);
	const[hogNameSearch, setHogSearchName] = useState("");
	const[newPigData, setNewPigData] = useState({name: "", weight: "", greased: false, specialty: ""
	});
	const[hogList, setHogList] = useState(hogs);
	const [sortBy, setSortBy] = useState("");

	function handleGreaseBox(event) {
		setGreasedBox(event.target.checked);
	}
	function handleNameSearch(event) {
		setHogSearchName(event.target.value)
	}
	function handleNewPig(event){
		event.preventDefault()
		setHogList(prev => [...prev, newPigData]);
		setNewPigData({name: "", weight: "", greased: false});
	}
	const sortedHogs = [...hogList].sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name);
		} else if (sortBy === "weight") {
			return parseFloat(a.weight) - parseFloat(b.weight);
		}
		return 0;
	});

	return (
		<div className="App">
			<Nav />
			<Filter onChange={handleGreaseBox} onTextChange={handleNameSearch} onSortChange={(e) => setSortBy(e.target.value)}/>
			<NewPig newPig={handleNewPig} newPigData={newPigData} setNewPigData={setNewPigData}/>
			<Hogtiles hogData={sortedHogs} greasedBox={greasedBox} hogNameSearch={hogNameSearch}/>
		</div>
	);
}

export default App;
