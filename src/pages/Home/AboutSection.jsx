import { BsChevronDoubleRight } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const AboutSection = () => {
	return (
		<section id="about">
			<div className="px-28">
				<div className="pt-[50px]">
					<h1 className="  font-bold text-[#173B6C]">About</h1>
					<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
				</div>

				<p className="mt-6 text-[#272829] w-full">
					Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
					aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
					quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
					fugiat sit in iste officiis commodi quidem hic quas.
				</p>
				<div className="flex ">
					<div className="w-[366px] h-[366px] mt-[35px]  rounded overflow-hidden">
						<img
							src="https://i.ibb.co/ncWjGXD/129303963-2799082077sdfsdf017088-4714356675360439919-n-1.jpg"
							alt=""
						/>
					</div>
					<div className="w-7/12 space-y-4 ml-8 mt-8">
						<h1 className="font-semibold text-[#173B84] ">
							UI/UX Designer & Web Developer.
						</h1>

						<p className=" italic text-[#272829]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2  max-w-2xl gap-5">
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Birthday:</span>
								<span>09 April 2000</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Age:</span>
								<span>24</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Website:</span>
								<span>www.sagorahmed.xyz</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Degree:</span>
								<span>HSC</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Phone:</span>
								<span>+880 17384 85960</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Email:</span>
								<span>sagorahmed090400@gmail.com</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">City:</span>
								<span>Gazipur, Bangladesh</span>
							</div>
							<div className="flex items-center space-x-2">
								<BsChevronDoubleRight />
								<span className="font-bold">Freelance:</span>
								<span>Available</span>
							</div>
						</div>
						<p className="">
							Officiis eligendi itaque labore et dolorum mollitia officiis optio
							vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
							incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
							maxime officiis quidem quia. Sed et consectetur qui quia
							repellendus itaque neque. Aliquid amet quidem ut quaerat
							cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
							dolores.
						</p>
					</div>
				</div>
			</div>
			<div className="px-28 mb-16 space-y-10 mt-10">
				<div className="">
					<h1 className="text-[#173B6C]">Facts</h1>
					<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
				</div>
				<p className="  text-[#272829]">
					Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
					aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
					quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
					fugiat sit in iste officiis commodi quidem hic quas.
				</p>
				<div className="flex flex-col md:flex-row gap-6 justify-between">
					<div className="flex space-x-3">
						<HiOutlineEmojiHappy size={70} className=" text-[#149DDD]" />
						<div>
							<h1 className="text-[50px] mb-2 text-[#050D18] font-bold">232</h1>
							<p className="text-[20px] font-bold text-[#050D18]">
								Happy Clients
							</p>
							<p className="font-normal ">consequuntur quae</p>
						</div>
					</div>
					<div className="flex space-x-3">
						<FaBook size={70} className=" text-[#149DDD]" />
						<div>
							<h1 className="text-[50px] mb-2 text-[#050D18] font-bold">521</h1>
							<p className="text-[20px] font-bold text-[#050D18]">Projects</p>
							<p className="font-normal ">adipisci atque cum quia aut</p>
						</div>
					</div>
					<div className="flex space-x-3">
						<BiSupport size={70} className=" text-[#149DDD]" />
						<div>
							<h1 className="text-[50px] mb-2 text-[#050D18] font-bold">1443</h1>
							<p className="text-[20px] font-bold text-[#050D18]">
								Hours Of Support
							</p>
							<p className="font-normal ">aut commodi quaera</p>
						</div>
					</div>
					<div className="flex space-x-3">
						<FiUsers size={70} className=" text-[#149DDD]" />
						<div>
							<h1 className="text-[50px] mb-2 text-[#050D18] font-bold">32</h1>
							<p className="text-[20px] font-bold text-[#050D18]">
								Hard Workers
							</p>
							<p className="font-normal ">rerum asperiores dolor</p>
						</div>
					</div>
				</div>
			</div>

			<div className="space-y-10 bg-[#f5f8fd] px-28 py-14">
				<div className="">
					<h1 className="text-4xl  font-bold text-[#173B6C]">Skills</h1>
					<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
				</div>

				<p className=" mt-6 text-[#272829]">
					Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
					aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
					quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
					fugiat sit in iste officiis commodi quidem hic quas.
				</p>

				<div className="grid grid-cols-2 gap-x-8 gap-y-4">
					<div className="">
						<label className="text-black font-semibold">HTML</label>
						<Progress percent={96} />
					</div>
					<div className="">
						<label className="text-black font-semibold">CSS</label>
						<Progress percent={95} />
					</div>
					<div className="">
						<label className="text-black font-semibold">JavaScript</label>
						<Progress percent={89} />
					</div>
					<div className="">
						<label className="text-black font-semibold">React.js</label>
						<Progress percent={85} />
					</div>
					<div className="">
						<label className="text-black font-semibold">Node.js</label>
						<Progress percent={72} />
					</div>
					<div className="">
						<label className="text-black font-semibold">Express.js</label>
						<Progress percent={72} />
					</div>
					<div className="">
						<label className="text-black font-semibold">MongoDB</label>
						<Progress percent={68} />
					</div>
					<div className="">
						<label className="text-black font-semibold">Tailwindcss</label>
						<Progress percent={88} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
