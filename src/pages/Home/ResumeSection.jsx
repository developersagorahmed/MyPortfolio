import React from "react";

const ResumeSection = () => {
	return (
		<div id="resume">
			<div className="px-28 py-10">
				<div className="">
					<h1 className=" text-[#173B6C]">Resume</h1>
					<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
				</div>
				<p className=" text-[#272829] mb-6">
					Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
					aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
					quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
					fugiat sit in iste officiis commodi quidem hic quas.
				</p>

				<div className="grid grid-cols-2 gap-10 ">
					<div>
						<h2 className="mb-2">Summary</h2>
						<div className="space-y-3">
							<h3 className="font-bold text-xl">Sagor Ahmed</h3>
							<p>
								<em>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Ipsam vitae ex, nisi quisquam molestiae repellat totam
									perspiciatis sunt laboriosam inventore explicabo eveniet vel
									sint, numquam accusantium. Nobis temporibus doloremque
									corporis.
								</em>
							</p>
							<ul className="list-disc ml-5">
								<li>Gazipur, Dhaka, Bangladesh</li>
								<li>+880 17384 85960</li>
								<li>sagorahmed090400@gmail.com</li>
							</ul>
						</div>
					</div>
					<div>
						<h2 className="mb-2">Professional Experience</h2>
						<div className="space-y-3">
							<h3 className="font-bold text-xl">
								SENIOR GRAPHIC DESIGN SPECIALIST
							</h3>
							<div className="inline-block bg-[#e4edf9] p-1">
								2020 - Present
							</div>
							<p className="italic">Experion, New York, NY</p>

							<ul className="list-disc ml-5">
								<li>
									Lead in the design, development, and implementation of the
									graphic, layout, and production communication materials
								</li>
								<li>
									Delegate tasks to the 7 members of the design team and provide
									counsel on all aspects of the project.
								</li>
								<li>
									sSupervise the assessment of all graphic materials in order to
									ensure quality and accuracy of the design
								</li>
								<li>
									Oversee the efficient use of production project budgets
									ranging from $2,000 - $25,000
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeSection;
