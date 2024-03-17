"use client";
import CardWrapper from "@/components/Wrappers/CardWrapper";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import React from "react";

const NFTPage = () => {
	return (
		<PageWrapper>
			<div className="w-[80%] jsutify-self-center mx-auto">
				<CardWrapper>
					<div className="flex flex-col">
						<div>
							<p className="text-2xl">EEG Dataset</p>
							<p className="text-sm text-gray-200">
								A set of curated EEG data containing more than 200 examples and
								20MB of storage
							</p>
						</div>
						<div className="flex gap-2 mt-3">
							<div className="p-2 bg-gray-800 rounded-md">Verified</div>
							<div className="p-2 bg-gray-800 rounded-md">EEG Data</div>
							<div className="p-2 bg-gray-800 rounded-md">213.3MB</div>
						</div>
						<div className="flex mt-3">
							<div className="p-2 bg-gray-800 rounded-md">
								Verify ZK proof on Noir
							</div>
						</div>
						<div className="flex mt-3">
							<div className="p-2 bg-gray-700 rounded-md">Buy - 0.05 ETH</div>
						</div>
					</div>
				</CardWrapper>
			</div>
		</PageWrapper>
	);
};

export default NFTPage;
