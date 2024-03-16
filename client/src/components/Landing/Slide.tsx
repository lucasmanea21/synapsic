import React, { useState, useEffect } from "react";
import NFTCard from "../NFT/NFTCard";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Navigation]);

const Slide = ({
	items,
	id,
	title,
}: {
	items: any;
	id: string;
	title?: string;
}) => {
	const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

	useEffect(() => {
		const carousel = new Swiper(`.${id}-carousel`, {
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
			grabCursor: true,
			loop: false,
			centeredSlides: false,
			autoPlay: {
				delay: 5000,
			},
			initialSlide: 0,
			spaceBetween: 24,
			navigation: {
				nextEl: `.${id}-carousel-next`,
				prevEl: `.${id}-carousel-prev`,
			},
		});
		setSwiperInitialized(true);
	}, []);

	return (
		<div className="">
			<div className="flex gap-10 pb-8 ">
				<h3
					id={id}
					className="inline-flex text-2xl font-bold text-transparent scroll-mt-8 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 "
				>
					{title ? title : id}
				</h3>
				{/* <SeeAll /> */}
			</div>

			<div className={`${id}-carousel swiper-container group`}>
				<div className="swiper-wrapper w-fit">
					{items.map(
						(item: any, index: any) =>
							item.category === id && (
								<NFTCard item={item} index={index} key={index} />
							),
					)}
				</div>
			</div>

			{/* Arrows */}
			<div className="flex justify-end pt-8">
				<button
					className={`${id}-carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group`}
				>
					<span className="sr-only">Previous</span>
					<svg
						className="w-4 h-4 transition duration-150 ease-in-out fill-slate-500 group-hover:fill-purple-500"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
					</svg>
				</button>
				<button
					className={`${id}-carousel-next relative z-20 w-12 h-12 flex items-center justify-center group`}
				>
					<span className="sr-only">Next</span>
					<svg
						className="w-4 h-4 transition duration-150 ease-in-out fill-slate-500 group-hover:fill-purple-500"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Slide;
