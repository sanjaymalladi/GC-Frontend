import React from "react";
import image1 from "../images/img1.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";  // Make sure to add the file extension (.png, .jpg, etc.)

function ServiceCard({ service, isreverse }) {
	const { title, desc } = service;

	// Assuming you want to use different images based on the index
	const images = [image1, image2, image3];
	const imageIndex = Math.min(images.length - 1, Math.floor(Math.random() * images.length));

	return (
		<div
		className={`py-[14vh] w-screen mx-auto flex ${
			isreverse ? "md:flex-row" : "md:flex-row-reverse"
		} flex-col gap-24 px-[15vw]`}
		>
		<div
			className="h-[250px] w-[450px] bg-slate-400"
			style={{ backgroundImage: `url(${images[imageIndex]})`, backgroundSize: "cover" }}
		></div>
		<div className="flex flex-col gap-7 justify-between">
			<h1 className="text-[1.6rem] font-semibold">{title}</h1>
			<p className="text-[1.3rem]">{desc}</p>
			<div>
			<button className="bg-black px-5 py-2 text-white hover:bg-neutral-900">
				Learn More
			</button>
			</div>
		</div>
		</div>
	);
}

export default ServiceCard;
