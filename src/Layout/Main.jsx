import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Main = () => {
	return (
		<div>
			<div className="flex">
				<Sidebar></Sidebar>
				<div className="flex-1  ml-64">
					<div className="p-5">
						<div>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
