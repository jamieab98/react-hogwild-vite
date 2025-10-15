import React from "react";
import Nav from "./Nav";
import Hogtiles from "./hogtile"
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hogtiles hogData = {hogs} />
		</div>
	);
}

export default App;
