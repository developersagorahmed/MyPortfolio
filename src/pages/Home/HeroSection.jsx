import ReactTyping from "../../components/ReactTyping";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import resume from "../../assets/Sagor-Ahmed-Resume.pdf";
const HeroSection = () => {
	return (
		<div
			id="home"
			className="bg-cover h-screen w-full"
			style={{
				backgroundImage: `url("https://i.ibb.co/1vrpdT5/jefferson-santos-9-So-Cny-Qmkz-I-unsplash.jpg")`,
				backgroundAttachment: "fixed",
			}}
		>
			<div className="ml-[100px] pt-[200px] flex flex-col space-y-5">
				<h1 className="text-[70px] text-white font-bold">Sagor Ahmed</h1>

				<ReactTyping></ReactTyping>

				<div>
					<a href={resume} download="Resume">
						<button className="text-3xl flex border border-2 p-5 hover:bg-black hover:border-black duration-500">
							Download Resume{" "}
							<BsFillArrowDownCircleFill className="ml-6  text-4xl"></BsFillArrowDownCircleFill>{" "}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
