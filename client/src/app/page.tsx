"use client";
import RecentlyListed from "@/components/Landing/RecentlyListed";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import { Paper, Typography } from "@mui/material";
import { Button } from "@nextui-org/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next DApp",
	description:
		"A template for building Ethereum-based dApps using Next.js, Material UI, Wagmi/Viem, and WalletConnect.",
};

const styles = {
	paper: {
		p: 4,
		textAlign: "center",
	},
};

const DefaultPage = () => {
	return (
		<PageWrapper>
			<div className="max-w-5xl px-4 mx-auto sm:px-5">
				<div className="pt-3 md:pt-5">
					{/* Section header */}
					<div className="pb-5 text-center md:pb-8">
						{/* <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200">
						Integrations & Add-ons
					</div> */}
						<h1 className="pb-4 font-bold text-transparent h1 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
							Your brain data,
							<br /> fully onchain.
						</h1>
						<div className="max-w-3xl mx-auto">
							<p className="text-lg text-slate-400">
								Synapsis is a cross-chain neural data marketplace & hub, aiming
								to make healthcare more open and decentralized.
							</p>
						</div>

						<div className="flex items-center justify-center gap-3 mt-10">
							<Button>Learn more</Button>
							<Button>Get Started</Button>
						</div>
					</div>
					<RecentlyListed />
					{/* <Assets /> */}

					{/* <Stats /> */}
				</div>
			</div>
			{/* <Phone /> */}
		</PageWrapper>
	);
};

export default DefaultPage;
