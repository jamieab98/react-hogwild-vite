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
	const[hogList, setHogList] = useState(hogs);

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

	return (
		<div className="App">
			<Nav />
			<Filter onChange={handleGreaseBox} onTextChange={handleNameSearch}/>
			<NewPig newPig={handleNewPig} newPigData={newPigData} setNewPigData={setNewPigData}/>
			<Hogtiles hogData={hogList} greasedBox={greasedBox} hogNameSearch={hogNameSearch}/>
		</div>
	);
}

export default App;
