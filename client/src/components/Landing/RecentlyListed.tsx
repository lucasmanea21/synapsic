import React from "react";
import Slide from "./Slide";

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

const RecentlyListed = () => {
	return (
		<div>
			<Slide items={nftData} id="Recently Listed" />
		</div>
	);
};

export default RecentlyListed;
