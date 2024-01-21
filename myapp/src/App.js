import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Ambassador from "./pages/Ambassador";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/gallery" element={<Gallery />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/ambassador" element={<Ambassador />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
