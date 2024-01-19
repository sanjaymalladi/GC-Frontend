import React from "react";
import gallerymain from "../images/gallerymain.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card7.png";
import card8 from "../images/card8.png";
import card9 from "../images/card9.png";
import { BsSearch } from "react-icons/bs";
import Card from "../components/Card.js";
import Navbar from "../components/Navbar.js";

function Gallery() {
	const [search, setSearch] = React.useState("");
	const upcomingEvents = [
		{
			img: card1,
			name: "Web Design Workshop",
			subtitle: "Learn web design principles",
			price: "Free",
			level: "Beginner",
		},
		{
			img: card2,
			name: "Digital Marketing Seminar",
			subtitle: "Boost your online presence",
			price: "₹100",
			level: "Intermediate",
		},
		{
			img: card3,
			name: "Graphic Design Exhibition",
			subtitle: "Explore creative designs",
			price: "Free",
			level: "Advanced",
		},
	];
	const featuredEvents = [
		{
			img: card4,
			name: "Design Thinking Workshop",
			subtitle: "Improve your problem-solving skills",
			price: "Free",
			level: "Advanced",
		},
		{
			img: card5,
			name: "Past Events Gallery",
			subtitle: "Lorem ipsum dolor sit amet",
			price: "Free",
			level: "Advanced",
		},
		{
			img: card6,
			name: "Past Events Gallery",
			subtitle: "Lorem ipsum dolor sit amet",
			price: "Free",
			level: "Advanced",
		},
	];
	const pastEvents = [
		{
			img: card7,
			name: "Past Events Gallery",
			subtitle: "Lorem ipsum dolor sit amet",
			price: "Free",
			level: "Advanced",
		},
		{
			img: card8,
			name: "Past Events Gallery",
			subtitle: "Lorem ipsum dolor sit amet",
			price: "Free",
			level: "Advanced",
		},
		{
			img: card9,
			name: "Past Events Gallery",
			subtitle: "Lorem ipsum dolor sit amet",
			price: "Free",
			level: "Advanced",
		},
	];
	const upcomingEventsArr = upcomingEvents.map((obj) => (
		<Card
			img={obj.img}
			name={obj.name}
			subtitle={obj.subtitle}
			price={obj.price}
			level={obj.level}
		></Card>
	));
	const featuredEventsArr = featuredEvents.map((obj) => (
		<Card
			img={obj.img}
			name={obj.name}
			subtitle={obj.subtitle}
			price={obj.price}
			level={obj.level}
		></Card>
	));
	const pastEventsArr = pastEvents.map((obj) => (
		<Card
			img={obj.img}
			name={obj.name}
			subtitle={obj.subtitle}
			price={obj.price}
			level={obj.level}
		></Card>
	));
	function handleChange(event) {
		const { value } = event.target;
		setSearch((prev) => value);
	}
	return (
		<div>
			<Navbar></Navbar>
			<main className="mx-32 border-b-4 pb-16 mt-16">
				<img alt="main-event-img" src={gallerymain} className="w-full"></img>
				<div className="w-2/4 mt-12 flex flex-row justify-between">
					<div className="relative flex items-center w-3/4 rounded">
						<BsSearch className="absolute right-4" />
						<input
							type="search"
							placeholder="Search events"
							onChange={handleChange}
							className="py-2 px-4 w-full shadow-md text-lg"
						></input>
					</div>
					<button className="bg-black hover:bg-slate-800 px-6 py-2 text-white rounded">
						Search
					</button>
				</div>
				<div className="mt-8">
					<button className="bg-black hover:bg-slate-800 px-6 py-2 text-white rounded mr-4">
						Filter by date
					</button>
					<button className="bg-black hover:bg-slate-800 px-6 py-2 text-white rounded mr-4">
						Filter by category
					</button>
					<button className="bg-black hover:bg-slate-800 px-6 py-2 text-white rounded mr-4">
						Filter by location
					</button>
				</div>
			</main>
			<section className="mx-32 border-b-4 pb-16">
				<h2 className="font-bold text-2xl mt-6 border-b-4 pb-6">
					Upcoming Events
				</h2>
				<div className="flex justify-between mt-8">{upcomingEventsArr}</div>
			</section>
			<section className="mx-32 border-b-4 pb-16">
				<h2 className="font-bold text-2xl mt-6 border-b-4 pb-6">
					Featured Events
				</h2>
				<div className="flex justify-between mt-8">{featuredEventsArr}</div>
			</section>
			<section className="mx-32 border-b-4 pb-16">
				<h2 className="font-bold text-2xl mt-6 border-b-4 pb-6">Past Events</h2>
				<div className="flex justify-between mt-8">{pastEventsArr}</div>
			</section>
		</div>
	);
}

export default Gallery;
