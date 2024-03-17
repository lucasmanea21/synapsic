"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import BrainScan from "../../../public/images/brainscans.jpg";

type NFTCardProps = {
	title: string;
	image: string;
	price: string;
	type: string;
	id: string;
	isSwiper?: boolean;
};

const NFTCard = ({ title, image, price, type, id, isSwiper }: NFTCardProps) => {
	return (
		<Card
			shadow="sm"
			key={id}
			isPressable
			className={`${
				isSwiper && "swiper-slide"
			}  h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative`}
			onPress={() => console.log("item pressed")}
		>
			<CardBody className="p-0 overflow-visible ">
				<Image
					shadow="sm"
					radius="lg"
					width={500}
					height={140}
					alt={title}
					className="w-full object-cover h-[140px]"
					src={BrainScan}
				/>
			</CardBody>
			<CardFooter className="flex flex-col items-start justify-between text-white bg-opacity-20 bg- text-small bg-zinc-800">
				<p className="text-xl">{title}</p>
				<div className="flex gap-2 mt-3 text-xs text-white">
					<div className="p-2 bg-gray-800 rounded-md">Verified</div>
					<div className="p-2 bg-gray-800 rounded-md">EEG Data</div>
					<div className="p-2 bg-gray-800 rounded-md">213.3MB</div>
				</div>
				<div className="flex gap-2 mt-3">
					<div className="p-2 bg-gray-700 rounded-md">Buy - {price} ETH</div>
					<div className="p-2 bg-gray-700 rounded-md">View more</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default NFTCard;
