import React from "react";
import insta1 from "../images/insta1.png"
import insta2 from "../images/insta2.png"
import insta3 from "../images/insta3.png"
function Instagram() {
	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col gap-4 py-[10vh] text-white bg-black w-screen h-[70vh] text-center">
				<p className="font-bold text-[3rem]">See our Instagram posts</p>
				<p className="font-semibold text-[1.4rem]">stay informed</p>
			</div>
			<div className="w-scren flex flex-row justify-between items-end px-[15vw]">
				<div className="relative bottom-[30vh] h-[60vh] w-[20vw] flex flex-col bg-neutral-100">
					<div >
					<img src={insta1} alt="welcome" className="" />
					</div>
					<div className="flex flex-col gap-3 p-4">
						<h1 className="font-semibold text-[2rem]">Title</h1>
						<p className="text-[1.1rem]">
						Just unassailable✨We are the vanquishers, We are the winners of the "Asia Cup" for the record 8th time.
						</p>
						<p className="font-semibold">Author Name</p>
					</div>
				</div>

				<div className="relative bottom-[30vh] h-[60vh] w-[20vw] flex flex-col bg-neutral-100">
					<div>
						<img src={insta2} alt="welcome" className="" />
					</div>
					<div className="flex flex-col gap-3 p-4">
						<h1 className="font-semibold text-[2rem]">Title</h1>
						<p className="text-[1.1rem]">
						Witness the soaring triumph of India as they conquer the Asian Hockey Championship🏆
						</p>
						<p className="font-semibold">Author Name</p>
					</div>
				</div>

				<div className="relative bottom-[30vh] h-[60vh] w-[20vw] flex flex-col bg-neutral-100">
					<div>
						<img src={insta3} alt="welcome" className="" />
					</div>
					<div className="flex flex-col gap-3 p-4">
						<h1 className="font-semibold text-[2rem]">Title</h1>
						<p className="text-[1.1rem]">
						Overjoyed to be crowned as the SAFF Championship conquistadors for the 9th time🏑!!
						</p>
						<p className="font-semibold">Author Name</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Instagram;
