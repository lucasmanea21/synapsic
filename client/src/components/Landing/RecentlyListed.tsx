import React from "react";
import Slide from "./Slide";
import BrainScan from "../../../public/images/brainscans.png";
import { nftData } from "../NFT/data";

const RecentlyListed = () => {
	return <Slide items={nftData} id="Recently Listed Data" />;
};

export default RecentlyListed;
