import React from "react";
import ReactTyping from "../../components/ReactTyping";

const HeroSection = () => {
	return (
		<div id="home"
			className="bg-cover h-screen w-full"
			style={{
				backgroundImage: `url("https://i.ibb.co/1vrpdT5/jefferson-santos-9-So-Cny-Qmkz-I-unsplash.jpg")`,
				backgroundAttachment: "fixed",
			}}
		>
			<div className="ml-[100px] pt-[200px] flex flex-col space-y-5">
				<h1 className="text-[70px] text-white font-bold">Sagor Ahmed</h1>
				<ReactTyping></ReactTyping>
			</div>
		</div>
	);
};

export default HeroSection;
