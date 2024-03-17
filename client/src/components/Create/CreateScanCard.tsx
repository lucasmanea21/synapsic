"use client";
import React, { useState } from "react";
import { Card, CardHeader, Divider, Button } from "@nextui-org/react";
import { FaBrain, FaDatabase } from "react-icons/fa";
import CreateFromData from "./CreateFromData";
import BrainScan from "./BrainScan";
import Header from "./CardHeader";
import CardWrapper from "../Wrappers/CardWrapper";

const CreateScanCard = () => {
	const [selection, setSelection] = useState("");

	const handleSelectOption = (option: string) => {
		setSelection(option);
	};

	const handleGoBack = () => {
		setSelection("");
	};

	return (
		<CardWrapper className="max-w-xl">
			<Header />
			<Divider />
			{selection === "data" ? (
				<div>
					<button
						onClick={handleGoBack}
						className="flex items-center gap-2 mb-4 text-sm text-gray-500 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Go Back
					</button>
					<CreateFromData />
				</div>
			) : selection === "scan" ? (
				<div className="mt-6">
					<button
						onClick={handleGoBack}
						className="flex items-center gap-2 mb-4 text-sm text-gray-500 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Go Back
					</button>
					<BrainScan />
				</div>
			) : (
				<div className="flex gap-5">
					<div
						className="w-[50%] p-5 flex gap-5 flex-col py-24 px-12 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
						onClick={() => handleSelectOption("data")}
					>
						<div className="flex">
							<FaDatabase className="text-7xl" />
						</div>
						<p className="text-3xl">Create from dataset</p>
						<p className="text-gray-200 text-md">
							Use existing neural datasets and upload them to the blockchain.
							Verified by our AI, secured by Noir.
						</p>
					</div>
					<Divider orientation="vertical" />
					<div
						className="w-[50%] p-5 flex gap-5 flex-col py-24 px-12 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
						onClick={() => handleSelectOption("scan")}
					>
						<div className="flex ">
							<FaBrain className="text-7xl" />
						</div>
						<p className="text-3xl">Scan your brain</p>
						<p className="text-gray-200 text-md">
							Take a live EEG using our brain device and get a cool brain scan
							collectible.
						</p>
					</div>
				</div>
			)}
		</CardWrapper>
	);
};

export default CreateScanCard;
