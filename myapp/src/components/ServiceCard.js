import React from "react";

function ServiceCard({ service, isreverse }) {
	const title = service.title;
	const desc = service.desc;
	return (
		<div
			className={`py-[14vh] w-screen mx-auto flex ${
				isreverse ? "md:flex-row" : "md:flex-row-reverse"
			} flex-col gap-24 px-[15vw]`}
		>
			<div className="h-[250px] w-[450px] bg-slate-400"></div>
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
