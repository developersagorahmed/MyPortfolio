import { RouterProvider } from "react-router-dom";
import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import router from "./routes/route";
import ParticleBg from "./Components/ParticleBG/ParticleBg";

function App() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	return (
		<div className="App font-spaceGrotesk">
			<RouterProvider router={router} />
			<ParticleBg></ParticleBg>
		</div>
	);
}

export default App;
