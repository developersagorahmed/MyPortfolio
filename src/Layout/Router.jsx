import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Components/Home/Home";
import About from "../Components/Home/About";
import Resume from "../Components/Home/Resume";
import Portfolio from "../Components/Home/Portfolio";
import Services from "../Components/Home/Services";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/resume",
				element: <Resume></Resume>,
			},
			{
				path: "/portfolio",
				element: <Portfolio></Portfolio>,
			},
			{
				path: "/service",
				element: <Services></Services>,
			},
		],
	},
]);
