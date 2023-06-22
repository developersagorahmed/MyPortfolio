import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";

const Home = () => {
	return (
		<div className="basis-[84%]">
			<HeroSection />
            <AboutSection />
			<ResumeSection />
		</div>
	);
};

export default Home;
