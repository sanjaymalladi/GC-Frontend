import React from "react";
import { BiCodeAlt } from "react-icons/bi";

function Card(props) {
	return (
		<div className="p-5 border-4 shadow-md rounded-3xl relative">
			<img className="w-full" src={props.img} alt="event-img"></img>
			<h2 className="font-bold mt-4 text-2xl">{props.name}</h2>
			<p className="my-2">{props.subtitle}</p>
			<div className="mt-4 flex items-center justify-between">
				<div className="flex items-center ">
					<BiCodeAlt />
					<span className="ml-2 font-bold text-lg">{props.price}</span>
				</div>
				<p className="text-end p-0 font-bold text-lg">{props.level}</p>
			</div>
			<button className="bg-white px-6 py-2 text-black rounded-md absolute top-8 right-8 font-bold shadow-2xl border-2 ">
				More details
			</button>
		</div>
	);
}

export default Card;
