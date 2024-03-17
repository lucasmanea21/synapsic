"use client";
import React from "react";
import NFTCard from "@/components/NFT/NFTCard";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import CardWrapper from "@/components/Wrappers/CardWrapper";
import { nftData } from "../../components/NFT/data";

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
							<NFTCard {...nft} key={nft.id} />
						))}
					</div>
				</div>
				{/* </CardWrapper> */}
			</div>
		</PageWrapper>
	);
};

export default MarketplacePage;
