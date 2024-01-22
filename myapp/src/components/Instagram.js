import React from "react";

function Instagram() {
	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col gap-4 py-[10vh] text-white bg-black w-screen h-[70vh] text-center">
				<p className="font-bold text-[3rem]">See our Instagram posts</p>
				<p className="font-semibold text-[1.4rem]">stay informed</p>
			</div>
			<div className="w-scren flex flex-row justify-between items-end px-[15vw]">
				<div className="relative bottom-[30vh] h-[60vh] w-[20vw] flex flex-col bg-neutral-100">
					<div className="bg-violet-200 w-full h-[25vh]"></div>
					<div className="flex flex-col gap-3 p-4">
						<h1 className="font-semibold text-[2rem]">Title</h1>
						<p className="text-[1.1rem]">
							lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem
							ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum
							fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi
							lorem ipsum fi
						</p>
						<p className="font-semibold">Author Name</p>
					</div>
				</div>

				<div className="relative bottom-[30vh] h-[60vh] w-[20vw] flex flex-col bg-neutral-100">
					<div className="bg-violet-200 w-full h-[25vh]"></div>
					<div className="flex flex-col gap-3 p-4">
						<h1 className="font-semibold text-[2rem]">Title</h1>
						<p className="text-[1.1rem]">
							lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem
							ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum
							fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi
							lorem ipsum fi
						</p>
						<p className="font-semibold">Author Name</p>
					</div>
				</div>

				<div className="relative bottom-[30vh] h-[60vh] w-[20vw] flex flex-col bg-neutral-100">
					<div className="bg-violet-200 w-full h-[25vh]"></div>
					<div className="flex flex-col gap-3 p-4">
						<h1 className="font-semibold text-[2rem]">Title</h1>
						<p className="text-[1.1rem]">
							lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem
							ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum
							fi lorem ipsum fi lorem ipsum fi lorem ipsum fi lorem ipsum fi
							lorem ipsum fi
						</p>
						<p className="font-semibold">Author Name</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Instagram;
