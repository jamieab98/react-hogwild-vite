import React, { useState } from "react";
import Nav from "./Nav";
import Hogtiles from "./hogtile"
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {

	return (
		<div className="App">
			<Nav />
			<Filter />
			<Hogtiles hogData = {hogs} />
		</div>
	);
}

export default App;
