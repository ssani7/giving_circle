'use client';

import banner1 from '@/assets/banner.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Carousel = () => {
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 7000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: 'carouselDots',
	};

	const banners = [banner1, banner2, banner3];

	return (
		<div className="w-full">
			<Slider {...settings}>
				{banners.map((banner, index) => (
					<div key={index} className="w-full h-[90vh] relative">
						<div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
						<Image className="w-full object-cover h-full" src={banner} width={1000} height={1000} alt="food donation" />

						<div className="absolute text-center w-full lg:text-left left-0 lg:left-16 top-0 bottom-0 h-fit my-auto">
							<p className="text-white text-5xl font-light">Children need</p>
							<p className="text-7xl font-extrabold leading-snug text-[#6bcc97]">Your help</p>
							<p className="text-2xl text-gray-200 font-medium">Lets make a better world by giving togather</p>
							<div className="w-full flex mt-5 max-w-[80%] lg:max-w-xl mx-auto lg:mx-0">
								<input className="w-full rounded-l-lg px-4 text-sm" type="text" placeholder="Search charity to donate" />
								<button className="px-4 bg-[#6bcc97] py-2 rounded-r-lg">Search</button>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
