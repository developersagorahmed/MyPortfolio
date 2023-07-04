import ReactTypingEffect from "react-typing-effect";

const ReactTyping = () => {
	const text = ["Web Developer.", "Designer", "Photographer"];
	return (
		<>
			<div className="text-white text-[50px] pt-5 font-semibold">
				I'm {}
				<span className="text-red-200 ">
					<ReactTypingEffect text={text} speed={5} />
				</span>
			</div>
		</>
	);
};

export default ReactTyping;
