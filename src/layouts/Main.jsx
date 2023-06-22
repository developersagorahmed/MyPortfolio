import React from "react";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home/Home";

const Main = () => {
	return (
		<div className="flex">
			<Sidebar />
			<Home />
		</div>
	);
};

export default Main;
