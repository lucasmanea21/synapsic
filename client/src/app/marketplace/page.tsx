"use client";
import React from "react";
import NFTCard from "@/components/NFT/NFTCard";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import CardWrapper from "@/components/Wrappers/CardWrapper";

const nftData = [
	{
		title: "NFT Title 1",
		price: "0.1",
		type: "eeg",
		image: "https://via.placeholder.com/500x200",
		id: "1",
	},
	{
		title: "NFT Title 2",
		price: "0.2",
		type: "art",
		image: "https://via.placeholder.com/500x200",
		id: "2",
	},
	{
		title: "NFT Title 3",
		price: "0.2",
		type: "art",
		image: "https://via.placeholder.com/500x200",
		id: "3",
	},
	{
		title: "NFT Title 4",
		price: "0.2",
		type: "art",
		image: "https://via.placeholder.com/500x200",
		id: "4",
	},
	{
		title: "NFT Title 5",
		price: "0.2",
		type: "art",
		image: "https://via.placeholder.com/500x200",
		id: "5",
	},
];

const MarketplacePage: React.FC = () => {
	return (
		<PageWrapper>
			<div className="w-full max-w-6xl p-10 px-4 mx-auto sm:px-8">
				{/* <CardWrapper> */}
				<div className="flex flex-col p-5 bg-opacity-0 rounded-md bg-zinc-900">
					<div className="mb-8">
						<p className="text-3xl ">Marketplace</p>
					</div>
					<div className="flex flex-wrap w-full gap-4">
						{nftData.map((nft) => (
							<NFTCard
								key={nft.id}
								title={nft.title}
								price={nft.price}
								type={nft.type}
								image={nft.image}
								id={nft.id}
							/>
						))}
					</div>
				</div>
				{/* </CardWrapper> */}
			</div>
		</PageWrapper>
	);
};

export default MarketplacePage;