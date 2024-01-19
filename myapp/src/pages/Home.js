import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
function Home() {
	return (
		<div className="w-screen min-h-screen">
			<div className="h-screen w-screen">{"LANDING PAGE"}</div>
			<div className="h-[50vh] w-screen flex flex-col gap-10 justify-center items-center custom-shadow">
				<p className="text-[1.3rem]">Join 10,000+ Students</p>
				<div className="flex flex-row items-center gap-6 font-semibold text-[1.6rem]">
					<div>MoU</div>
					<div>Media Cell</div>
					<div>Media Cell</div>
					<div>Media Cell</div>
				</div>
			</div>
			<div className="w-screen flex flex-col justify-center items-center">
				{services.map((service, index) => {
					return (
						<ServiceCard
							service={service}
							key={service.title}
							isreverse={index % 2 === 0}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
