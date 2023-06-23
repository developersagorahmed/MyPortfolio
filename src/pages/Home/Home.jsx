import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import PortfolioSection from "./PortfolioSection";
import ServiceSection from "./ServiceSection";
import ContactSection from "./ContactSection";

const Home = () => {
	return (
		<div className="basis-[84%]">
			<HeroSection />
			<AboutSection />
			<ResumeSection />
			<PortfolioSection />
			<ServiceSection />
			<ContactSection />
		</div>
	);
};

export default Home;
