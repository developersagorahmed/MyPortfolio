import React from "react";
import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi";

const ContactSection = () => {
	return (
		<section id="contact" className="py-10 p-10 md:px-20 lg:px-24">
			<div className="mb-2">
				<h1 className=" text-[#173B6C]">Contact</h1>
				<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
			</div>
			<p className="mb-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officia
				itaque explicabo ad! Quod illum inventore mollitia? Quia nisi, neque
				perferendis asperiores aperiam tempore. Aliquam dolor, at, quos nobis
				nam laboriosam in vitae modi eos amet iste recusandae, suscipit
				possimus?
			</p>
			<div className="flex space-x-6">
				<div className="space-y-6 shadow-lg p-6 basis-[28%] rounded">
					<div className="flex space-x-4 items-start group">
						<div className="border-primary border bg-primary/5 grid content-center justify-center p-2 rounded-full text-primary group-hover:bg-transparent group-hover:text-white group-hover:border-primary group-hover:bg-primary duration-300">
							<BiMap size={30} />
						</div>
						<div>
							<h2 className="mb-1">Location:</h2>
							<p>Gazipur, Dhaka, Bangladesh</p>
						</div>
					</div>
					<div className="flex space-x-4 items-start group">
						<div className="border-primary border bg-primary/5 grid content-center justify-center p-2 rounded-full text-primary group-hover:bg-transparent group-hover:text-white group-hover:border-primary group-hover:bg-primary duration-300">
							<BiEnvelope size={30} />
						</div>
						<div>
							<h2 className="mb-1">Email:</h2>
							<p>sagorahmed090400@gmail.com</p>
						</div>
					</div>
					<div className="flex space-x-4 items-start group">
						<div className="border-primary border bg-primary/5 grid content-center justify-center p-2 rounded-full text-primary group-hover:bg-transparent group-hover:text-white group-hover:border-primary group-hover:bg-primary duration-300">
							<BiPhone size={30} />
						</div>
						<div>
							<h2 className="mb-1">Call:</h2>
							<p>+880 17384 85960</p>
						</div>
					</div>
					
				</div>
				<form action="" className="shadow-lg basis-[72%] p-6 space-y-6 rounded">
					<div className="flex space-x-6 w-full">
						<div className="flex flex-col basis-1/2 space-y-1">
							<label htmlFor="name" className="font-semibold">
								Your Name
							</label>
							<input
								className="outline-primary border border-primary p-2 rounded"
								type="text"
								name="name"
								id="name"
							/>
						</div>
						<div className="flex flex-col  basis-1/2 space-y-1">
							<label htmlFor="email" className="font-semibold">
								Your Email
							</label>
							<input
								className="outline-primary border border-primary p-2 rounded"
								type="email"
								name="email"
								id="email"
							/>
						</div>
					</div>
					<div className="flex flex-col space-y-1">
						<label htmlFor="subject" className="font-semibold">
							Subject
						</label>
						<input
							className="outline-primary border border-primary p-2 rounded"
							type="text"
							name="subject"
							id="subject"
						/>
					</div>
					<div className="flex flex-col space-y-1">
						<label htmlFor="message" className="font-semibold">
							Message
						</label>
						<textarea
							className="outline-primary border border-primary p-2 rounded resize-none"
							name="message"
							id="message"
							cols="30"
							rows="8"
						></textarea>
					</div>
                    <div className="flex justify-center">
                        <input className="bg-primary hover:bg-primary/80 text-white font-semibold px-5 py-3 rounded duration-200" type="submit" value="Send Message" />
                    </div>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
