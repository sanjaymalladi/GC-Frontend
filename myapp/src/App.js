import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/gallery" element={<Gallery />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
