import React from "react";
import Slide from "./Slide";
import BrainScan from "../../../public/images/brainscans.jpg";
import { nftData } from "@/app/marketplace/page";

const RecentlyListed = () => {
	return <Slide items={nftData} id="Recently Listed Data" />;
};

export default RecentlyListed;
