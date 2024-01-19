import React from "react";
import contactMain from "../images/contactmain.png";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import Navbar from "../components/Navbar";

function Contact(props) {
	const [formData, setFormdata] = React.useState({
		fullName: "",
		email: "",
		message: "",
	});
	function handleChange(event) {
		const { value, name } = event.target;
		setFormdata((prev) => ({
			...prev,
			[name]: value,
		}));
	}
	return (
		<div>
			<Navbar></Navbar>
			<main className="flex mt-36 mx-36 justify-between items-center">
				<img src={contactMain} alt="contact-us" className="" />
				<form className="w-1/3">
					<h1 className="font-bold text-5xl">Contact Us</h1>
					<p className="text-2xl mt-8">
						Get in touch with us for media services and solutions.
					</p>
					<div className="relative flex justify-center flex-col ">
						<MdAccountCircle
							size="25px"
							color="gray"
							className="absolute left-2"
						></MdAccountCircle>
						<input
							type="text"
							placeholder="Full Name"
							onChange={handleChange}
							name="fullName"
							className="w-full shadow-md my-4 pl-10 py-4 text-xl font-medium rounded pr-6 "
						></input>
					</div>
					<div className="relative flex justify-center flex-col ">
						<MdEmail
							size="25px"
							color="gray"
							className="absolute left-2"
						></MdEmail>
						<input
							type="email"
							placeholder="Email address"
							onChange={handleChange}
							name="email"
							className="w-full shadow-md my-4 pl-10 py-4 text-xl font-medium rounded pr-6 "
						></input>
					</div>
					<textarea
						placeholder="How can we assist you?"
						onChange={handleChange}
						name="message"
						className="w-full shadow-md my-4 px-6 py-4 text-xl font-medium rounded "
					></textarea>

					<button className="text-xl font-bold bg-black hover:bg-slate-800 text-white px-8 py-6 rounded-md shadow-md w-full">
						Send the message
					</button>
				</form>
			</main>
		</div>
	);
}

export default Contact;
