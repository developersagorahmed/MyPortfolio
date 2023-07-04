import React from "react";
import { MdOutlineWebAsset } from "react-icons/md";
import { BsFillBrushFill } from "react-icons/bs";
const ServiceSection = () => {
	return (
		<section id="services" className="p-10 md:px-20 lg:px-24 py-10">
			<div className="mb-2">
				<h1 className=" text-[white]">Services</h1>
				<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
			</div>
			<p className="mb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quasi,
				ipsa fugit nam voluptatem vitae et animi facilis necessitatibus fuga
				voluptatibus? Aliquam corporis harum ducimus impedit inventore accusamus
				placeat voluptatibus, reiciendis assumenda, cupiditate nisi voluptatem
				natus accusantium dolorum delectus? Reprehenderit.
			</p>
			<div className="grid grid-cols-3 gap-y-14 gap-x-10">
				<div className="flex space-x-4 items-start group">
					<div className="border-primary border bg-primary grid content-center justify-center p-2 rounded-full text-white group-hover:bg-transparent group-hover:text-primary group-hover:border-primary duration-300">
						<BsFillBrushFill size={35} />
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Web Design</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							sunt earum blanditiis totam suscipit atque repellendus.
						</p>
					</div>
				</div>
				<div className="flex space-x-4 items-start group">
					<div className="border-primary border bg-primary grid content-center justify-center p-2 rounded-full text-white group-hover:bg-transparent group-hover:text-primary group-hover:border-primary duration-300">
						<MdOutlineWebAsset size={35} />
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Web Development</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							sunt earum blanditiis totam suscipit atque repellendus.
						</p>
					</div>
				</div>
				<div className="flex space-x-4 items-start group">
					<div className="border-primary border bg-primary grid content-center justify-center p-2 rounded-full text-white group-hover:bg-transparent group-hover:text-primary group-hover:border-primary duration-300">
						<MdOutlineWebAsset size={35} />
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Web Development</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							sunt earum blanditiis totam suscipit atque repellendus.
						</p>
					</div>
				</div>
				<div className="flex space-x-4 items-start group">
					<div className="border-primary border bg-primary grid content-center justify-center p-2 rounded-full text-white group-hover:bg-transparent group-hover:text-primary group-hover:border-primary duration-300">
						<MdOutlineWebAsset size={35} />
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Web Development</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							sunt earum blanditiis totam suscipit atque repellendus.
						</p>
					</div>
				</div>
				<div className="flex space-x-4 items-start group">
					<div className="border-primary border bg-primary grid content-center justify-center p-2 rounded-full text-white group-hover:bg-transparent group-hover:text-primary group-hover:border-primary duration-300">
						<MdOutlineWebAsset size={35} />
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Web Development</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							sunt earum blanditiis totam suscipit atque repellendus.
						</p>
					</div>
				</div>
				<div className="flex space-x-4 items-start group">
					<div className="border-primary border bg-primary grid content-center justify-center p-2 rounded-full text-white group-hover:bg-transparent group-hover:text-primary group-hover:border-primary duration-300">
						<MdOutlineWebAsset size={35} />
					</div>
					<div>
						<h3 className="text-xl font-bold mb-2">Web Development</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							sunt earum blanditiis totam suscipit atque repellendus.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
