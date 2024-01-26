import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Navbar() {
	return (
		<>
			<nav className="py-12 shadow-md px-36 sticky top-0 z-10">
				<ul className="flex justify-between items-center">
					<div className="flex items-center">
					<li>
						<img
							src={logo}
							alt="welcome"
							className=""
							style={{ width: '100px', height: 'auto', borderRadius: '50%' }}
						/>
						</li>
						<li className="mx-4 text-xl font-bold">
							<Link to="/gallery">Gallery</Link>
						</li>
						<li
							className="mx-4 text-xl font-bold
					"
						>
							<Link to="/ambassador">Program</Link>
						</li>
						<li
							className="mx-4 text-xl font-bold
					"
						>
							<Link to="/contact">Contact</Link>
						</li>
					</div>
					<div className="flex items-center">
						<li
							className="mx-4 text-xl font-bold
					"
						>
							<Link to="/">Login</Link>
						</li>
						<li
							className="mx-4 text-xl font-bold
					 bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-md"
						>
							<Link to="/">Sign up</Link>
						</li>
					</div>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
