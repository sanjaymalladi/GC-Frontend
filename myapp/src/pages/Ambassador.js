import React from "react";
import Navbar from "../components/Navbar";

function Ambassador() {
	const [formData, setFormdata] = React.useState({
		name: "",
		email: "",
		message: "",
		phone: "",
		dob: "",
		nationality: "",
		isIntrested: true,
	});
	function handleChange(event) {
		const { value, name, type, checked } = event.target;
		setFormdata((prev) => ({
			...prev,
			[name]: type === "radio" ? checked : value,
		}));
	}
	return (
		<div>
			<Navbar></Navbar>
			<form className="mt-20 px-36">
				<h2 className="font-bold text-2xl mb-16 tracking-wider">
					Lorem Ipsum Services
				</h2>
				<h2 className="font-bold text-2xl tracking-wider">
					Ambassador Details
				</h2>
				<p className="text-lg mb-14">Provide Your Information</p>
				<div className="flex justify-between mb-6">
					<div className="w-2/5">
						<label htmlFor="email" className="font-semibold text-xl">
							Email Address
						</label>
						<br></br>
						<input
							type="email"
							id="email"
							placeholder="Email address"
							name="email"
							onChange={handleChange}
							className="w-full shadow-lg my-4 text-xl font-medium rounded-lg px-10 py-8 mt-8"
						></input>
					</div>
					<div className="w-2/5">
						<label htmlFor="phone" className="font-semibold text-xl">
							Phone Number
						</label>
						<br></br>
						<input
							type="number"
							id="phone"
							placeholder="+(XX) XX XX XX XX"
							name="phone"
							onChange={handleChange}
							className="w-full shadow-lg my-4 text-xl font-medium rounded-lg px-10 py-8 mt-8"
						></input>
					</div>
				</div>
				<div className="flex justify-between mb-6">
					<div className="w-2/5">
						<label htmlFor="name" className="font-semibold text-xl">
							Full Name
						</label>
						<br></br>
						<input
							type="text"
							id="name"
							placeholder="Enter your name"
							name="name"
							onChange={handleChange}
							className="w-full shadow-lg my-4 text-xl font-medium rounded-lg px-10 py-8 mt-8"
						></input>
					</div>
					<div className="w-2/5">
						<label htmlFor="dob" className="font-semibold text-xl">
							Date of Birth
						</label>
						<br></br>
						<input
							type="date"
							id="dob"
							placeholder="DD-MM-YYYY"
							name="dob"
							onChange={handleChange}
							className="w-full shadow-lg my-4 text-xl font-medium rounded-lg px-10 py-8 mt-8"
						></input>
					</div>
				</div>
				<div className="flex justify-between mb-6">
					<div className="w-2/5">
						<label htmlFor="nationality" className="font-semibold text-xl">
							Nationality
						</label>
						<br></br>
						<input
							type="text"
							id="nationality"
							placeholder="Nationality"
							name="nationality"
							onChange={handleChange}
							className="w-full shadow-lg my-4 text-xl font-medium rounded-lg px-10 py-8 mt-8"
						></input>
					</div>
					<div className="w-2/5">
						<label htmlFor="gender" className="font-semibold text-xl">
							Gender
						</label>
						<br></br>
						<select
							name="gender"
							id="gender"
							className="w-full shadow-lg my-4 text-xl font-medium rounded-lg px-10 py-8 mt-8"
						>
							<option>---Choose---</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Others">Others</option>
						</select>
					</div>
				</div>
				<div className="shadow-lg rounded-3xl px-16 py-12">
					<h2 className="font-bold text-2xl tracking-wide">
						Are you interested in our services?
					</h2>
					<p className="my-3">
						Become a Campus Ambassador and get exclusive benefits.
					</p>
					<div className="flex mt-8">
						<div className="mr-10 flex items-center">
							<input
								type="radio"
								id="Yes"
								value="Yes"
								name="isIntrested"
								checked={formData.isIntrested}
								className="size-6"
								onChange={handleChange}
							></input>
							<label htmlFor="Yes" className="font-semibold text-2xl ml-4">
								Yes
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="radio"
								id="No"
								value="No"
								name="isIntrested"
								checked={!formData.isIntrested}
								className="size-6"
								onChange={handleChange}
							></input>
							<label htmlFor="No" className="font-semibold text-2xl ml-4">
								No
							</label>
						</div>
					</div>
				</div>
				<div className="flex">
					<button className="text-xl font-bold bg-black hover:bg-slate-800 text-white px-8 py-6 rounded-md shadow-md ml-auto w-40 mt-16">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Ambassador;
