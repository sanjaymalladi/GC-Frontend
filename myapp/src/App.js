import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/nav" element={<Gallery />}></Route>
				<Route path="/" element={<Navbar />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
