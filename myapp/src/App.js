import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/gallery" element={<Gallery />}></Route>
				{/* <Route path="/" element={<Navbar />}></Route> */}
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
