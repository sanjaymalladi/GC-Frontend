import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Navbar from "../components/Navbar";
import Instagram from "../components/Instagram";
function Home() {
	return (
		<div className="w-screen min-h-screen">
			<Navbar></Navbar>
			<div className="h-screen w-screen flex flex-row items-center px-[10vw] gap-[5vw]">
				<div className="flex flex-col gap-10">
					<p className="font-bold text-[3.5rem]">
						Welcome to the <br></br>Media Cell of<br></br> NIT Andhra Pradesh
					</p>
					<p className="text-[1.3rem]">Discover the Power of Words</p>
					<button className="text-[1.3rem] text-white bg-black text-center py-2">
						Get Started
					</button>
				</div>
				<div>
					<div className="w-[300px] h-[600px] bg-neutral-50"></div>
				</div>
				<div>
					<div className="bg-violet-300 h-[250px] w-[250px]"></div>
				</div>
			</div>
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

			<Instagram />

			<div className="flex flex-row justify-between px-[15vw] my-10 py-[10vh] h-screen w-screen bg-neutral-200">
				<div className="flex flex-col pr-[8vw]">
					<div className="text-[1.4rem]">Feature</div>
					<h1 className="text-[3rem] py-10 font-bold">Experience the best</h1>
					<p className="pt-[8vh] text-[1.3rem]">
						Sign up for a free demo and we will show everything about our
						project.
					</p>
					<button className="py-4 text-[1.3rem] bg-black text-white my-7">
						Sign up for free
					</button>
				</div>
				<div>
					<div className="bg-white h-[80vh] w-[30vw]"></div>
				</div>
			</div>
		</div>
	);
}

export default Home;
