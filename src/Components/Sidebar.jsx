import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaSkype,
	
} from "react-icons/fa";
import { BiHome, BiServer, BiUser, BiMailSend } from "react-icons/bi";
import { TiDocument } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";



const Sidebar = () => {
	return (
		<div className="bg-[#040b14] basis-full lg:basis-[16%] py-5 px-3 flex flex-col justify-between h-screen sticky top-0">
			<div className="flex flex-col text-white justify-center items-center space-y-4 ">
				<img
					className="w-28 rounded-full h-28 object-cover ring-8 ring-primary/30"
					src="https://i.ibb.co/hY0FqPz/1671894808582.jpg"
					alt="sagor ahmed image"
				/>
				<h2 className="">Sagor Ahmed</h2>
				<div className="flex space-x-3 justify-center">
					<a
						className="hover:bg-primary w-8 h-8 bg-[#212431] grid content-center justify-center rounded-full duration-300"
						target="_blank"
						href="https://twitter.com/developerSagor"
					>
						<FaTwitter />
					</a>
					<a
						className="hover:bg-primary w-8 h-8 bg-[#212431] grid content-center justify-center rounded-full duration-300"
						target="_blank"
						href="https://www.facebook.com/sagorahmed090400/"
					>
						<FaFacebookF />
					</a>
					<a
						className="hover:bg-primary w-8 h-8 bg-[#212431] grid content-center justify-center rounded-full duration-300"
						target="_blank"
						href="https://www.instagram.com/sagorahmed090400/"
					>
						<FaInstagram />
					</a>
					<a
						className="hover:bg-primary w-8 h-8 bg-[#212431] grid content-center justify-center rounded-full duration-300"
						target="_blank"
						href="https://join.skype.com/invite/qNijeGlN9gsb"
					>
						<FaSkype />
					</a>
					<a
						className="hover:bg-primary w-8 h-8 bg-[#212431] grid content-center justify-center rounded-full duration-300"
						target="_blank"
						href="https://www.linkedin.com/in/sagor-ahmed-02a472271/"
					>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
			<ul className="flex flex-col justify-center items-left px-6 space-y-6">
				<li>
					<a
						className="flex items-center space-x-2 text-[#a8a9b4] group hover:text-white"
						href="#home"
					>
						<BiHome className="group-hover:text-primary" size={22} />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a
						className="flex items-center space-x-2 text-[#a8a9b4] group hover:text-white"
						href="#about"
					>
						<BiUser className="group-hover:text-primary" size={22} />{" "}
						<span>About</span>
					</a>
				</li>
				<li>
					<a
						className="flex items-center space-x-2 text-[#a8a9b4] group hover:text-white"
						href="#resume"
					>
						<TiDocument className="group-hover:text-primary" size={22} />
						<span>Resume</span>
					</a>
				</li>
				<li>
					<a
						className="flex items-center space-x-2 text-[#a8a9b4] group hover:text-white"
						href="#"
					>
						<ImProfile className="group-hover:text-primary" size={22} />
						<span>Portfolio</span>
					</a>
				</li>
				<li>
					<a
						className="flex items-center space-x-2 text-[#a8a9b4] group hover:text-white"
						href="#"
					>
						<BiServer className="group-hover:text-primary" size={22} />{" "}
						<span>Services</span>
					</a>
				</li>
				<li>
					<a
						className="flex items-center space-x-2 text-[#a8a9b4] group hover:text-white"
						href="#"
					>
						<AiOutlineMail className="group-hover:text-primary" size={22} />{" "}
						<span>Contact</span>
					</a>
				</li>
			</ul>
			<div className="text-white text-center space-y-1">
				<div className="flex items-center space-x-1 justify-center">
					<small>&copy;</small>
					<h3>Copyright Sagor</h3>
				</div>
				<div>Designed by <a href="https://www.facebook.com/sagorahmed090400/" target="" className="text-[#149DD0]">Sagor Ahmed</a></div>
			</div>
		</div>
	);
};

export default Sidebar;
