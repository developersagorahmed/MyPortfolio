import { RouterProvider } from "react-router-dom";
import "./App.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import router from "./routes/route";

function App() {
	return (
		<div className="App font-spaceGrotesk">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
