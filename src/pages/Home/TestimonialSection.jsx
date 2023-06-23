import React, { useRef, useState } from "react";
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const TestimonialSection = () => {
	return (
		<section id="testimonial" className="px-28 py-10 bg-[#f5f8fd]">
			<div className="mb-2">
				<h1 className=" text-[#173B6C]">Testimonials</h1>
				<div className="w-[80px] h-[4px] bg-[#149DDD] mt-6"></div>
			</div>
			<p className="mb-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
				deleniti ex recusandae nostrum maiores nemo in omnis error numquam nisi
				odit suscipit officiis ducimus, natus esse totam. Temporibus eum dolorem
				blanditiis, vitae alias, earum tempora ipsa, veritatis ullam at commodi.
			</p>
			<Swiper
				 
                
			>
				<SwiperSlide>
					<div className=" p-3 bg-white shadow-md">
						<p className=" relative italic after:content-[',,'] after:text-8xl after:absolute after:-right-0 after:-bottom-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo quos nesciunt tenetur quis quibusdam cupiditate dolorem! Sunt, repudiandae quos?
						</p>
					</div>
				</SwiperSlide>
				
				
			</Swiper>
		</section>
	);
};

export default TestimonialSection;
