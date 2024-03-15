"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type NFTCardProps = {
	title: string;
	image: string;
	price: string;
	type: string;
	id: string;
};

const NFTCard = ({ title, image, price, type, id }: NFTCardProps) => {
	return (
		<Card
			shadow="sm"
			key={id}
			isPressable
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
					src={image}
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
