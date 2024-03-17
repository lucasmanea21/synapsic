"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import CardWrapper from "../Wrappers/CardWrapper";
import { IDKitWidget } from "@worldcoin/idkit";
import { useContract } from "../ContractProvider";
import { useAccount } from "wagmi";

const sendDataToBackend = async (data: any) => {
	console.log("Sending data to backend:", data);
	// Simulate API call
	return new Promise((resolve) => setTimeout(resolve, 1000));
};

const onSuccess = () => {
	console.log("success");
};

const CreateFromData = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { nft, executeContractRead, executeContractWrite } = useContract();
	const { isConnected } = useAccount();

	const onSubmit = async (data: any) => {
		await sendDataToBackend(data);
		reset(); // Clear form after submission
	};

	const handleCreate = async () => {
		try {
			if (!isConnected) return open();

			const [result, hash] = await executeContractWrite({
				address: nft.address,
				abi: nft.abi,
				functionName: "createNFT",
				args: ["exampleTokenURI"],
			});

			console.log({ result, hash });
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 p-4"
			>
				<input
					{...register("name", { required: true })}
					placeholder="Name"
					className="w-full max-w-xs p-2 bg-opacity-50 rounded-md input input-bordered bg-zinc-700"
				/>
				{errors.name && (
					<span className="text-red-500">This field is required</span>
				)}
				<textarea
					{...register("description", { required: true })}
					placeholder="Description of your data"
					className="w-full max-w-xs p-2 rounded-md textarea textarea-bordered bg-zinc-700"
				/>
				{errors.description && (
					<span className="text-red-500">This field is required</span>
				)}
				<input
					type="file"
					{...register("file", { required: true })}
					className="w-full max-w-xs file-input"
				/>
				{errors.file && <span className="text-red-500">File is required</span>}
				<IDKitWidget
					app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
					action="verify" // this is your action name from the Developer Portal
					signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
					onSuccess={onSuccess}
					verification_level="device" // minimum verification level accepted, defaults to "orb"
				>
					{({ open }) => (
						<button
							className="flex w-auto p-2 font-medium text-black bg-gray-100 rounded-md text-md "
							onClick={open}
						>
							Verify with World ID
						</button>
					)}
				</IDKitWidget>
				,
				<Button
					auto
					type="submit"
					className="mt-4 btn"
					onClick={() => handleCreate()}
				>
					Submit Data
				</Button>
			</form>
		</div>
	);
};

export default CreateFromData;
