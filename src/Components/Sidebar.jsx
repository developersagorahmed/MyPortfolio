import { Link, NavLink } from "react-router-dom";
import {
	RiFacebookFill,
	RiInstagramFill,
	RiSkypeFill,
	RiTwitterFill,
} from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { BiServer } from "react-icons/bi";

import { BiHome, BiUser } from "react-icons/bi";

const Sidebar = () => {
	return (
		<>
			{/* Small Screen Navbar */}
			<div className="bg-gray-100  text-gray-800 flex justify-between md:hidden">
				<div>
					<div className="block cursor-pointer p-4 font-bold">
						<img src="https://i.ibb.co/KWNkSSm/i-am-admin.jpg" alt="" />
					</div>
				</div>
			</div>
			{/* Sidebar */}
			<div
				className={`z-10 w-[340px] md:fixed flex flex-col justify-between overflow-x-hidden bg-[#040B14] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${"-translate-x-full"}  md:translate-x-0  transition duration-200 ease-in-out`}
			>
				<div>
					{/* Branding & Profile Info */}
					<div>
						<Link to="/dashboard">
							<div className="w-full hidden md:flex py-2 justify-center items-center bg- mx-auto">
								<img src="" alt="" />
							</div>
						</Link>
						<div className="flex flex-col items-center -mx-2">
							<img
								className="object-cover w-[150px] border-[9px] border-[#2C2F3F] h-[150px] mx-2 rounded-full"
								src="https://i.ibb.co/hY0FqPz/1671894808582.jpg"
								alt="avatar"
								referrerPolicy="no-referrer"
							/>

							<h3 className="text-3xl mt-4 font-bold text-white">
								Sagor Ahmed
							</h3>

							<div className="flex  w-full mt-8 justify-evenly  text-3xl">
								<a href="https://twitter.com/developerSagor">
									<div className="p-[10px] bg-[#212431] hover:bg-[#1A6A94] duration-500 rounded-full">
										<RiTwitterFill className="text-white "></RiTwitterFill>
									</div>
								</a>
								<a href="https://www.facebook.com/sagorahmed090400/">
									<div className="p-[10px] bg-[#212431] hover:bg-[#1A6A94] duration-500 rounded-full">
										<RiFacebookFill className="text-white"></RiFacebookFill>
									</div>
								</a>
								<a href="https://www.instagram.com/sagorahmed090400/">
									<div className="p-[10px] bg-[#212431] hover:bg-[#1A6A94] duration-500 rounded-full">
										<RiInstagramFill className="text-white"></RiInstagramFill>
									</div>
								</a>
								<a href="https://join.skype.com/invite/qNijeGlN9gsb">
									<div className="p-[10px] bg-[#212431] hover:bg-[#1A6A94] duration-500 rounded-full">
										<RiSkypeFill className="text-white"></RiSkypeFill>
									</div>
								</a>
								<a href="https://www.linkedin.com/in/sagor-ahmed-02a472271/">
									<div className="p-[10px] bg-[#212431] hover:bg-[#1A6A94] duration-500 rounded-full">
										<FaLinkedinIn className="text-white"></FaLinkedinIn>
									</div>
								</a>
							</div>
						</div>
					</div>

					{/* Nav Items */}
					<div className="flex flex-col justify-between flex-1 mt-6">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-[#149DB6] text-[25px] text-center "
									: "text-[#A3A995] text-[25px] text-center hover:text-[#149DB6] duration-300"
							}
						>
							<div className="flex  mt-5 justify-left ml-8">
								<BiHome className="text-[30px] mr-5 mt-[2px]"></BiHome> Home
							</div>
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? "text-[#149DB6] text-[25px] text-center "
									: "text-[#A3A995] text-[25px] text-center hover:text-[#149DB6] duration-300 "
							}
						>
							<div className="flex  mt-5 justify-left ml-8">
								<BiUser className="text-[30px] mr-5 mt-[2px]"></BiUser> About
							</div>
						</NavLink>
						<NavLink
							to="/resume"
							className={({ isActive }) =>
								isActive
									? "text-[#149DB6] text-[25px] text-center "
									: "text-[#A3A995] text-[25px] text-center hover:text-[#149DB6] duration-300 "
							}
						>
							<div className="flex  mt-5 justify-left ml-8">
								<TiDocument className="text-[30px] mr-5 mt-[2px]"></TiDocument>{" "}
								Resume
							</div>
						</NavLink>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive
									? "text-[#149DB6] text-[25px] text-center "
									: "text-[#A3A995] text-[25px] text-center hover:text-[#149DB6] duration-300 "
							}
						>
							<div className="flex  mt-5 justify-left ml-8">
								<ImProfile className="text-[30px] mr-5 mt-[2px]"></ImProfile>{" "}
								Portfolio
							</div>
						</NavLink>
						<NavLink
							to="/service"
							className={({ isActive }) =>
								isActive
									? "text-[#149DB6] text-[25px] text-center "
									: "text-[#A3A995] text-[25px] text-center hover:text-[#149DB6] duration-300 "
							}
						>
							<div className="flex  mt-5 justify-left ml-8">
								<BiServer className="text-[30px]  mr-5 mt-[2px]"></BiServer>{" "}
								Services
							</div>
						</NavLink>
					</div>
				</div>
				<footer>
					<h1 className="text-center text-white text-xl font-semibold">
						© Copyright Sagor
					</h1>
					<h3 className="text-center text-white text-xl font-semibold">
						Designed by <span className="text-[#149DD0]">Sagor Ahmed</span>
					</h3>
				</footer>
			</div>
		</>
	);
};

export default Sidebar;
