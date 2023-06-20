import ReactTypingEffect from "react-typing-effect";
const ReactTyping = () => {
	const text = ["Web Developer.", "Designer", "Photographer"];

	return (
		<>
			<h1 className="text-[50px] text-white font-semibold ml-[100px] ">
				I'm {}
				<span className="text-red-200 ">
					<ReactTypingEffect text={text} />
				</span>
			</h1>
		</>
	);
};

export default ReactTyping;
