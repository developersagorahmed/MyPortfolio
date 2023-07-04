import React from "react";
import cupImage from "../../assets/cup.jpg";
import serumImage from "../../assets/serum.jpg";
import cream from "../../assets/cream.jpg";
import tob from "../../assets/tob.jpg";
import perfume from "../../assets/perfume.jpg";
import lotion from "../../assets/lotion.jpg";
import bottle from "../../assets/bottle.jpg";
import chir from "../../assets/chir.jpg";
import dish from "../../assets/dish.jpg";
import dish2 from "../../assets/web2.png";
import dish3 from "../../assets/web1.png";
import dish4 from "../../assets/web4.jpeg";

import { BiLink, BiPlus } from "react-icons/bi";

const PortfolioSection = () => {
	return (
		<section
			id="portfolio"
			className="p-10 md:px-20 lg:px-24 py-10 bg-[#f5f8fd]"
		>
			<div className="mb-2">
				<h1 className=" text-[#173B6C]">Projects</h1>
				<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
			</div>
			<p className="text-[#272829]">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi error
				voluptatum eos veniam aut, quibusdam adipisci natus in labore eveniet.
				Corporis rem nesciunt, est obcaecati nobis mollitia suscipit?
				Repellendus aspernatur corporis harum eaque corrupti hic quibusdam
				voluptates iste eos sequi.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				<div className="rounded overflow-hidden group relative ">
					<img src={dish2} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="https://github.com/developersagorahmed/music-school-server"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Server Link
						</a>
						<a
							href="https://github.com/developersagorahmed/Music-School-Client"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Code link <BiLink size={30} />
						</a>
						<a
							href="https://music-book-website.web.app/"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Live site
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={dish3} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="https://github.com/developersagorahmed/toys-market-website-server"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Server Link
						</a>
						<a
							href="https://github.com/developersagorahmed/toys-market-website"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Code link <BiLink size={30} />
						</a>
						<a
							href="https://action-toys-assignment-11.web.app"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Live site
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={dish4} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="https://github.com/developersagorahmed/testy-food-server-side"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Server Link
						</a>
						<a
							href="https://github.com/developersagorahmed/testy-food-website"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Code link <BiLink size={30} />
						</a>
						<a
							href="https://assignment-10-testy-food.web.app"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							Live site
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={tob} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiPlus size={30} />
						</a>
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiLink size={30} />
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={perfume} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiPlus size={30} />
						</a>
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiLink size={30} />
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={lotion} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiPlus size={30} />
						</a>
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiLink size={30} />
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={bottle} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiPlus size={30} />
						</a>
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiLink size={30} />
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={chir} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiPlus size={30} />
						</a>
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiLink size={30} />
						</a>
					</div>
				</div>
				<div className="rounded overflow-hidden group relative">
					<img src={dish} alt="" />
					<div className="absolute left-0 -bottom-16 group-hover:bottom-0 flex justify-between w-full duration-300">
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiPlus size={30} />
						</a>
						<a
							href="#"
							className="bg-primary/50 hover:bg-primary duration-200 p-2 basis-1/2 flex justify-center text-white"
						>
							<BiLink size={30} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
