"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import BrainScan from "../../../public/images/brainscans.png";
import { useContract } from "../ContractProvider";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

type NFTCardProps = {
	title: string;
	image: string;
	price: string;
	type: string;
	id: string;
	desc: string;
	isSwiper?: boolean;
};

const NFTCard = ({
	title,
	image,
	price,
	type,
	id,
	isSwiper,
	desc,
}: NFTCardProps) => {
	const { nft, executeContractRead, executeContractWrite } = useContract();
	const { isConnected } = useAccount();
	const router = useRouter();

	const handleBuy = async () => {
		try {
			if (!isConnected) return open();

			const [result, hash] = await executeContractWrite({
				address: nft.address,
				abi: nft.abi,
				functionName: "buyNft",
				args: [id],
			});

			console.log({ result, hash });
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Card
			shadow="sm"
			key={id}
			isPressable
			onClick={() => router.push("/nft/2")}
			className={`${
				isSwiper && "swiper-slide"
			} xs:w-full sm:w-[49%] md:w-[32%] h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative`}
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
				<div className="flex gap-2 mt-1 text-xs text-white">
					<div className="p-2 bg-gray-800 rounded-md">Verified</div>
					<div className="p-2 bg-gray-800 rounded-md">EEG Data</div>
					<div className="p-2 bg-gray-800 rounded-md">213.3MB</div>
				</div>
				<div>
					<p className="my-3 text-xs text-left text-gray-200 align-left">
						{desc}
					</p>
				</div>
				<div className="flex gap-2 mt-6">
					<div
						className="p-2 bg-blue-600 rounded-md"
						onClick={() => price != "Free" && handleBuy()}
					>
						{price != "Free" ? `Buy - ${price} ETH` : `FREE`}
					</div>
					<div className="p-2 bg-gray-700 rounded-md">View more</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default NFTCard;
