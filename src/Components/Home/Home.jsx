import About from "./About";
import Portfolio from "./Portfolio";
import ReactTyping from "./ReactTyping";
import Resume from "./Resume";
import Services from "./Services";

const Home = () => {
	return (
		<>
			<div
				className="ml-[70px] h-[100vh] w-[1340px]   sticky object-contain "
				style={{
					backgroundImage: `url("https://i.ibb.co/1vrpdT5/jefferson-santos-9-So-Cny-Qmkz-I-unsplash.jpg")`,
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
				}}
			>
				<h1 className="text-[70px] flex ml-[100px] pt-[200px]  text-white font-bold">
					Sagor Ahmed
				</h1>
				<ReactTyping></ReactTyping>
			</div>

			<About></About>
			<Resume></Resume>
			<Portfolio></Portfolio>
			<Services></Services>
		</>
	);
};

export default Home;
